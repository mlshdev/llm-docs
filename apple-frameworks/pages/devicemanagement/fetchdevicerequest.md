> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/fetchdevicerequest

# FetchDeviceRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The request for a list of devices.

## Declaration

```
object FetchDeviceRequest
```

## Properties

- `cursor` — `string`: A hex string that represents the starting position for a request. Use this to retrieve the list of devices that have been added or removed since a previous request. The string can be up to 1000 characters. On the initial request, this should be omitted.
- `limit` — `int32`: The maximum number of entries to return. Optional.
  **Default:** `100`  
  **Maximum:** `1000`

## See Also

### Request and Response

- [FetchDeviceResponse](fetchdeviceresponse.md): The response that contains a list of devices.
