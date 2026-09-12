> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetchdeviceresponse](https://developer.apple.com/documentation/devicemanagement/fetchdeviceresponse)

# FetchDeviceResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The response that contains a list of devices.

## Declaration

```
object FetchDeviceResponse
```

## Properties

- `cursor` — `string`: Indicates when this request was processed by the server. The MDM server can use this value in future requests if it wants to retrieve only records added or removed since this request.
- `devices` — `[Device]`: An array of dictionaries that provide information about devices. The devices are sorted in chronological order by the time stamp of the operation performed on the device.
- `fetched_until` — `string`: A date stamp that indicates the progress of the device fetch request, in ISO 8601 format.
- `more_to_follow` — `boolean`: Indicates that the request’s limit and cursor values resulted in only a partial list of devices.

  The MDM server should immediately make another request (starting from the newly returned cursor) to obtain additional records.

## See Also

### Request and Response

- [FetchDeviceRequest](fetchdevicerequest.md): The request for a list of devices.
