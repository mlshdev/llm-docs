> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/mdmserver](https://developer.apple.com/documentation/applebusinessapi/mdmserver)

# MdmServer

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.4+

The data structure that represents a device management service resource in an organization.

## Declaration

```
object MdmServer
```

## Properties

- `attributes` — `MdmServer.Attributes`: The resource’s attributes.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `MdmServer.Relationships`: Navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `mdmServers`

## Topics

### Related Types

- [MdmServerStatus](mdmserverstatus.md): Strings that represent the operational status of a device management service.
- [MdmServerProductFamily](mdmserverproductfamily.md): Strings that represent a product family that can be assigned as a default to a device management service.
- [MdmServerCertificate](mdmservercertificate.md): The X.509 certificate to associate with a device management service.

### Dictionaries

- [MdmServer.Attributes](mdmserver/attributes-data.dictionary.md): Attributes that describe a device management service resource.
- [MdmServer.Relationships](mdmserver/relationships-data.dictionary.md): The relationships you include in the request, and those that you can operate on.

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
- [MdmServerResponse](mdmserverresponse.md): A response that contains a single device management service resource.
- [MdmServersResponse](mdmserversresponse.md): A response that contains a list of device management service resources.
- [MdmServerDevicesLinkagesResponse](mdmserverdeviceslinkagesresponse.md): The data and links that describe the relationship between the resources.
- [OrgDeviceActivity](orgdeviceactivity.md): The data structure that represents an organization device activity resource.
- [OrgDeviceActivityCreateRequest](orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
- [OrgDeviceActivityResponse](orgdeviceactivityresponse.md): A response that contains a single organization device activity resource.
