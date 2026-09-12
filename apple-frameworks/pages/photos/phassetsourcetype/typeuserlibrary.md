> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetsourcetype/typeuserlibrary](https://developer.apple.com/documentation/photos/phassetsourcetype/typeuserlibrary)

# typeUserLibrary (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is part of the user’s main Photos library.

## Declaration

```swift
static var typeUserLibrary: PHAssetSourceType { get }
```

<a id="Discussion"></a>

## Discussion

The main library contains both assets that originate on the device (such as photos and videos captured with the Camera app or screenshots) and assets synchronized through iCloud Photo Library or My Photo Stream. These assets appear in Moments collections and can be edited or deleted.

## See Also

### Constants

- [typeCloudShared](typecloudshared.md): The asset originates from an iCloud Shared Album.
- [typeiTunesSynced](typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.

# PHAssetSourceTypeUserLibrary (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The asset is part of the user’s main Photos library.

## Declaration

```objectivec
PHAssetSourceTypeUserLibrary
```

<a id="Discussion"></a>

## Discussion

The main library contains both assets that originate on the device (such as photos and videos captured with the Camera app or screenshots) and assets synchronized through iCloud Photo Library or My Photo Stream. These assets appear in Moments collections and can be edited or deleted.

## See Also

### Constants

- [PHAssetSourceTypeNone](https://developer.apple.com/documentation/photos/phassetsourcetype/phassetsourcetypenone): Source information is not available for the asset.
- [PHAssetSourceTypeCloudShared](typecloudshared.md): The asset originates from an iCloud Shared Album.
- [PHAssetSourceTypeiTunesSynced](typeitunessynced.md): The asset originates from a Mac or PC and is present on the device through iTunes sync.
