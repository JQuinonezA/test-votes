import mongoose from "mongoose";

const ProvinceSchema = new mongoose.Schema({
    name: { type: String, requiered: true },
});

export const ProvinceModel = mongoose.model("provinces", ProvinceSchema);

export const createProvince = (values: Record<string, any>) =>
    new ProvinceModel(values).save().then((province) => province.toObject());
export const getProvinceById = (id: string) => ProvinceModel.findById(id);
export const getProvinceByName = (name: string) => ProvinceModel.findOne({ name });
export const getProvinces = () => ProvinceModel.find();
export const updateProvinceById = (id: string, values: Record<string, any>) => ProvinceModel.findByIdAndUpdate(id, values);
export const deleteProvinceById = (id: string) => ProvinceModel.findByIdAndDelete({ _id: id });

