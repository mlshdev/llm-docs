> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/datamigrationerror-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/datamigrationerror-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.DataMigrationError

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes a data migration error.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.DataMigrationError
```

## Properties

- `code` — `integer` (required): The error code.
- `domain` — `string` (required): The error domain.
- `userInfo` — `ContentCachingInformationResponse.StatusResponse.DataMigrationError.UserInfo`: A dictionary that contains additional information about the error.

## Topics

### Objects

- [ContentCachingInformationResponse.StatusResponse.DataMigrationError.UserInfo](datamigrationerror-data.dictionary/userinfo-data.dictionary.md): A dictionary that contains additional information about a data migration error.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges](alertsforpeerfilterranges-data.dictionary.md): A dictionary that contains alerts for peer filter ranges.
- [ContentCachingInformationResponse.StatusResponse.AlertsItem](alertsitem.md): A dictionary that describes an alert from the content cache.
- [ContentCachingInformationResponse.StatusResponse.CacheDetails](cachedetails-data.dictionary.md): A dictionary that describes disk space the content cache uses.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem](parentsitem.md): A dictionary that describes a parent content cache.
- [ContentCachingInformationResponse.StatusResponse.PeersItem](peersitem.md): A dictionary that describes a peer content cache.
