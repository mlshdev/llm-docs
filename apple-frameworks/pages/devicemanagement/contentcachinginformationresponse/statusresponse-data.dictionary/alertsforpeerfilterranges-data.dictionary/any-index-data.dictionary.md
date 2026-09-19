> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/alertsforpeerfilterranges-data.dictionary/any-index-data.dictionary

# ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges.ANY index

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes the alerts for the peer filter ranges. The key name is the index into the `PeerFilterRanges` array in the installed `com.apple.AssetCache.managed` payload.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges.ANY index
```

## Properties

- `addresses` — `[string]` (required): An array of local IP addresses of peer content caches that rejected requests from the content cache.
- `className` — `string` (required): The type of the alert.
  **Allowed values:** `AssetCacheUnfriendlyPeersInFilterRangeAlert`
- `peerFilterRangeIndex` — `integer` (required): The index into the `PeerFilterRanges` in the installed ContentCaching payload.
- `postDate` — `date` (required): The date of the alert.
