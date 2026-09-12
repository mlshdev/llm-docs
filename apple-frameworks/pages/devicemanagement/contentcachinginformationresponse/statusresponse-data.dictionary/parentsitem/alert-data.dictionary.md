> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/alert-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/alert-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.ParentsItem.Alert

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes a parent content cache alert.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.ParentsItem.Alert
```

## Properties

- `addresses` — `[string]` (required): An array of local IP addresses of parent content caches.
- `className` — `string` (required): The type of the alert.
  **Allowed values:** `AssetCacheParentCycleAlert`, `AssetCacheParentDepthAlert`
- `postDate` — `date` (required): The date of the alert.

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details](details-data.dictionary.md): A dictionary that contains additional details about the parent content cache.
