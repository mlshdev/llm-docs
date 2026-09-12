> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-alternativedistributionkeys-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-alternativedistributionkeys-_id_)

# Remove an Alternative Distribution Key

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.3+

Remove an alternative distribution key from your account.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/alternativeDistributionKeys/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `alternativeDistributionKey` resource ID from the [Read an App’s Alternative Distribution Key](get-v1-apps-_id_-alternativedistributionkey.md) response.

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
DELETE https://api.appstoreconnect.apple.com/v1/alternativeDistributionKeys/52c5cb04-1163-4a30-ad4f-a3433cd6a4f6
```

**Response**

```json
204
```

## See Also

### Creating and reading keys

- [Creating keys and establishing alternative marketplace connections](creating-keys-and-establishing-alternative-marketplace-connections.md): Manage keys you use to sign JSON web tokens and connect marketplaces with apps.
- [Creating and configuring keys for web distribution](creating-and-configuring-keys-for-web-distribution.md): Manage keys you use to sign JSON web tokens (JWTs).
- [Add an Alternative Distribution Key](post-v1-alternativedistributionkeys.md): Add an alternative distribution key for your alternative marketplace app or web distribution.
- [List Alternative Distribution Keys](get-v1-alternativedistributionkeys.md): List the alternative distribution key for your account.
- [Read Alternative Distribution Key Information](get-v1-alternativedistributionkeys-_id_.md): Read the public key information for a specific alternative distribution key.
- [Get the alternative distribution key ID for an app](get-v1-apps-_id_-relationships-alternativedistributionkey.md)
- [Read an App’s Alternative Distribution Key](get-v1-apps-_id_-alternativedistributionkey.md): Get the alternative distribution keys for a specific app.
