> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/app](https://developer.apple.com/documentation/applebusinessapi/app)

# App

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents an app resource.

## Declaration

```
object App
```

## Properties

- `attributes` — `App.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `apps`

## Topics

### Dictionaries

- [App.Attributes](app/attributes-data.dictionary.md): Attributes that describe an app resource.

## See Also

### Objects and Data Types

- [OrgDevice](orgdevice.md): The data structure that represents an organization device resource.
- [OrgDeviceResponse](orgdeviceresponse.md): A response that contains a single organization device resource.
- [OrgDevicesResponse](orgdevicesresponse.md): A response that contains a list of organization device resources.
- [OrgDeviceAssignedServerLinkageResponse](orgdeviceassignedserverlinkageresponse.md): The data and links that describe the relationship between the resources.
- [MdmDevice](mdmdevice.md): The data structure that represents a device management service enrolled device resource.
- [MdmDeviceResponse](mdmdeviceresponse.md): A response that contains a list of Apple devices enrolled in a device management service.
- [MdmDevicesResponse](mdmdevicesresponse.md): A response that contains a list of Apple devices enrolled in a device management service.
- [MdmDeviceDetail](mdmdevicedetail.md): The data structure that represents the detailed information for a device management service enrolled device resource.
- [MdmDeviceDetailResponse](mdmdevicedetailresponse.md): A response that contains the detailed information for an Apple device enrolled in a device management service.
- [MdmServer](mdmserver.md): The data structure that represents a device management service resource in an organization.
- [MdmServerResponse](mdmserverresponse.md): A response that contains a single device management service resource.
- [MdmServersResponse](mdmserversresponse.md): A response that contains a list of device management service resources.
- [MdmServerDevicesLinkagesResponse](mdmserverdeviceslinkagesresponse.md): The data and links that describe the relationship between the resources.
- [OrgDeviceActivity](orgdeviceactivity.md): The data structure that represents an organization device activity resource.
- [OrgDeviceActivityCreateRequest](orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
