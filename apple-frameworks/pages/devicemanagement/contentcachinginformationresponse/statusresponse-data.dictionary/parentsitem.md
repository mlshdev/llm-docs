> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem)

# ContentCachingInformationResponse.StatusResponse.ParentsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes a parent content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.ParentsItem
```

## Properties

- `address` — `string` (required): The local IP address of the parent content cache.
- `alert` — `ContentCachingInformationResponse.StatusResponse.ParentsItem.Alert`: A dictionary that describes an alert related to the parent content cache.
- `details` — `ContentCachingInformationResponse.StatusResponse.ParentsItem.Details` (required): A dictionary that contains additional details about the parent content cache.
- `guid` — `string` (required): The unique identifier of the parent content cache.
- `healthy` — `boolean` (required): If `true,` the parent content cache is able to respond to requests from this content cache.
- `port` — `integer` (required): The IP port number the parent content cache listens to for requests.
- `version` — `string` (required): The version number of the parent content cache software.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Alert](parentsitem/alert-data.dictionary.md): A dictionary that describes a parent content cache alert.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details](parentsitem/details-data.dictionary.md): A dictionary that contains additional details about the parent content cache.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges](alertsforpeerfilterranges-data.dictionary.md): A dictionary that contains alerts for peer filter ranges.
- [ContentCachingInformationResponse.StatusResponse.AlertsItem](alertsitem.md): A dictionary that describes an alert from the content cache.
- [ContentCachingInformationResponse.StatusResponse.CacheDetails](cachedetails-data.dictionary.md): A dictionary that describes disk space the content cache uses.
- [ContentCachingInformationResponse.StatusResponse.DataMigrationError](datamigrationerror-data.dictionary.md): A dictionary that describes a data migration error.
- [ContentCachingInformationResponse.StatusResponse.PeersItem](peersitem.md): A dictionary that describes a peer content cache.
