import { S3 } from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3({
  accessKeyId,
  secretAccessKey,
})

export const uploadFile = (file: any) => {
  // S3 upload parameters
  const params: any = {
      Bucket: bucketName,
      Key: file.originalname, // File name you want to save as in S3
      Body: file.buffer,
  };

  // Returning as a promise
  return s3.upload(params).promise();
};
