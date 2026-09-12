> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/assetinventory/status](https://developer.apple.com/documentation/speech/assetinventory/status)

# AssetInventory.Status

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
enum Status
```

## Topics

### Asset status

- [AssetInventory.Status.downloading](status/downloading.md): The system is currently downloading the assets, or waiting for conditions to improve and continue downloading later.
- [AssetInventory.Status.installed](status/installed.md): The necessary assets have been downloaded and installed on the device, and the module is ready for use.
- [AssetInventory.Status.supported](status/supported.md): The module can work with its configuration, but the assets will need to be downloaded.
- [AssetInventory.Status.unsupported](status/unsupported.md): The module will not work with its configuration.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Checking asset status

- [status(forModules:)](status%28formodules_%29.md): Returns the status for the list of modules.
