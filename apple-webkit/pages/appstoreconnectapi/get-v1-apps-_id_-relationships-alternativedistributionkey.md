> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-alternativedistributionkey](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-alternativedistributionkey)

# Get the alternative distribution key ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/alternativeDistributionKey
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppAlternativeDistributionKeyLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating and reading keys

- [Creating keys and establishing alternative marketplace connections](creating-keys-and-establishing-alternative-marketplace-connections.md): Manage keys you use to sign JSON web tokens and connect marketplaces with apps.
- [Creating and configuring keys for web distribution](creating-and-configuring-keys-for-web-distribution.md): Manage keys you use to sign JSON web tokens (JWTs).
- [Add an Alternative Distribution Key](post-v1-alternativedistributionkeys.md): Add an alternative distribution key for your alternative marketplace app or web distribution.
- [List Alternative Distribution Keys](get-v1-alternativedistributionkeys.md): List the alternative distribution key for your account.
- [Read Alternative Distribution Key Information](get-v1-alternativedistributionkeys-_id_.md): Read the public key information for a specific alternative distribution key.
- [Read an App’s Alternative Distribution Key](get-v1-apps-_id_-alternativedistributionkey.md): Get the alternative distribution keys for a specific app.
- [Remove an Alternative Distribution Key](delete-v1-alternativedistributionkeys-_id_.md): Remove an alternative distribution key from your account.
