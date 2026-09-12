> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/details-data.dictionary/capabilities-data.dictionary](https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/details-data.dictionary/capabilities-data.dictionary)

# ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Capabilities

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes the capabilities of the parent content cache.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Capabilities
```

## Properties

- `im` — `boolean`: If `true`, the parent content cache is capable of imports and uploads.
  **Default:** `false`
- `ns` — `boolean`: If `true`, the parent content cache is capable of handling namespaces, which is an aspect of personal caching.
  **Default:** `false`
- `pc` — `boolean`: If `true`, the parent content cache is capable of caching personal iCloud content.
  **Default:** `false`
- `query-parameters` — `boolean`: If `true`, the parent content cache is capable of handling query parameters in URLs.
  **Default:** `false`
- `sc` — `boolean`: If `true`, the parent content cache is capable of caching shared non-iCloud content.
  **Default:** `false`
- `ur` — `boolean`: If `true`, the parent content cache is capable of prioritizing imports and uploads.
  **Default:** `false`

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Local-network](local-network-data.dictionary.md): A dictionary that describes the parent content cache’s connection to its local network.
