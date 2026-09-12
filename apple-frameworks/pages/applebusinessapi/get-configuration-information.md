> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-configuration-information](https://developer.apple.com/documentation/applebusinessapi/get-configuration-information)

# Get Configuration Information

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get information about a specific Configuration in an organization.

## URL

```http
GET https://api-business.apple.com/v1/configurations/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[configurations]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `type`, `name`, `configuredForPlatforms`, `customSettingsValues`, `createdDateTime`, `updatedDateTime`

## Response Codes

- `200` OK — `ConfigurationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Note**

> Use this API to retrieve the `customSettingsValues` for a `CUSTOM_SETTING` Configuration.

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/configurations/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": {
    "type": "configurations",
    "id": "config-12345",
    "attributes": {
      "type": "CUSTOM_SETTING",
      "name": "Wi-Fi Configuration",
      "configuredForPlatforms": [
        "PLATFORM_IOS",
        "PLATFORM_MACOS"
      ],
      "customSettingsValues": {
        "configurationProfile": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>...",
        "filename": "WiFi.mobileconfig"
      },
      "createdDateTime": "2024-01-15T10:30:00Z",
      "updatedDateTime": "2024-06-01T14:22:00Z"
    },
    "links": {
      "self": "https://api-business.apple.com/v1/configurations/config-12345"
    }
  },
  "links": {
    "self": "https://api-business.apple.com/v1/configurations/config-12345"
  }
}
```

## Topics

### Responses

- [ConfigurationResponse](configurationresponse.md): A response that contains information about a Configuration resource.

## See Also

### Configurations

- [Get Configurations](get-configurations.md): Get a list of Configurations in an organization.
- [Create a Configuration](create-a-configuration.md): Create a new custom Configuration in an organization.
- [Update a Configuration](update-a-configuration.md): Update an existing custom Configuration in an organization.
- [Delete a Configuration](delete-a-configuration.md): Delete a Configuration from an organization.
