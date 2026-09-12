> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/create-a-blueprint](https://developer.apple.com/documentation/applebusinessapi/create-a-blueprint)

# Create a Blueprint

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Create a new Blueprint in an organization.

## URL

```http
POST https://api-business.apple.com/v1/blueprints
```

## HTTP Body

Content type: `application/json`

Type: `BlueprintCreateRequest`

## Response Codes

- `201` Created — `BlueprintResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: Request entity error(s).
- `422` — `ErrorResponse`: Unprocessable request entity error(s).
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="overview"></a>

## Overview

> **Note**

> Any invalid resource IDs will be dropped from the request during Blueprint creation.

<a id="Example"></a>

### Example

**Request**

```
curl -X POST "https://api-business.apple.com/v1/blueprints" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{
      "data": {
        "type": "blueprints",
        "attributes": {
          "name": "Marketing Team Blueprint",
          "description": "Apps and settings for marketing team members"
        },
        "relationships": {
          "apps": {
            "data": [
              {"type": "apps", "id": "361309726"}
            ]
          },
          "configurations": {
            "data": [
              {"type": "configurations", "id": "config-789"}
            ]
          },
          "users": {
            "data": [
              {"type": "users", "id": "user-215"},
              {"type": "users", "id": "user-225"},
              {"type": "users", "id": "user-235"},
            ]
          }
        }
      }
    }'
```

**Response**

```json
{
  "data": {
    "type": "blueprints",
    "id": "blueprint-new-123",
    "attributes": {
      "name": "Marketing Team Blueprint",
      "description": "Apps and settings for marketing team members",
      "status": "ACTIVE",
      "appLicenseDeficient": false,
      "createdDateTime": "2024-06-15T10:30:00Z",
      "updatedDateTime": "2024-06-15T10:30:00Z"
    },
    "relationships": {
      "userGroups": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/userGroups",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=userGroups"
        }
      },
      "orgDevices": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/orgDevices",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=orgDevices"
        }
      },
      "packages": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/packages",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=packages"
        }
      },
      "configurations": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/configurations",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=configurations"
        }
      },
      "users": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/users",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=users"
        }
      },
      "apps": {
        "links": {
          "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123/relationships/apps",
          "include": "https://api-business.apple.com/v1/blueprints/blueprint-new-123?include=apps"
        }
      }
    },
    "links": {
      "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123"
    }
  },
  "links": {
    "self": "https://api-business.apple.com/v1/blueprints/blueprint-new-123"
  }
}
```

## Topics

### Responses

- [BlueprintResponse](blueprintresponse.md): A response that contains information about a Blueprint resource.

## See Also

### Blueprints

- [Get Blueprints](get-blueprints.md): Get a list of Blueprints in an organization.
- [Get Blueprint Information](get-blueprint-information.md): Get information about a specific Blueprint in an organization.
- [Update a Blueprint](update-a-blueprint.md): Update an existing Blueprint in an organization.
- [Delete a Blueprint](delete-a-blueprint.md): Delete a Blueprint from an organization.
- [Get App IDs for a Blueprint](get-all-app-ids-for-a-blueprint.md): Get a list of app IDs associated with a Blueprint.
- [Add Apps to a Blueprint](add-apps-to-a-blueprint.md): Add apps to a Blueprint.
- [Remove Apps from a Blueprint](remove-apps-from-a-blueprint.md): Remove apps from a Blueprint.
- [Get Configuration IDs for a Blueprint](get-all-configuration-ids-for-a-blueprint.md): Get a list of Configuration IDs associated with a Blueprint.
- [Add Configurations to a Blueprint](add-configurations-to-a-blueprint.md): Add Configurations to a Blueprint.
- [Remove Configurations from a Blueprint](remove-configurations-from-a-blueprint.md): Remove Configurations from a Blueprint.
- [Get Package IDs for a Blueprint](get-all-package-ids-for-a-blueprint.md): Get a list of package IDs associated with a Blueprint.
- [Add Packages to a Blueprint](add-packages-to-a-blueprint.md): Add packages to a Blueprint.
- [Remove Packages from a Blueprint](remove-packages-from-a-blueprint.md): Remove packages from a Blueprint.
- [Get Device IDs for a Blueprint](get-all-orgdevice-ids-for-a-blueprint.md): Get a list of device IDs associated with a Blueprint.
- [Add Devices to a Blueprint](add-org-devices-to-a-blueprint.md): Add devices to a Blueprint.
