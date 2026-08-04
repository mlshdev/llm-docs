> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/manage/activity/event-streaming/amazon-firehose.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/manage/activity/event-streaming/amazon-firehose.mdx)

# Stream Network Activity to Amazon Data Firehose

[Amazon Data Firehose](https://docs.aws.amazon.com/firehose/) is a fully managed service for delivering real-time streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift,
an other AWS services. You can use Amazon Data Firehose as a bridge between NetBird and other third-party providers that support Data Firehose
to ingest, transform and analyze your network activity events.

> **Note**
>
> This feature is only available in the cloud version of NetBird.

## Prerequisites

Before you start creating and configuring an Amazon Data Firehose event streaming integration, ensure that you have the following:

- An AWS account with the permissions to create and manage Data Firehose delivery streams.
- Permissions to create and manage IAM users, roles and policies.

If you don't have the required permissions, ask your AWS administrator to grant them to you.

## Create a Data Firehose Stream

- Navigate to the [Data Firehose Dashboard](https://console.aws.amazon.com/firehose/home)
- Click `Create Firehose stream`
- As source select `Direct PUT` and the desired destination
- Give it a descriptive name like `netbird-activity-events` and configure the stream to your needs

## Create an IAM User

- Navigate to the [IAM Dashboard](https://console.aws.amazon.com/iam/home)
- Create an IAM User (for details see the [Amazon Docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html))
- Create a custom policy with the following permissions (replace the resource with the ARN of your delivery stream):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "firehose:PutRecord",
                "firehose:PutRecordBatch"
            ],
            "Resource": "arn:aws:firehose:region:accountID:deliverystream/netbird-event-streaming"
        }
    ]
}
```

- Attach the policy to the IAM user
- Select the user and navigate to the `Security credentials` tab
- Click `Create access key`
- Select `Third-party service` and click `Next`
- Give it a description
- Store `Access key` and `Secret access key` in a secure place. You will need these when configuring an integration in NetBird.

## Create an Integration in NetBird

- Navigate to the [Integrations » Event Streaming](https://preview.netbird.io/integrations) tab in the NetBird dashboard

![event-streaming-integration](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/activity/event-streaming/event-streaming-integration.png)

- Enable and configure the `Amazon Data Firehose` integration
- First select the region your Firehose stream is created in

![firehose-region-select](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/activity/event-streaming/amazon-firehose/firehose-region-select.png)

- Then enter the Firehose stream name you created in Step 1 and click `Next`

![firehose-stream-name](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/activity/event-streaming/amazon-firehose/firehose-stream-name.png)

- Enter the `Access key` and `Secret access key` you created in Step 2 and click `Connect`

![firehose-iam-credentials](https://raw.githubusercontent.com/netbirdio/docs/14375a092774f250d45a85f6d5f3c524d99fd111/public/docs-static/img/manage/activity/event-streaming/amazon-firehose/firehose-iam-credentials.png)
