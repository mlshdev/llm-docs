> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/peersitem)

# ContentCachingInformationResponse.StatusResponse.PeersItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes a peer content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.PeersItem
```

## Properties

- `address` — `string` (required): The local IP address of the peer content cache.
- `alert` — `ContentCachingInformationResponse.StatusResponse.PeersItem.Alert`: A dictionary that describes an alert related to the peer content cache.
- `details` — `ContentCachingInformationResponse.StatusResponse.PeersItem.Details` (required): A dictionary that contains additional details about the peer content cache.
- `friendly` — `boolean` (required): If `true`, the peer content cache is able to respond to requests from the content cache.
- `guid` — `string` (required): The unique identifier of the peer content cache.
- `healthy` — `boolean` (required): If `true`, the peer content cache is able to respond to requests from the content cache.
- `port` — `integer` (required): The IP port number the peer content cache listens to for requests.
- `version` — `string` (required): The version number of the peer content cache software.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.PeersItem.Alert](peersitem/alert-data.dictionary.md): A dictionary that describes a peer content cache alert.
- [ContentCachingInformationResponse.StatusResponse.PeersItem.Details](peersitem/details-data.dictionary.md): A dictionary that contains additional details about the peer content cache.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges](alertsforpeerfilterranges-data.dictionary.md): A dictionary that contains alerts for peer filter ranges.
- [ContentCachingInformationResponse.StatusResponse.AlertsItem](alertsitem.md): A dictionary that describes an alert from the content cache.
- [ContentCachingInformationResponse.StatusResponse.CacheDetails](cachedetails-data.dictionary.md): A dictionary that describes disk space the content cache uses.
- [ContentCachingInformationResponse.StatusResponse.DataMigrationError](datamigrationerror-data.dictionary.md): A dictionary that describes a data migration error.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem](parentsitem.md): A dictionary that describes a parent content cache.
