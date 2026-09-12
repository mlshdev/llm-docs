> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/create-a-configuration](https://developer.apple.com/documentation/applebusinessapi/create-a-configuration)

# Create a Configuration

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Create a new custom Configuration in an organization.

## URL

```http
POST https://api-business.apple.com/v1/configurations
```

## HTTP Body

Content type: `application/json`

Type: `ConfigurationCreateRequest`

## Response Codes

- `201` Created — `ConfigurationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: Request entity error(s).
- `422` — `ErrorResponse`: Unprocessable request entity error(s).
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Important**

> Only Configurations with type `CUSTOM_SETTING` can be created with the API.

> **Note**

> `configurationProfile` is required. `filename` is optional — if omitted, a default filename is generated from the Configuration ID. `configuredForPlatforms` is optional — if omitted, supported platforms are auto-detected from the payload content in the Configuration profile. The profile must be compatible with the resolved platforms.

<a id="Example"></a>

### Example

**Request**

```
curl -X POST "https://api-business.apple.com/v1/configurations" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
      "data": {
        "type": "configurations",
        "attributes": {
          "type": "CUSTOM_SETTING",
          "name": "AirPlay Security Settings",
          "configuredForPlatforms": ["PLATFORM_IOS"],
          "customSettingsValues": {
            "configurationProfile": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\"><plist version=\"1.0\"><dict><key>PayloadContent</key><array><dict><key>AccessType</key><string>WIFI_ONLY</string><key>PayloadType</key><string>com.apple.airplay.security</string></dict></array></dict></plist>",
            "filename": "Airplay.mobileconfig"
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
    "id": "config-new-456",
    "attributes": {
      "type": "CUSTOM_SETTING",
      "name": "AirPlay Security Settings",
      "configuredForPlatforms": [
        "PLATFORM_IOS"
      ],
      "customSettingsValues": {
        "configurationProfile": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>...",
        "filename": "Airplay.mobileconfig"
      },
      "createdDateTime": "2024-06-15T10:30:00Z",
      "updatedDateTime": "2024-06-15T10:30:00Z"
    },
    "links": {
      "self": "https://api-business.apple.com/v1/configurations/config-new-456"
    }
  },
  "links": {
    "self": "https://api-business.apple.com/v1/configurations/config-new-456"
  }
}
```

## Topics

### Responses

- [ConfigurationResponse](configurationresponse.md): A response that contains information about a Configuration resource.

## See Also

### Configurations

- [Get Configurations](get-configurations.md): Get a list of Configurations in an organization.
- [Get Configuration Information](get-configuration-information.md): Get information about a specific Configuration in an organization.
- [Update a Configuration](update-a-configuration.md): Update an existing custom Configuration in an organization.
- [Delete a Configuration](delete-a-configuration.md): Delete a Configuration from an organization.
