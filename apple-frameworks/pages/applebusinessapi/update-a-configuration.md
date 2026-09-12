> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/update-a-configuration](https://developer.apple.com/documentation/applebusinessapi/update-a-configuration)

# Update a Configuration

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Update an existing custom Configuration in an organization.

## URL

```http
PATCH https://api-business.apple.com/v1/configurations/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## HTTP Body

Content type: `application/json`

Type: `ConfigurationUpdateRequest`

## Response Codes

- `200` OK — `ConfigurationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`: Request entity error(s).
- `422` — `ErrorResponse`: Unprocessable request entity error(s).
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Important**

> Only Configurations with type `CUSTOM_SETTING` can be updated via the API.

> **Note**

> If a `filename` is provided, it must end in `.mobileconfig`. A provided `configurationProfile` is validated and must be compatible with the resolved `configuredForPlatforms` (either from the request or the existing value on the Configuration).

> **Note**

> Only the fields included in the request are updated. One of `name`, `configuredForPlatforms`, `configurationProfile`, or `filename` must be included, and any omitted fields retain their existing values.

<a id="Example"></a>

### Example

**Request**

```
curl -X PATCH "https://api-business.apple.com/v1/configurations/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
      "data": {
        "type": "configurations",
        "id": "config-12345",
        "attributes": {
          "name": "Updated Wi-Fi Configuration",
          "configuredForPlatforms": ["PLATFORM_IOS", "PLATFORM_MACOS"],
          "customSettingsValues": {
            "configurationProfile": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>...",
            "filename": "WiFi-Updated.mobileconfig"
          }
        }
      }
    }'
```

**Response**

```json
{
  "data": {
    "type": "configurations",
    "id": "config-12345",
    "attributes": {
      "type": "CUSTOM_SETTING",
      "name": "Updated Wi-Fi Configuration",
      "configuredForPlatforms": [
        "PLATFORM_IOS",
        "PLATFORM_MACOS"
      ],
      "customSettingsValues": {
        "configurationProfile": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>...",
        "filename": "WiFi-Updated.mobileconfig"
      },
      "createdDateTime": "2024-01-15T10:30:00Z",
      "updatedDateTime": "2024-06-15T14:22:00Z"
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
- [Get Configuration Information](get-configuration-information.md): Get information about a specific Configuration in an organization.
- [Delete a Configuration](delete-a-configuration.md): Delete a Configuration from an organization.
