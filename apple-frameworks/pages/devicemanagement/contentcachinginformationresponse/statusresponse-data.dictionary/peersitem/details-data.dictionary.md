> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/details-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/details-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.PeersItem.Details

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that contains additional details about the peer content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.PeersItem.Details
```

## Properties

- `ac-power` — `boolean`: If `true`, the peer content cache power source is AC; otherwise, an internal battery provides its power.
  **Default:** `false`
- `cache-size` — `integer`: The maximum amount of disk space, in bytes, available to the peer content cache.
- `capabilities` — `ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Capabilities`: A dictionary that describes the capabilities of the peer content cache.
- `is-portable` — `boolean`: If `true`, the peer content cache computer is portable; for example, a laptop.
  **Default:** `false`
- `local-network` — `ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Local-network`: A dictionary that describes the peer content cache’s connection to its local network.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Capabilities](details-data.dictionary/capabilities-data.dictionary.md): The capabilities of the peer content cache.
- [ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Local-network](details-data.dictionary/local-network-data.dictionary.md): The network details about the peer cache.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.PeersItem.Alert](alert-data.dictionary.md): A dictionary that describes a peer content cache alert.
