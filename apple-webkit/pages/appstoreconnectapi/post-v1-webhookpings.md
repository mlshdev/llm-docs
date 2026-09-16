> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-webhookpings

# Test Your Webhook

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Send an event to your server to verify your server-side webhook configuration.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/webhookPings
```

## HTTP Body

Content type: `application/json`

Type: `WebhookPingCreateRequest`

## Response Codes

- `201` Created — `WebhookPingResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring and parsing App Store Connect API webhook notifications](configuring-webhook-notifications.md)
