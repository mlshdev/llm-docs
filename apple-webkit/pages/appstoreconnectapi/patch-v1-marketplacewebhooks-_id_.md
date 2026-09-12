> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-marketplacewebhooks-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-marketplacewebhooks-_id_)

# Modify a Marketplace Webhook Configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Update the endpoint URL and secret for alternative distribution package notifications.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `marketplaceWebhooks` resource ID from the [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md) response.

## HTTP Body

Content type: `application/json`

Type: `MarketplaceWebhookUpdateRequest`

## Response Codes

- `200` OK — `MarketplaceWebhookResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
PATCH https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/c74970b8-6be0-40fa-8f51-8e1532005635
{
  "data": {
    "type": "marketplaceWebhooks",
    "id": "c74970b8-6be0-40fa-8f51-8e1532005635",
    "attributes": {
      "endpointUrl": "https://example-2.com/api/ingest/notifications",
      "secret": "mySecret"
    }
  }
}
```

**Response**

```json
{
  "data": [
    {
      "type": "marketplaceWebhooks",
      "id": "c74970b8-6be0-40fa-8f51-8e1532005635",
      "attributes": {
        "endpointUrl": "https://example-2.com/api/ingest/notifications"
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

- [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md): Deprecated. Get the endpoint URL for alternative distribution package notifications.
- [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md): Deprecated. Add a new endpoint URL and secret for alternative distribution package notifications.
- [Delete a Marketplace Webhook Configuration](delete-v1-marketplacewebhooks-_id_.md): Deprecated. Delete a specific marketplace notifcation endpoint URL.
