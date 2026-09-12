> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-app-information](https://developer.apple.com/documentation/applebusinessapi/get-app-information)

# Get App Information

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get information about a specific app for an organization using the built-in device management in Apple Business.

## URL

```http
GET https://api-business.apple.com/v1/apps/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[apps]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `name`, `bundleId`, `websiteUrl`, `version`, `supportedOS`, `isCustomApp`, `appStoreUrl`

## Response Codes

- `200` OK — `AppResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Important**

> This endpoint requires the built-in device management service to be turned on for the organization. If you need to manage apps without the built-in device management, use the [Apps and Books for Organizations](https://developer.apple.com/documentation/devicemanagement/apps-and-books-for-organizations) API instead.

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/apps/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": {
    "type": "apps",
    "id": "361309726",
    "attributes": {
      "name": "Pages",
      "bundleId": "com.apple.Pages",
      "websiteUrl": "https://www.apple.com/pages/",
      "version": "14.0",
      "supportedOS": [
        "SUPPORTED_OS_IOS",
        "SUPPORTED_OS_MACOS"
      ],
      "isCustomApp": false,
      "appStoreUrl": "https://apps.apple.com/app/pages/id361309726"
    },
    "links": {
      "self": "https://api-business.apple.com/v1/apps/361309726"
    }
  },
  "links": {
    "self": "https://api-business.apple.com/v1/apps/361309726"
  }
}
```

## Topics

### Responses

- [AppResponse](appresponse.md): A response that contains information about an app resource.

## See Also

### Apps and Packages

- [Get Apps](get-apps.md): Get a list of apps for an organization using the built-in device management in Apple Business.
- [Get Packages](get-packages.md): Get a list of packages for an organization using Apple Business’s built-in device management.
- [Get Package Information](get-package-information.md): Get information about a specific package for an organization using Apple Business’s built-in device management.
