> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetsourcetype/typeitunessynced](https://developer.apple.com/documentation/photos/phassetsourcetype/typeitunessynced)

# typeiTunesSynced (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset originates from a Mac or PC and is present on the device through iTunes sync.

## Declaration

```swift
static var typeiTunesSynced: PHAssetSourceType { get }
```

<a id="Discussion"></a>

## Discussion

iTunes-synced assets cannot be edited or deleted.

## See Also

### Constants

- [typeUserLibrary](typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [typeCloudShared](typecloudshared.md): The asset originates from an iCloud Shared Album.

# PHAssetSourceTypeiTunesSynced (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset originates from a Mac or PC and is present on the device through iTunes sync.

## Declaration

```objectivec
PHAssetSourceTypeiTunesSynced
```

<a id="Discussion"></a>

## Discussion

iTunes-synced assets cannot be edited or deleted.

## See Also

### Constants

- [PHAssetSourceTypeNone](https://developer.apple.com/documentation/photos/phassetsourcetype/phassetsourcetypenone): Source information is not available for the asset.
- [PHAssetSourceTypeUserLibrary](typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [PHAssetSourceTypeCloudShared](typecloudshared.md): The asset originates from an iCloud Shared Album.
