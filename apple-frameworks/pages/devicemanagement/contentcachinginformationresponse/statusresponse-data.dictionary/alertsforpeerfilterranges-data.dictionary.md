> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/alertsforpeerfilterranges-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/alertsforpeerfilterranges-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that contains alerts for peer filter ranges.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges
```

## Properties

- `ANY index` — `ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges.ANY index` (required): A dictionary that describes the alerts for the peer filter ranges. The key name is the index into the `PeerFilterRanges` array in the installed `com.apple.AssetCache.managed` payload.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges.ANY index](alertsforpeerfilterranges-data.dictionary/any-index-data.dictionary.md): A dictionary that describes the alerts for the peer filter ranges. The key name is the index into the `PeerFilterRanges` array in the installed `com.apple.AssetCache.managed` payload.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsItem](alertsitem.md): A dictionary that describes an alert from the content cache.
- [ContentCachingInformationResponse.StatusResponse.CacheDetails](cachedetails-data.dictionary.md): A dictionary that describes disk space the content cache uses.
- [ContentCachingInformationResponse.StatusResponse.DataMigrationError](datamigrationerror-data.dictionary.md): A dictionary that describes a data migration error.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem](parentsitem.md): A dictionary that describes a parent content cache.
- [ContentCachingInformationResponse.StatusResponse.PeersItem](peersitem.md): A dictionary that describes a peer content cache.
