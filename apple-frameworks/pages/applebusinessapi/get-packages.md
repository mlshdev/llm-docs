> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-packages](https://developer.apple.com/documentation/applebusinessapi/get-packages)

# Get Packages

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of packages for an organization using Apple Business’s built-in device management.

## URL

```http
GET https://api-business.apple.com/v1/packages
```

## Query Parameters

- `fields[packages]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `name`, `url`, `hash`, `bundleIds`, `description`, `version`, `createdDateTime`, `updatedDateTime`
- `limit` — `integer`: The number of resources to return (maximum 1000).
  **Maximum:** `1000`

## Response Codes

- `200` OK — `PackagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/packages" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": [
    {
      "type": "packages",
      "id": "pkg-12345",
      "attributes": {
        "name": "Enterprise Software Suite",
        "url": "https://example.com/packages/enterprise-suite.pkg",
        "hash": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
        "bundleIds": [
          "com.example.enterpriseapp"
        ],
        "description": "Complete enterprise productivity software suite",
        "version": "2.5.1",
        "createdDateTime": "2024-01-15T10:30:00Z",
        "updatedDateTime": "2024-06-01T14:22:00Z"
      },
      "links": {
        "self": "https://api-business.apple.com/v1/packages/pkg-12345"
      }
    }
  ],
  "links": {
    "self": "https://api-business.apple.com/v1/packages",
    "next": "https://api-business.apple.com/v1/packages?cursor=MDowOjE3NDYxMTM4OTI1OTA"
  },
  "meta": {
    "paging": {
      "nextCursor": "MDowOjE3NDYxMTM4OTI1OTA",
      "limit": 1
    }
  }
}
```

## Topics

### Responses

- [PackagesResponse](packagesresponse.md): A response that contains a list of package resources.

## See Also

### Apps and Packages

- [Get Apps](get-apps.md): Get a list of apps for an organization using the built-in device management in Apple Business.
- [Get App Information](get-app-information.md): Get information about a specific app for an organization using the built-in device management in Apple Business.
- [Get Package Information](get-package-information.md): Get information about a specific package for an organization using Apple Business’s built-in device management.
