> Pinned source for Vast.ai main: [guides/instances/storage/cloud-sync.mdx](https://github.com/vast-ai/docs/blob/b8a3a45b02508573367fc8479ce3a9206139e2a8/guides/instances/storage/cloud-sync.mdx)
> Canonical documentation: https://docs.vast.ai/guides/instances/storage/cloud-sync

# Cloud Sync

Learn how to connect Vast.ai instances with cloud storage providers like Google Drive, S3, Backblaze, Dropbox, and Hugging Face for secure data sync.

Cloud Sync moves data between your Vast instances and cloud storage providers: [Google Drive](#google-drive), [Amazon S3](#amazon-s3), [Backblaze](#backblaze), [Dropbox](#dropbox), and [Hugging Face](#hugging-face). In the console it appears as the **Cloud Copy** button on the instance card; in the CLI it's [`vastai cloud copy`](https://docs.vast.ai/cli/reference/cloud-copy). It's available on Docker-based instances only (not VM/KVM instances).

Cloud services are connected on the [Settings](https://cloud.vast.ai/settings/) page under **Cloud Connections**.

> **Warning**
>
> Cloud Sync credentials are temporarily copied onto your instance's host machine, and Vast connects with the full access those credentials carry. Protect yourself two ways:
>
> - **Scope your credentials.** Use a dedicated account (Google Drive, Dropbox) or a key limited to one bucket/repo (S3, Backblaze, Hugging Face) — never your personal, full-access credentials.
> - **Use Secure Cloud hosts.** Filter with the 'Secure Cloud' checkbox when creating an instance.

## Google Drive

Prerequisites: A Google Drive account — ideally one dedicated to Vast, since Vast connects at the account level.

1. Navigate to the [Settings](https://cloud.vast.ai/settings/) page and, under **Cloud Connections**, select **Connect to Google Drive**.
2. Enter a name for your integration with Google Drive.
3. Submit the name, after which a new tab should open up asking if you would like to give Vast access to your Google Drive.
4. Once the verification prompt has been accepted, you will be redirected back to vast with your Google Drive fully integrated.

![Gdrive](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/cloud-sync-gdrive.webp)

You have now connected your Google Drive with Vast. This will allow you to move data to and from instances even while inactive.

## Amazon S3

Prerequisites: An active Amazon Web Services (AWS) account. Vast connects at the IAM-user level, so create a new IAM user scoped to the data you want to sync rather than reusing an existing one.

1. Create a S3 Bucket in AWS
2. Create an IAM User and Grant Access to the S3 Bucket, we recommend you create a user with access to your specific bucket for this process rather than full access.

![Awss3](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/cloud-sync-awss3.webp)

1. Once the user is created, click the user and go Security credentials.
2. Click Create access key, and enable for Command Line interface
3. Once the access key is created, you will be prompted with an Access Key, and a Secret access Key. This will be the information required to use your AWS user permissions on Vast.
4. Navigate to the [Settings](https://cloud.vast.ai/settings/) page and, under **Cloud Connections**, select **Connect to Amazon S3**.
5. Enter your credentials in the given fields, as well as a name for your integration with Amazon.

You have now connected an Amazon Web Services user with Vast. This will allow you to move files from services like Amazon S3 to and from instances on Vast.

## Backblaze

Any bucket your application key can access is reachable from Vast, so create a new application key scoped to the bucket you want to sync.

1. Create a bucket in Backblaze. It should not matter if the bucket is private or public.
2. Go to Application Keys
3. Select Add a New Application Key
4. Grant access for Read and Write operations on the bucket of your choice
5. Note the keyId and the applicationKey that are returned to you. This is the data required for Vast.
6. Navigate to the [Settings](https://cloud.vast.ai/settings/) page and, under **Cloud Connections**, select **Connect to Backblaze**.
7. Enter your credentials in the given fields, as well as a name for your integration with Backblaze.

You have now connected your Backblaze account with Vast. This will allow you to move data to and from Instances easily.

## Dropbox

Prerequisites: A Dropbox account — ideally one dedicated to Vast, since Vast connects at the account level.

1. Navigate to the [Settings](https://cloud.vast.ai/settings/) page and, under **Cloud Connections**, select **Connect to Dropbox**.
2. Enter a name for your integration with Dropbox.
3. Submit the name, after which a new tab should open up asking if you would like to give Vast access to your Dropbox.
4. Once the verification prompt has been accepted, you will be redirected back to vast with dropbox fully integrated.

You have now connected your Dropbox account with Vast. This will allow you to move data to and from Instances seamlessly.

## Hugging Face

Prerequisites: A Hugging Face account.

Vast connects to Hugging Face through its S3-compatible Storage Buckets: generate S3 credentials on Hugging Face, then add them to Vast. The credentials inherit the permissions of the token they were generated from — they can reach every Storage Bucket in every namespace (user and organizations) that token can access, though other repository types (models, datasets, Spaces) are not exposed. For sensitive use cases, generate the credentials from a fine-grained token scoped to only the buckets you intend to sync.

1. Navigate to your Hugging Face [Access Tokens](https://huggingface.co/settings/tokens) page and select **Create new token**.

2. Under **Token type**, select **Write**, name the token, and select **Create token**.

   ![Hugging Face Write token](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/huggingfacetoken.png)

3. Back on the token list, open the three-dot menu at the far right of your token and select **Generate S3 credentials**.

   ![Generate S3 credentials](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/huggingfaces3credentials.png)

4. Copy the **Access Key ID** (it begins with `HFAK`) and the **Secret Access Key**. The secret is shown only once. Your namespace is the last segment of the **Endpoint URL** (`https://s3.hf.co/<namespace>`).

   ![Hugging Face S3-compatible credentials](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/huggingfaces3compatiblecredentials.png)

5. Create a bucket on your Hugging Face account — this is the bucket you'll point your Vast instance at later in the Cloud Copy UI on the [Instances page](https://cloud.vast.ai/instances/).

6. Navigate to the Vast [Settings](https://cloud.vast.ai/settings/) page and, under **Cloud Connections**, select **Connect Hugging Face**.

7. Enter a name for the connection, your Hugging Face namespace (your username or organization), and the Access Key ID and Secret Access Key from step 4.

   ![Connect Hugging Face on Vast](https://raw.githubusercontent.com/vast-ai/docs/b8a3a45b02508573367fc8479ce3a9206139e2a8/images/credentialssettings.png)

You have now connected Hugging Face with Vast. When copying data, enter the bucket name (for example, `my-bucket`) and the path within it (for example, `checkpoints`) in their separate fields in the Cloud Copy UI. The namespace is part of the connection and is not repeated in either field.
