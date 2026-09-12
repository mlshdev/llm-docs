> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/details-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/details-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.ParentsItem.Details

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that contains additional details about the parent content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.ParentsItem.Details
```

## Properties

- `ac-power` — `boolean`: If `true`, the parent content cache power source is AC; otherwise, an internal battery provides its power.
  **Default:** `false`
- `cache-size` — `integer`: The maximum amount of disk space, in bytes, available to the parent content cache.
- `capabilities` — `ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Capabilities`: A dictionary that describes the capabilities of the parent content cache.
- `is-portable` — `boolean`: If `true`, the parent content cache computer is portable; for example, a laptop.
  **Default:** `false`
- `local-network` — `ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Local-network`: A dictionary that describes the parent content cache’s connection to its local network.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Capabilities](details-data.dictionary/capabilities-data.dictionary.md): A dictionary that describes the capabilities of the parent content cache.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Local-network](details-data.dictionary/local-network-data.dictionary.md): A dictionary that describes the parent content cache’s connection to its local network.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Alert](alert-data.dictionary.md): A dictionary that describes a parent content cache alert.
