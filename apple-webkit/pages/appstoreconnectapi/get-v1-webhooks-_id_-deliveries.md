> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-webhooks-_id_-deliveries](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-webhooks-_id_-deliveries)

# Read the Deliveries for a Webhook

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of deliveries for a specific webhook configuration.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/webhooks/{id}/deliveries
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[webhookDeliveries]` — `[string]`: **Allowed values:** `createdDate`, `deliveryState`, `errorMessage`, `redelivery`, `sentDate`, `request`, `response`, `event`
- `fields[webhookEvents]` — `[string]`: **Allowed values:** `eventType`, `payload`, `ping`, `createdDate`
- `filter[createdDateGreaterThanOrEqualTo]` — `[string]`:
- `filter[createdDateLessThan]` — `[string]`:
- `filter[deliveryState]` — `[string]`: **Allowed values:** `SUCCEEDED`, `FAILED`, `PENDING`
- `include` — `[string]`: **Allowed values:** `event`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `WebhookDeliveriesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)

## See Also

### Managing webhook deliveries

- [List delivery IDs for a webhook](get-v1-webhooks-_id_-relationships-deliveries.md)
- [Redeliver a Previous Notification](post-v1-webhookdeliveries.md): Resend a webhook notification from a specified template.
