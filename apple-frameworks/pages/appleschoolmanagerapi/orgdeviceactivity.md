> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/orgdeviceactivity](https://developer.apple.com/documentation/appleschoolmanagerapi/orgdeviceactivity)

# OrgDeviceActivity

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.6+

The data structure that represents an organization device activity resource.

## Declaration

```
object OrgDeviceActivity
```

## Properties

- `attributes` — `OrgDeviceActivity.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `orgDeviceActivities`

## Topics

### Dictionaries

- [OrgDeviceActivity.Attributes](orgdeviceactivity/attributes-data.dictionary.md): Attributes that describe an organization device activity resource.

## See Also

### Objects and Data Types

- [OrgDevice](orgdevice.md): The data structure that represents an organization device resource.
- [OrgDeviceResponse](orgdeviceresponse.md): A response that contains a single organization device resource.
- [OrgDevicesResponse](orgdevicesresponse.md): A response that contains a list of organization device resources.
- [OrgDeviceAssignedServerLinkageResponse](orgdeviceassignedserverlinkageresponse.md): The data and links that describe the relationship between the resources.
- [MdmServer](mdmserver.md): The data structure that represents device management services in organizations.
- [MdmServerResponse](mdmserverresponse.md): A response that contains a single device management service resource.
- [MdmServersResponse](mdmserversresponse.md): A response that contains a list of device management service resources.
- [MdmServerDevicesLinkagesResponse](mdmserverdeviceslinkagesresponse.md): The data and links that describe the relationship between the resources.
- [OrgDeviceActivityCreateRequest](orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
- [OrgDeviceActivityResponse](orgdeviceactivityresponse.md): A response that contains a single organization device activity resource.
- [AppleCareCoverage](applecarecoverage.md): The data structure that represents an AppleCare coverage resource that belongs to an organization device.
- [AppleCareCoverageResponse](applecarecoverageresponse.md): A response that contains a list of AppleCare coverage resources that belongs to an organization device.
- [PagedDocumentLinks](pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](paginginformation.md): Paging information for data responses.
- [RelationshipLinks](relationshiplinks.md): Links related to the response document, including self-links.
