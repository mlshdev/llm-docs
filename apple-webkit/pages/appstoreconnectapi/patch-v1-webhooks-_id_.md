> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-webhooks-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-webhooks-_id_)

# Modify a Webhook Configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Update details for a specific webhook.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/webhooks/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `WebhookUpdateRequest`

## Response Codes

- `200` OK — `WebhookResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)

## See Also

### Managing webhook notifications

- [Read Webhook Information for an App](get-v1-apps-_id_-webhooks.md): Read webhook configuration details for a specific app.
- [Read Webhook Information](get-v1-webhooks-_id_.md): Read configuration details for a specific webhook.
- [Create a Webhook Configuration](post-v1-webhooks.md): Add a new webhook configuration.
- [Delete a Webhook](delete-v1-webhooks-_id_.md): Remove a specific webhook configuration.
