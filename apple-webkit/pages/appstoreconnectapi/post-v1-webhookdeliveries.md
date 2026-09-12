> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-webhookdeliveries](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-webhookdeliveries)

# Redeliver a Previous Notification

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Resend a webhook notification from a specified template.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/webhookDeliveries
```

## HTTP Body

Content type: `application/json`

Type: `WebhookDeliveryCreateRequest`

## Response Codes

- `201` Created — `WebhookDeliveryResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

> **Note**

> The `template` in this payload is the original delivery that you want to resend. Find the `id` using [Read the Deliveries for a Webhook](get-v1-webhooks-_id_-deliveries.md).

## See Also

### Managing webhook deliveries

- [Read the Deliveries for a Webhook](get-v1-webhooks-_id_-deliveries.md): Get a list of deliveries for a specific webhook configuration.
- [List delivery IDs for a webhook](get-v1-webhooks-_id_-relationships-deliveries.md)
