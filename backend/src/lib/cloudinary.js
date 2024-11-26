import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name:'dyzma9ccs' ,
  api_key: '187829375452688',
  api_secret: 'WPENM',
});

export default cloudinary;
