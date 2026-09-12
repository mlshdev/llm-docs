> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-marketplacewebhooks-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-marketplacewebhooks-_id_)

# Delete a Marketplace Webhook Configuration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Delete a specific marketplace notifcation endpoint URL.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `marketplaceWebhooks` resource ID from the [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/marketplaceWebhooks/c74970b8-6be0-40fa-8f51-8e1532005635
```

**Response**

```json
204
```

## See Also

### Managing Webhook Endpoint URLs

- [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md): Deprecated. Get the endpoint URL for alternative distribution package notifications.
- [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md): Deprecated. Add a new endpoint URL and secret for alternative distribution package notifications.
- [Modify a Marketplace Webhook Configuration](patch-v1-marketplacewebhooks-_id_.md): Deprecated. Update the endpoint URL and secret for alternative distribution package notifications.
