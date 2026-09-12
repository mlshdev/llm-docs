> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-all-package-ids-for-a-blueprint](https://developer.apple.com/documentation/applebusinessapi/get-all-package-ids-for-a-blueprint)

# Get Package IDs for a Blueprint

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of package IDs associated with a Blueprint.

## URL

```http
GET https://api-business.apple.com/v1/blueprints/{id}/relationships/packages
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `BlueprintPackagesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/blueprints/{id}/relationships/packages" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "data": [
    {
      "type": "packages",
      "id": "pkg-12345"
    }
  ],
  "links": {
    "self": "https://api-business.apple.com/v1/blueprints/blueprint-12345/relationships/packages"
  },
  "meta": {
    "paging": {
      "limit": 100
    }
  }
}
```

## Topics

### Responses

- [BlueprintPackagesLinkagesResponse](blueprintpackageslinkagesresponse.md): A response that contains a list of package resource linkages for a Blueprint.

## See Also

### Blueprints

- [Get Blueprints](get-blueprints.md): Get a list of Blueprints in an organization.
- [Create a Blueprint](create-a-blueprint.md): Create a new Blueprint in an organization.
- [Get Blueprint Information](get-blueprint-information.md): Get information about a specific Blueprint in an organization.
- [Update a Blueprint](update-a-blueprint.md): Update an existing Blueprint in an organization.
- [Delete a Blueprint](delete-a-blueprint.md): Delete a Blueprint from an organization.
- [Get App IDs for a Blueprint](get-all-app-ids-for-a-blueprint.md): Get a list of app IDs associated with a Blueprint.
- [Add Apps to a Blueprint](add-apps-to-a-blueprint.md): Add apps to a Blueprint.
- [Remove Apps from a Blueprint](remove-apps-from-a-blueprint.md): Remove apps from a Blueprint.
- [Get Configuration IDs for a Blueprint](get-all-configuration-ids-for-a-blueprint.md): Get a list of Configuration IDs associated with a Blueprint.
- [Add Configurations to a Blueprint](add-configurations-to-a-blueprint.md): Add Configurations to a Blueprint.
- [Remove Configurations from a Blueprint](remove-configurations-from-a-blueprint.md): Remove Configurations from a Blueprint.
- [Add Packages to a Blueprint](add-packages-to-a-blueprint.md): Add packages to a Blueprint.
- [Remove Packages from a Blueprint](remove-packages-from-a-blueprint.md): Remove packages from a Blueprint.
- [Get Device IDs for a Blueprint](get-all-orgdevice-ids-for-a-blueprint.md): Get a list of device IDs associated with a Blueprint.
- [Add Devices to a Blueprint](add-org-devices-to-a-blueprint.md): Add devices to a Blueprint.
