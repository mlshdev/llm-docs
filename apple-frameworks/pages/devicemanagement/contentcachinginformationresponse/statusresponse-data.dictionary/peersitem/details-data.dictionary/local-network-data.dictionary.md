> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/details-data.dictionary/local-network-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/details-data.dictionary/local-network-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Local-network

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

The network details about the peer cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Local-network
```

## Properties

- `speed` — `integer`: The transfer speed, in megabits per second, of the peer content cache’s connection to its local network.
- `wired` — `boolean`: If `true`, the peer content cache has a wired connection to its local network. If `false`, it has a wireless connection; for example, Wi-Fi.
  **Default:** `false`

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.PeersItem.Details.Capabilities](capabilities-data.dictionary.md): The capabilities of the peer content cache.
