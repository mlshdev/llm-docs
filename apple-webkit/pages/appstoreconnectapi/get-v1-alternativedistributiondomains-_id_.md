> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-alternativedistributiondomains-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-alternativedistributiondomains-_id_)

# Read Alternative Distribution Domain Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4.1+

Read information for a specific alternative distribution domain.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `alternative distribution domain` resource ID from the [List Alternative Distribution Domains](get-v1-alternativedistributiondomains.md) response.

## Query Parameters

- `fields[alternativeDistributionDomains]` — `[string]`: Additional fields to include for each alternative distribution domains resource returned by the response.
  **Allowed values:** `domain`, `referenceName`, `createdDate`

## Response Codes

- `200` OK — `AlternativeDistributionDomainResponse`:
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

```

**Response**

```json

```

## See Also

### Managing domains

- [Add an Alternative Distribution Domain](post-v1-alternativedistributiondomains.md): Add an alternative distribution domain to your account.
- [List Alternative Distribution Domains](get-v1-alternativedistributiondomains.md): List all the alternative distribution domains for your account.
- [Delete an Alternative Distribution Domain](delete-v1-alternativedistributiondomains-_id_.md): Delete the alternative distribution search domain for an app.
