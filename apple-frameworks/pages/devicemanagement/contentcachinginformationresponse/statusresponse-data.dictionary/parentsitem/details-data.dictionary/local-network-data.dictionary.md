> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/contentcachinginformationresponse/statusresponse-data.dictionary/parentsitem/details-data.dictionary/local-network-data.dictionary

# ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Local-network

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.15.4+

A dictionary that describes the parent content cache’s connection to its local network.

## Declaration

```
object ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Local-network
```

## Properties

- `speed` — `integer`: The transfer speed, in megabits per second, of the parent content cache’s connection to its local network.
- `wired` — `boolean`: If `true`, the parent content cache has a wired connection to its local network. If `false`, it has a wireless connection; for example, Wi-Fi.
  **Default:** `false`

## See Also

### Objects

- [ContentCachingInformationResponse.StatusResponse.ParentsItem.Details.Capabilities](capabilities-data.dictionary.md): A dictionary that describes the capabilities of the parent content cache.
