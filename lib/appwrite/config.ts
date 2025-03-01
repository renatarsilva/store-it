export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: (process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION =
    "67c104720008bcf7825b"!),
  filesCollectionId: (process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION =
    "67c1087c00336fa14d89"!),
  bucketId: (process.env.NEXT_PUBLIC_APPWRITE_BUCKET = "67c10bcf000431b62a80"!),
  createSecretKey: process.env.NEXT_APPWRITE_KEY!,
};
