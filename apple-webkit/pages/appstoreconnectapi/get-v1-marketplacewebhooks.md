> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-marketplacewebhooks](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-marketplacewebhooks)

# Read Marketplace Webhook Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Get the endpoint URL for alternative distribution package notifications.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks
```

## Query Parameters

- `fields[marketplaceWebhooks]` — `[string]`: **Allowed values:** `endpointUrl`
- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `MarketplaceWebhooksResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks
```

**Response**

```json
{
  "data": [
    {
      "type": "marketplaceWebhooks",
      "id": "c74970b8-6be0-40fa-8f51-8e1532005635",
      "attributes": {
        "endpointUrl": "https://example.com/api/ingest/notifications"
      },
      "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/c74970b8-6be0-40fa-8f51-8e1532005635"
      }
    }
  ],
  "links": {
    "self": "https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks"
  },
  "meta": {
    "paging": {
      "total": 1,
      "limit": 50
    }
  }
}

```

## See Also

### Managing Webhook Endpoint URLs

- [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md): Deprecated. Add a new endpoint URL and secret for alternative distribution package notifications.
- [Modify a Marketplace Webhook Configuration](patch-v1-marketplacewebhooks-_id_.md): Deprecated. Update the endpoint URL and secret for alternative distribution package notifications.
- [Delete a Marketplace Webhook Configuration](delete-v1-marketplacewebhooks-_id_.md): Deprecated. Delete a specific marketplace notifcation endpoint URL.
