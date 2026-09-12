> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-webhooks-_id_-relationships-deliveries](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-webhooks-_id_-relationships-deliveries)

# List delivery IDs for a webhook

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/webhooks/{id}/relationships/deliveries
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `WebhookDeliveriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing webhook deliveries

- [Read the Deliveries for a Webhook](get-v1-webhooks-_id_-deliveries.md): Get a list of deliveries for a specific webhook configuration.
- [Redeliver a Previous Notification](post-v1-webhookdeliveries.md): Resend a webhook notification from a specified template.
