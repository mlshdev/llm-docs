> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/alertsitem](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/alertsitem)

# ContentCachingInformationResponse.StatusResponse.AlertsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes an alert from the content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.AlertsItem
```

## Properties

- `cacheLimit` — `integer`: The limit, in bytes, for the content cache at the time of the alert. This value only applies to `AssetCacheLowSpaceAlert` and `AssetCacheNoSpaceAlert` types.
- `className` — `string` (required): The type of the alert.
  **Allowed values:** `AssetCacheLowSpaceAlert`, `AssetCacheNoSpaceAlert`, `AssetCacheRegistrationRejectedAlert`, `AssetCacheRegistrationUnavailableAlert`, `AssetCacheResourceMissingAlert`
- `pathPreventingAccess` — `string`: The subpath of the resource that was missing or inaccessible at the time of the alert. This value only applies to the `AssetCacheResourceMissingAlert` type.
- `postDate` — `date` (required): The date of the alert.
- `reservedVolumeSpace` — `integer`: The space, in bytes, that the system reserves at the time of the alert. This value only applies to the `AssetCacheLowSpaceAlert` and `AssetCacheNoSpaceAlert` types.
- `resource` — `string`: The resource that was missing or inaccessible at the time of the alert. This value only applies to the `AssetCacheResourceMissingAlert` type.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.AlertsForPeerFilterRanges](alertsforpeerfilterranges-data.dictionary.md): A dictionary that contains alerts for peer filter ranges.
- [ContentCachingInformationResponse.StatusResponse.CacheDetails](cachedetails-data.dictionary.md): A dictionary that describes disk space the content cache uses.
- [ContentCachingInformationResponse.StatusResponse.DataMigrationError](datamigrationerror-data.dictionary.md): A dictionary that describes a data migration error.
- [ContentCachingInformationResponse.StatusResponse.ParentsItem](parentsitem.md): A dictionary that describes a parent content cache.
- [ContentCachingInformationResponse.StatusResponse.PeersItem](peersitem.md): A dictionary that describes a peer content cache.
