> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-alternativedistributiondomains](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-alternativedistributiondomains)

# List Alternative Distribution Domains

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4.1+

List all the alternative distribution domains for your account.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains
```

## Query Parameters

- `fields[alternativeDistributionDomains]` — `[string]`: Additional fields to include for each alternative distribution domains resource returned by the response.
  **Allowed values:** `domain`, `referenceName`, `createdDate`
- `limit` — `integer`: The maximum number of alternative distribution domains resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AlternativeDistributionDomainsResponse`:
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

```

**Response**

```json

```

## See Also

### Managing domains

- [Add an Alternative Distribution Domain](post-v1-alternativedistributiondomains.md): Add an alternative distribution domain to your account.
- [Read Alternative Distribution Domain Information](get-v1-alternativedistributiondomains-_id_.md): Read information for a specific alternative distribution domain.
- [Delete an Alternative Distribution Domain](delete-v1-alternativedistributiondomains-_id_.md): Delete the alternative distribution search domain for an app.
