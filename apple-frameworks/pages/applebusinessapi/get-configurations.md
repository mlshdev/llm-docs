> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-configurations](https://developer.apple.com/documentation/applebusinessapi/get-configurations)

# Get Configurations

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of Configurations in an organization.

## URL

```http
GET https://api-business.apple.com/v1/configurations
```

## Query Parameters

- `fields[configurations]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `type`, `name`, `configuredForPlatforms`, `customSettingsValues`, `createdDateTime`, `updatedDateTime`
- `limit` — `integer`: The number of resources to return (maximum 1000).
  **Maximum:** `1000`

## Response Codes

- `200` OK — `ConfigurationsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Note**

> This API will return `null` for `customSettingsValues` for all configuration types, including of type `CUSTOM_SETTING`. To get the `customSettingsValues` for `CUSTOM_SETTING` Configurations, see [Get Configuration Information](get-configuration-information.md).

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/configurations" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": [
    {
      "type": "configurations",
      "id": "config-12345",
      "attributes": {
        "type": "CUSTOM_SETTING",
        "name": "Wi-Fi Configuration",
        "configuredForPlatforms": [
          "PLATFORM_IOS",
          "PLATFORM_MACOS"
        ],
        "customSettingsValues": null,
        "createdDateTime": "2024-01-15T10:30:00Z",
        "updatedDateTime": "2024-06-01T14:22:00Z"
      },
      "links": {
        "self": "https://api-business.apple.com/v1/configurations/config-12345"
      }
    },
    {
      "type": "configurations",
      "id": "config-2345",
      "attributes": {
        "type": "AIR_DROP",
        "name": "Air Drop Configuration",
        "configuredForPlatforms": [
          "PLATFORM_IOS",
        ],
        "customSettingsValues": null,
        "createdDateTime": "2024-01-15T10:30:00Z",
        "updatedDateTime": "2024-06-01T14:22:00Z"
      },
      "links": {
        "self": "https://api-business.apple.com/v1/configurations/config-2345"
      }
    }
  ],
  "links": {
    "self": "https://api-business.apple.com/v1/configurations",
    "next": "https://api-business.apple.com/v1/configurations?cursor=MDowOjE3NDYxMTM4OTI1OTA"
  },
  "meta": {
    "paging": {
      "nextCursor": "MDowOjE3NDYxMTM4OTI1OTA",
      "limit": 2
    }
  }
}
```

## Topics

### Responses

- [ConfigurationsResponse](configurationsresponse.md): A response that contains a list of Configuration resources.

## See Also

### Configurations

- [Create a Configuration](create-a-configuration.md): Create a new custom Configuration in an organization.
- [Get Configuration Information](get-configuration-information.md): Get information about a specific Configuration in an organization.
- [Update a Configuration](update-a-configuration.md): Update an existing custom Configuration in an organization.
- [Delete a Configuration](delete-a-configuration.md): Delete a Configuration from an organization.
