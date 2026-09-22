> Pinned source for Qdrant master: [qdrant-landing/content/documentation/cloud-api.md](https://github.com/qdrant/landing_page/blob/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/content/documentation/cloud-api.md)
> Canonical documentation: https://qdrant.tech/documentation/cloud-api/

# Qdrant Cloud API: Powerful gRPC and Flexible REST/JSON Interfaces

**Note:** This is not the Qdrant REST or gPRC API of the database itself. For database APIs & SDKs, see our list of [interfaces](https://qdrant.tech/documentation/interfaces/)

## Introduction

The Qdrant Cloud API lets you automate the Qdrant Cloud platform. You can use this API to manage your accounts, clusters, backup schedules, authentication methods, hybrid cloud environments, and more.

To cater to diverse integration needs, the Qdrant Cloud API offers two primary interaction models:

- **gRPC API**: For high-performance, low-latency, and type-safe communication. This is the recommended way for backend services and applications requiring maximum efficiency. The API is defined using Protocol Buffers.
- **REST/JSON API**: A conventional HTTP/1.1 (and HTTP/2) interface with JSON payloads. This API is provided via a gRPC Gateway, translating RESTful calls into gRPC messages, offering ease of use for web clients, scripts, and broader tool compatibility.

You can find the API definitions and generated client libraries in our Qdrant Cloud Public API [GitHub repository](https://github.com/qdrant/qdrant-cloud-public-api).
**Note:** The API is split into multiple services to make it easier to use.

### Qdrant Cloud API Endpoints

- **gRPC Endpoint**: grpc.cloud.qdrant.io:443
- **REST/JSON Endpoint**: <https://api.cloud.qdrant.io>

### Authentication

Most of the Qdrant Cloud API requests must be authenticated. Authentication is handled via API keys (so-called Cloud Management Keys), which should be passed in the Authorization header.
**Cloud Management Keys**: `Authorization: apikey <YOUR_CLOUD_MANAGEMENT_KEY>`

Replace \<YOUR\_MANAGEMENT\_KEY> with the actual API key obtained from your Qdrant Cloud dashboard or generated programmatically.

You can create a Cloud Management Keys in the Cloud Console UI. Go to **Access Management** > **Cloud Management Keys**.
![Authentication](https://raw.githubusercontent.com/qdrant/landing_page/32eb334faf299b1cbfe0bddc7cd79e10b77012c4/qdrant-landing/static/documentation/cloud/authentication.png)

**Note:** Ensure that the API key is kept secure and not exposed in public repositories or logs.  Once authenticated, the API allows you to manage clusters, backup schedules, and perform other operations available to your account.

> **Note**
>
> A Cloud Management Key is <strong>not</strong> deleted or revoked when the user who created it is removed or deleted from the account. The key keeps working with whatever permissions it was granted, so it can still be used to manage the account even after its creator no longer has access. Revoke any Cloud Management Keys tied to a user before or when removing them from the account.

### Samples

For samples on how to use the API, with a tool like grpcurl, curl or any of the provided SDKs, please see the [Qdrant Cloud Public API](https://github.com/qdrant/qdrant-cloud-public-api) repository.

## Terraform Provider

Qdrant Cloud also provides a Terraform provider to manage your Qdrant Cloud resources. [Learn more](https://qdrant.tech/documentation/cloud-tools/terraform/).
