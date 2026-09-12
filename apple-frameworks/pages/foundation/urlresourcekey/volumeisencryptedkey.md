> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/volumeisencryptedkey](https://developer.apple.com/documentation/foundation/urlresourcekey/volumeisencryptedkey)

# volumeIsEncryptedKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A key for determining whether the volume is encrypted.

## Declaration

```swift
static let volumeIsEncryptedKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a Boolean `NSNumber` object.

## See Also

### Volume status keys

- [volumeIsAutomountedKey](volumeisautomountedkey.md): A key for determining whether the volume is automounted.
- [volumeIsBrowsableKey](volumeisbrowsablekey.md): A key for determining whether the volume is visible in GUI-based file-browsing environments, such as the Desktop or the Finder app.
- [volumeIsEjectableKey](volumeisejectablekey.md): A key for determining whether the volume is ejectable from the drive mechanism under software control.
- [volumeIsInternalKey](volumeisinternalkey.md): A key for determining whether the volume is connected to an internal bus.
- [volumeIsJournalingKey](volumeisjournalingkey.md): A key for determining whether the volume is currently journaling.
- [volumeIsLocalKey](volumeislocalkey.md): A key for determining whether the volume is on a local device.
- [volumeIsReadOnlyKey](volumeisreadonlykey.md): A key for determining whether the volume is read-only.
- [volumeIsRemovableKey](volumeisremovablekey.md): A key for determining whether the volume is removable from the drive mechanism.
- [volumeIsRootFileSystemKey](volumeisrootfilesystemkey.md): A key for determining whether the volume is the root file system.
- [volumeSupportsFileProtectionKey](volumesupportsfileprotectionkey.md): A Boolean value that indicates the volume supports data protection for files.
- [volumeTypeNameKey](volumetypenamekey.md): The key for the name of the file system type.
- [volumeSubtypeKey](volumesubtypekey.md): The key for the file system subtype value.
- [volumeMountFromLocationKey](volumemountfromlocationkey.md): The key for the volume mounted-from location.

# NSURLVolumeIsEncryptedKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A key for determining whether the volume is encrypted.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLVolumeIsEncryptedKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a Boolean `NSNumber` object.

## See Also

### Volume status keys

- [NSURLVolumeIsAutomountedKey](volumeisautomountedkey.md): A key for determining whether the volume is automounted.
- [NSURLVolumeIsBrowsableKey](volumeisbrowsablekey.md): A key for determining whether the volume is visible in GUI-based file-browsing environments, such as the Desktop or the Finder app.
- [NSURLVolumeIsEjectableKey](volumeisejectablekey.md): A key for determining whether the volume is ejectable from the drive mechanism under software control.
- [NSURLVolumeIsInternalKey](volumeisinternalkey.md): A key for determining whether the volume is connected to an internal bus.
- [NSURLVolumeIsJournalingKey](volumeisjournalingkey.md): A key for determining whether the volume is currently journaling.
- [NSURLVolumeIsLocalKey](volumeislocalkey.md): A key for determining whether the volume is on a local device.
- [NSURLVolumeIsReadOnlyKey](volumeisreadonlykey.md): A key for determining whether the volume is read-only.
- [NSURLVolumeIsRemovableKey](volumeisremovablekey.md): A key for determining whether the volume is removable from the drive mechanism.
- [NSURLVolumeIsRootFileSystemKey](volumeisrootfilesystemkey.md): A key for determining whether the volume is the root file system.
- [NSURLVolumeSupportsFileProtectionKey](volumesupportsfileprotectionkey.md): A Boolean value that indicates the volume supports data protection for files.
- [NSURLVolumeTypeNameKey](volumetypenamekey.md): The key for the name of the file system type.
- [NSURLVolumeSubtypeKey](volumesubtypekey.md): The key for the file system subtype value.
- [NSURLVolumeMountFromLocationKey](volumemountfromlocationkey.md): The key for the volume mounted-from location.
