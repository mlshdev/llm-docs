> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi](https://developer.apple.com/documentation/appleschoolmanagerapi)

# Apple School Manager API

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Web Service  
**Availability:** Apple School Manager API 1.6+

Automate device management activities and view device information in Apple School Manager.

<a id="overview"></a>

## Overview

> **Note**

> This API is a part of the [Apple School Manager and Apple Business APIs](apple-school-and-business-manager-api.md) collection.

## Topics

### Devices

- [Get Organization Devices](appleschoolmanagerapi/get-org-devices.md): Get a list of devices in an organization that enroll using Automated Device Enrollment.
- [Get Device Information](appleschoolmanagerapi/get-orgdevice-information.md): Get information about a device in an organization.
- [Get AppleCare Coverage Information for a Device](appleschoolmanagerapi/get-all-applecare-coverage-for-an-orgdevice.md): Get a list of AppleCare coverage resources for an organization device.

### Device Management Services

- [Get Device Management Services](appleschoolmanagerapi/get-device-management-services.md): Get a list of device management services in an organization.
- [Get Device Management Service Information](appleschoolmanagerapi/get-mdmserver-information.md): Get the information for a specific device management service.
- [Get All Device IDs for a Device Management Service](appleschoolmanagerapi/get-all-device-ids-for-a-device-management-service.md)
- [Get the Assigned Device Management Service ID for a Device](appleschoolmanagerapi/get-the-assigned-device-management-service-id-for-an-orgdevice.md): Get the assigned device management service ID information for a device.
- [Get the Assigned Device Management Service Information for a Device](appleschoolmanagerapi/get-the-assigned-device-management-service-information-for-an-orgdevice.md): Get the assigned device management service information for a device.
- [Assign or Unassign Devices to a Device Management Service](appleschoolmanagerapi/create-an-orgdeviceactivity.md): Assign or unassign devices to a device management service, or manage a device management service for devices.
- [Get Organization Device Activity Information](appleschoolmanagerapi/get-orgdeviceactivity-information.md): Get information for an organization device activity that a device management action, such as assigning or unassigning, creates.

### Objects and Data Types

- [OrgDevice](appleschoolmanagerapi/orgdevice.md): The data structure that represents an organization device resource.
- [OrgDeviceResponse](appleschoolmanagerapi/orgdeviceresponse.md): A response that contains a single organization device resource.
- [OrgDevicesResponse](appleschoolmanagerapi/orgdevicesresponse.md): A response that contains a list of organization device resources.
- [OrgDeviceAssignedServerLinkageResponse](appleschoolmanagerapi/orgdeviceassignedserverlinkageresponse.md): The data and links that describe the relationship between the resources.
- [MdmServer](appleschoolmanagerapi/mdmserver.md): The data structure that represents device management services in organizations.
- [MdmServerResponse](appleschoolmanagerapi/mdmserverresponse.md): A response that contains a single device management service resource.
- [MdmServersResponse](appleschoolmanagerapi/mdmserversresponse.md): A response that contains a list of device management service resources.
- [MdmServerDevicesLinkagesResponse](appleschoolmanagerapi/mdmserverdeviceslinkagesresponse.md): The data and links that describe the relationship between the resources.
- [OrgDeviceActivity](appleschoolmanagerapi/orgdeviceactivity.md): The data structure that represents an organization device activity resource.
- [OrgDeviceActivityCreateRequest](appleschoolmanagerapi/orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
- [OrgDeviceActivityResponse](appleschoolmanagerapi/orgdeviceactivityresponse.md): A response that contains a single organization device activity resource.
- [AppleCareCoverage](appleschoolmanagerapi/applecarecoverage.md): The data structure that represents an AppleCare coverage resource that belongs to an organization device.
- [AppleCareCoverageResponse](appleschoolmanagerapi/applecarecoverageresponse.md): A response that contains a list of AppleCare coverage resources that belongs to an organization device.
- [PagedDocumentLinks](appleschoolmanagerapi/pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](appleschoolmanagerapi/paginginformation.md): Paging information for data responses.
- [RelationshipLinks](appleschoolmanagerapi/relationshiplinks.md): Links related to the response document, including self-links.
- [ResourceLinks](appleschoolmanagerapi/resourcelinks.md): Self-links to requested resources.
- [ErrorResponse](appleschoolmanagerapi/errorresponse.md): The error details that an API returns in the response body whenever the API request isn’t successful.
- [ErrorLinks](appleschoolmanagerapi/errorlinks.md)
- [JsonPointer](appleschoolmanagerapi/jsonpointer.md): An object that contains the JSON pointer that indicates the location of the error.
- [Parameter](appleschoolmanagerapi/parameter.md): An object that contains the query parameter that produces the error.
- [DocumentLinks](appleschoolmanagerapi/documentlinks.md): Self-links to documents that can contain information for one or more resources.

### Type Aliases

- [OrgDeviceActivityType](appleschoolmanagerapi/orgdeviceactivitytype.md): Strings that represent organization device activities.
- [AppleCareCoveragePaymentType](appleschoolmanagerapi/applecarecoveragepaymenttype.md): Strings that represent AppleCare coverage payment types.
- [AppleCareCoverageStatus](appleschoolmanagerapi/applecarecoveragestatus.md): Strings that represent AppleCare coverage status.
- [MdmMigrationStatus](appleschoolmanagerapi/mdmmigrationstatus.md): Strings that represent the state of a device’s device management service migration.

### Dictionaries

- [ActivityTypeMetadata](appleschoolmanagerapi/activitytypemetadata.md): Additional metadata for an organization device activity, used by device management service migration activity types.

## See Also

### Apple School Manager and Apple Business APIs

- [Apple Business API](applebusinessapi.md): Automate device management activities, view device information, and manage users and user groups in Apple Business.
