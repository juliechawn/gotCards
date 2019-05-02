const awsconfig =  {
  "AWS_REGION": process.env.REACT_APP_REGION,
  "S3_KEY": process.env.REACT_APP_ACCESS_KEY_ID,
  "S3_SECRET": process.env.REACT_APP_SECRET_ACCESS_KEY,
  "S3_BUCKET": process.env.REACT_APP_S3_BUCKET,
};

export default awsconfig;