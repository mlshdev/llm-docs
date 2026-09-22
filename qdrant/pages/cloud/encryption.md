> Pinned source for Qdrant master: [qdrant-landing/content/documentation/cloud/encryption.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/cloud/encryption.md)
> Canonical documentation: https://qdrant.tech/documentation/cloud/encryption/

# Encryption at Rest

Qdrant Managed Cloud encrypts all storage volumes at rest by default. [Premium customers](https://qdrant.tech/documentation/cloud-premium/) can also use their own cloud key management service (KMS) key for additional control over their encryption. Enabling this requires opening a support ticket. Qdrant Support provides the cloud-specific identifiers and detailed setup instructions, then configures your cluster once your key is in place.

## Prerequisites

- A [Premium Managed Cloud](https://qdrant.tech/documentation/cloud-premium/) subscription
- An existing cluster in Qdrant Cloud (create one before requesting encryption)
- Whether your cluster is empty or contains data. We recommend starting with an empty cluster where possible.

## Step 1: Open a Support Ticket

Open a support ticket via the [Qdrant Cloud Console](https://cloud.qdrant.io/) and include:

- Your cluster ID
- Your cloud provider (AWS, GCP, or Azure)
- Whether the cluster is empty or contains data

Qdrant Support will respond with the cloud-specific identifier you need to complete the next step:

- **AWS**: Qdrant's AWS account ID
- **GCP**: Qdrant's Compute Engine service agent email
- **Azure**: Qdrant's Entra application ID (client ID)

Support will also provide detailed setup instructions.

## Step 2: Create Your Encryption Key

Follow the instructions from Qdrant Support to complete the key setup for your cloud provider.

### AWS

In AWS KMS, create a symmetric key in the same region as your cluster and grant Qdrant's account access to it using the identifier provided by Support. Copy the resulting **Key ARN**.

### GCP

In Cloud KMS, create a key ring and symmetric encrypt/decrypt key in the same region as your cluster and grant Qdrant's service agent access to it using the identifier provided by Support. Copy the resulting **Key ID**.

### Azure

Install Qdrant's Entra application into your Azure tenant using the application ID provided by Support, create a Key Vault with an encryption key in the same region as your cluster, and grant Qdrant's service principal access to it. Copy the resulting **Key URL**.

## Step 3: Reply to the Support Ticket

Send Qdrant Support your key identifier:

- **AWS**: Key ARN
- **GCP**: Key ID
- **Azure**: Key URL

Qdrant Support will configure encryption for your cluster.
