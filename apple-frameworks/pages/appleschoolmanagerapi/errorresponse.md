> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/errorresponse](https://developer.apple.com/documentation/appleschoolmanagerapi/errorresponse)

# ErrorResponse

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.6+

The error details that an API returns in the response body whenever the API request isn’t successful.

## Declaration

```
object ErrorResponse
```

## Properties

- `errors` — `[ErrorResponse.Errors]`: An array of one or more errors.

<a id="Example-response"></a>

### Example response

```json
     {
       "errors": [
         {
           "id": "d41f0ce2-8e12-41b7-bffd-91fd628f6628",
           "status": "404",
           "code": "NOT_FOUND",
           "title": "The specified resource doesn't exist",
           "detail": "There is no resource of type 'orgDevices' with id 'XABC123X0ABC123X0'"
         }
       ]
     }
```

## Topics

### Dictionaries

- [ErrorResponse.Errors](errorresponse/errors-data.dictionary.md): The details about an error that returns when an API request isn’t successful.

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
- [OrgDeviceActivity](orgdeviceactivity.md): The data structure that represents an organization device activity resource.
- [OrgDeviceActivityCreateRequest](orgdeviceactivitycreaterequest.md): The request body you use to update the device management service for a device.
- [OrgDeviceActivityResponse](orgdeviceactivityresponse.md): A response that contains a single organization device activity resource.
- [AppleCareCoverage](applecarecoverage.md): The data structure that represents an AppleCare coverage resource that belongs to an organization device.
- [AppleCareCoverageResponse](applecarecoverageresponse.md): A response that contains a list of AppleCare coverage resources that belongs to an organization device.
- [PagedDocumentLinks](pageddocumentlinks.md): Links related to the response document, including paging links.
- [PagingInformation](paginginformation.md): Paging information for data responses.
