> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/alert-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem/alert-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.PeersItem.Alert

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes a peer content cache alert.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.PeersItem.Alert
```

## Properties

- `addresses` — `[string]`: An array of local IP addresses of peer content caches.
- `className` — `string` (required): The type of the alert.
  **Allowed values:** `AssetCachePeerCycleAlert`, `AssetCacheUnfriendlyPeerAlert`
- `peerAddress` — `string`: The local IP address of a peer content cache.
- `postDate` — `date` (required): The date of the alert.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.PeersItem.Details](details-data.dictionary.md): A dictionary that contains additional details about the peer content cache.
