> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-webhooks](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-webhooks)

# Create a Webhook Configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add a new webhook configuration.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/webhooks
```

## HTTP Body

Content type: `application/json`

Type: `WebhookCreateRequest`

## Response Codes

- `201` Created — `WebhookResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)
- [Understanding webhook events](webhook-events.md)

## See Also

### Managing webhook notifications

- [Read Webhook Information for an App](get-v1-apps-_id_-webhooks.md): Read webhook configuration details for a specific app.
- [Read Webhook Information](get-v1-webhooks-_id_.md): Read configuration details for a specific webhook.
- [Modify a Webhook Configuration](patch-v1-webhooks-_id_.md): Update details for a specific webhook.
- [Delete a Webhook](delete-v1-webhooks-_id_.md): Remove a specific webhook configuration.
