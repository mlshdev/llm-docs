> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/status/downloading](https://developer.apple.com/documentation/speech/assetinventory/status/downloading)

# AssetInventory.Status.downloading

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The system is currently downloading the assets, or waiting for conditions to improve and continue downloading later.

## Declaration

```swift
case downloading
```

## See Also

### Asset status

- [AssetInventory.Status.installed](installed.md): The necessary assets have been downloaded and installed on the device, and the module is ready for use.
- [AssetInventory.Status.supported](supported.md): The module can work with its configuration, but the assets will need to be downloaded.
- [AssetInventory.Status.unsupported](unsupported.md): The module will not work with its configuration.
