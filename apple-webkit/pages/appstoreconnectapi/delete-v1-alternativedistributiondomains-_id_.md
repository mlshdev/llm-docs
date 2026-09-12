> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-alternativedistributiondomains-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-alternativedistributiondomains-_id_)

# Delete an Alternative Distribution Domain

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4.1+

Delete the alternative distribution search domain for an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the alternative distribution domain resource ID from the [List Alternative Distribution Domains](get-v1-alternativedistributiondomains.md) response.

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
DELETE https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains/{id}
```

**Response**

```json
204
```

## See Also

### Managing domains

- [Add an Alternative Distribution Domain](post-v1-alternativedistributiondomains.md): Add an alternative distribution domain to your account.
- [Read Alternative Distribution Domain Information](get-v1-alternativedistributiondomains-_id_.md): Read information for a specific alternative distribution domain.
- [List Alternative Distribution Domains](get-v1-alternativedistributiondomains.md): List all the alternative distribution domains for your account.
