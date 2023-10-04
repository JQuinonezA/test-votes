import express from 'express';

import { createProvince, getProvinces, getProvinceById, deleteProvinceById, getProvinceByName } from '../db/province';


export const registerProvince = async (req: express.Request, res: express.Response) => {

    try {
        const { name } = req.body;


        if (!name) {
            return res.status(400).json({ message: 'Name field is missing' });
        }

        const existingProvince = await getProvinceByName(name);

        if (existingProvince) {
            return res.status(400).json({ message: `The user ${name} already exist` });;
        }

        const province = await createProvince({
            name
        });
        console.log('A province was created');

        return res.status(200).json(province).end();
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Error with the api' });
    }
}




export const getAllProvinces = async (req: express.Request, res: express.Response) => {
    try {
        const provinces = await getProvinces();

        console.log('Provinces was retrived');
        console.log(provinces);

        return res.status(200).json(provinces);

    } catch (error) {
        console.log(error);

        return res.status(400).json({ message: 'Error with the api' });
    }
}


export const deleteProvince = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.body;
        
        const deletedProvince = await deleteProvinceById(id)

        console.log('Province was deleted');


        return res.status(200).json(deletedProvince);

    } catch (error) {
        console.log(error);

        return res.status(400).json({ message: 'Error with the api' });
    }
}

export const updateProvince = async (req: express.Request, res: express.Response) => {
    try {
        const { name, newName } = req.body;

        if(!name){
            return res.status(400).json({ message: 'Invalid name' });
        }


        const province = await getProvinceByName(name)
        province.name = newName;
        await province.save();

        return res.status(200).json(province).end();

    } catch (error) {
        console.log(error);

        return res.status(400).json({ message: 'Error with the api' });
    }
}