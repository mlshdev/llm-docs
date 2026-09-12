> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-webhooks-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-webhooks-_id_)

# Delete a Webhook

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Remove a specific webhook configuration.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/webhooks/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing webhook notifications

- [Read Webhook Information for an App](get-v1-apps-_id_-webhooks.md): Read webhook configuration details for a specific app.
- [Read Webhook Information](get-v1-webhooks-_id_.md): Read configuration details for a specific webhook.
- [Create a Webhook Configuration](post-v1-webhooks.md): Add a new webhook configuration.
- [Modify a Webhook Configuration](patch-v1-webhooks-_id_.md): Update details for a specific webhook.
