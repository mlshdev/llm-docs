> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-alternativedistributiondomains](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-alternativedistributiondomains)

# Add an Alternative Distribution Domain

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.4.1+

Add an alternative distribution domain to your account.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains
```

## HTTP Body

Content type: `application/json`

Type: `AlternativeDistributionDomainCreateRequest`

## Response Codes

- `201` Created — `AlternativeDistributionDomainResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring alternative marketplaces and alternative marketplace apps](configuring-alternative-marketplaces-and-alternative-marketplace-apps.md)
- [Configuring apps for web distribution](configuring-apps-for-web-distribution.md)
- [Creating and configuring keys for web distribution](creating-and-configuring-keys-for-web-distribution.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
POST https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains
```

**Response**

```json
{
  “data” : {
    “type” : “alternativeDistributionDomains”,
    “id” : “5b74f5e8-1d7d-48a6-afd3-9441f9027292”,
    “attributes” : {
      “domain” : “example.com”,
      “referenceName” : “exampleREF”,
      “createdDate” : “2024-03-24T07:50:59Z”
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains/f6450d6a-25c7-419d-becb-4d5869b114d1”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/alternativeDistributionDomains”
  }
}
```

## See Also

### Managing domains

- [Read Alternative Distribution Domain Information](get-v1-alternativedistributiondomains-_id_.md): Read information for a specific alternative distribution domain.
- [List Alternative Distribution Domains](get-v1-alternativedistributiondomains.md): List all the alternative distribution domains for your account.
- [Delete an Alternative Distribution Domain](delete-v1-alternativedistributiondomains-_id_.md): Delete the alternative distribution search domain for an app.
