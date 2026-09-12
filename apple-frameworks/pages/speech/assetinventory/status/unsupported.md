> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/status/unsupported](https://developer.apple.com/documentation/speech/assetinventory/status/unsupported)

# AssetInventory.Status.unsupported

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The module will not work with its configuration.

## Declaration

```swift
case unsupported
```

## See Also

### Asset status

- [AssetInventory.Status.downloading](downloading.md): The system is currently downloading the assets, or waiting for conditions to improve and continue downloading later.
- [AssetInventory.Status.installed](installed.md): The necessary assets have been downloaded and installed on the device, and the module is ready for use.
- [AssetInventory.Status.supported](supported.md): The module can work with its configuration, but the assets will need to be downloaded.
