> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetsourcetype/typecloudshared](https://developer.apple.com/documentation/photos/phassetsourcetype/typecloudshared)

# typeCloudShared (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset originates from an iCloud Shared Album.

## Declaration

```swift
static var typeCloudShared: PHAssetSourceType { get }
```

<a id="Discussion"></a>

## Discussion

Assets from shared albums cannot be edited and do not appear in Moments collections.

## See Also

### Constants

- [typeUserLibrary](typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [typeiTunesSynced](typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.

# PHAssetSourceTypeCloudShared (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset originates from an iCloud Shared Album.

## Declaration

```objectivec
PHAssetSourceTypeCloudShared
```

<a id="Discussion"></a>

## Discussion

Assets from shared albums cannot be edited and do not appear in Moments collections.

## See Also

### Constants

- [PHAssetSourceTypeNone](https://developer.apple.com/documentation/photos/phassetsourcetype/phassetsourcetypenone): Source information is not available for the asset.
- [PHAssetSourceTypeUserLibrary](typeuserlibrary.md): The asset is part of the user’s main Photos library.
- [PHAssetSourceTypeiTunesSynced](typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.
