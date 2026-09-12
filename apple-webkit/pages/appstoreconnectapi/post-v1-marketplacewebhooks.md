> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-marketplacewebhooks](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-marketplacewebhooks)

# Add a Marketplace Webhook Configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Add a new endpoint URL and secret for alternative distribution package notifications.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks
```

## HTTP Body

Content type: `application/json`

Type: `MarketplaceWebhookCreateRequest`

## Response Codes

- `201` Created — `MarketplaceWebhookResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.3 release notes](app-store-connect-api-3-3-release-notes.md)
- [Configuring alternative marketplaces and alternative marketplace apps](configuring-alternative-marketplaces-and-alternative-marketplace-apps.md)
- [Creating alternative distribution packages](creating-alternative-distribution-packages.md)

<a id="Discussion"></a>

## Discussion

Each developer account has a single marketplace webhooks `endpointUrl`, so if you operate mutliple marketplaces all notifications come to a single endpoint. The notification payload contains the `marketplaceAppId.`

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks
{
  "data": {
    "type": "marketplaceWebhooks",
    "attributes": {
      "endpointUrl": "https://example.com/api/ingest/notifications",
      "secret": "mysecretstring"
    }
  }
}
```

**Response**

```json
{
  “data”: [
    {
      “type”: “marketplaceWebhooks”,
      “id”: “c74970b8-6be0-40fa-8f51-8e1532005635”,
      “attributes”: {
        “endpointUrl”: “https://example.com/api/ingest/notifications”
      },
      “links”: {
        “self”: “https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/c74970b8-6be0-40fa-8f51-8e1532005635”
      }
    }
  ],
  “links”: {
    “self”: “https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks”
  },
  “meta”: {
    “paging”: {
      “total”: 1,
      “limit”: 50
    }
  }
}
```

## See Also

### Managing Webhook Endpoint URLs

- [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md): Deprecated. Get the endpoint URL for alternative distribution package notifications.
- [Modify a Marketplace Webhook Configuration](patch-v1-marketplacewebhooks-_id_.md): Deprecated. Update the endpoint URL and secret for alternative distribution package notifications.
- [Delete a Marketplace Webhook Configuration](delete-v1-marketplacewebhooks-_id_.md): Deprecated. Delete a specific marketplace notifcation endpoint URL.
