> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/status(formodules:)](https://developer.apple.com/documentation/speech/assetinventory/status(formodules:))

# status(forModules:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the status for the list of modules.

## Declaration

```swift
static func status(forModules modules: [any SpeechModule]) async -> AssetInventory.Status
```

<a id="discussion"></a>

## Discussion

If the status differs between modules, it returns an applicable status in order from `unsupported`, `downloading`, `supported`, `installed`.

## See Also

### Checking asset status

- [AssetInventory.Status](status.md)
