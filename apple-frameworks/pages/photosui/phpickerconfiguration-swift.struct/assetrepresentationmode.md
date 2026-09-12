> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/assetrepresentationmode)

# PHPickerConfiguration.AssetRepresentationMode

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

Constants identifying the mode the system uses when many representations exist for an asset.

## Declaration

```swift
enum AssetRepresentationMode
```

## Topics

### Constants

- [PHPickerConfiguration.AssetRepresentationMode.automatic](assetrepresentationmode/automatic.md): The system uses the best representation for the asset.
- [PHPickerConfiguration.AssetRepresentationMode.compatible](assetrepresentationmode/compatible.md): The system uses the most compatible representation if possible.
- [PHPickerConfiguration.AssetRepresentationMode.current](assetrepresentationmode/current.md): The system uses the current representation and avoids transcoding, if possible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Selecting the preferred asset representation

- [preferredAssetRepresentationMode](preferredassetrepresentationmode.md): A mode that determines which representation to use if an asset contains more than one.
