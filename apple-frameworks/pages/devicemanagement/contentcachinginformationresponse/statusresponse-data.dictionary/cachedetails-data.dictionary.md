> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/cachedetails-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/cachedetails-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.CacheDetails

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes disk space the content cache uses.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.CacheDetails
```

## Properties

- `Category Name` — `integer` (required): The amount of disk space, in bytes, that this category of cached content uses.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges](alertsforpeerfilterranges-data.dictionary.md): A dictionary that contains alerts for peer filter ranges.
- [ContentCachingInformationResponse.StatusResponse.AlertsItem](alertsitem.md): A dictionary that describes an alert from the content cache.
- [ContentCachingInformationResponse.StatusResponse.DataMigrationError](datamigrationerror-data.dictionary.md): A dictionary that describes a data migration error.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem](parentsitem.md): A dictionary that describes a parent content cache.
- [ContentCachingInformationResponse.StatusResponse.PeersItem](peersitem.md): A dictionary that describes a peer content cache.
