> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/volumeisinternalkey](https://developer.apple.com/documentation/foundation/urlresourcekey/volumeisinternalkey)

# volumeIsInternalKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key for determining whether the volume is connected to an internal bus.

## Declaration

```swift
static let volumeIsInternalKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a Boolean `NSNumber` object, or `nil` if the system can’t determine its status.

## See Also

### Volume status keys

- [volumeIsAutomountedKey](volumeisautomountedkey.md): A key for determining whether the volume is automounted.
- [volumeIsBrowsableKey](volumeisbrowsablekey.md): A key for determining whether the volume is visible in GUI-based file-browsing environments, such as the Desktop or the Finder app.
- [volumeIsEjectableKey](volumeisejectablekey.md): A key for determining whether the volume is ejectable from the drive mechanism under software control.
- [volumeIsEncryptedKey](volumeisencryptedkey.md): A key for determining whether the volume is encrypted.
- [volumeIsJournalingKey](volumeisjournalingkey.md): A key for determining whether the volume is currently journaling.
- [volumeIsLocalKey](volumeislocalkey.md): A key for determining whether the volume is on a local device.
- [volumeIsReadOnlyKey](volumeisreadonlykey.md): A key for determining whether the volume is read-only.
- [volumeIsRemovableKey](volumeisremovablekey.md): A key for determining whether the volume is removable from the drive mechanism.
- [volumeIsRootFileSystemKey](volumeisrootfilesystemkey.md): A key for determining whether the volume is the root file system.
- [volumeSupportsFileProtectionKey](volumesupportsfileprotectionkey.md): A Boolean value that indicates the volume supports data protection for files.
- [volumeTypeNameKey](volumetypenamekey.md): The key for the name of the file system type.
- [volumeSubtypeKey](volumesubtypekey.md): The key for the file system subtype value.
- [volumeMountFromLocationKey](volumemountfromlocationkey.md): The key for the volume mounted-from location.

# NSURLVolumeIsInternalKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key for determining whether the volume is connected to an internal bus.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLVolumeIsInternalKey;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is a Boolean `NSNumber` object, or `nil` if the system can’t determine its status.

## See Also

### Volume status keys

- [NSURLVolumeIsAutomountedKey](volumeisautomountedkey.md): A key for determining whether the volume is automounted.
- [NSURLVolumeIsBrowsableKey](volumeisbrowsablekey.md): A key for determining whether the volume is visible in GUI-based file-browsing environments, such as the Desktop or the Finder app.
- [NSURLVolumeIsEjectableKey](volumeisejectablekey.md): A key for determining whether the volume is ejectable from the drive mechanism under software control.
- [NSURLVolumeIsEncryptedKey](volumeisencryptedkey.md): A key for determining whether the volume is encrypted.
- [NSURLVolumeIsJournalingKey](volumeisjournalingkey.md): A key for determining whether the volume is currently journaling.
- [NSURLVolumeIsLocalKey](volumeislocalkey.md): A key for determining whether the volume is on a local device.
- [NSURLVolumeIsReadOnlyKey](volumeisreadonlykey.md): A key for determining whether the volume is read-only.
- [NSURLVolumeIsRemovableKey](volumeisremovablekey.md): A key for determining whether the volume is removable from the drive mechanism.
- [NSURLVolumeIsRootFileSystemKey](volumeisrootfilesystemkey.md): A key for determining whether the volume is the root file system.
- [NSURLVolumeSupportsFileProtectionKey](volumesupportsfileprotectionkey.md): A Boolean value that indicates the volume supports data protection for files.
- [NSURLVolumeTypeNameKey](volumetypenamekey.md): The key for the name of the file system type.
- [NSURLVolumeSubtypeKey](volumesubtypekey.md): The key for the file system subtype value.
- [NSURLVolumeMountFromLocationKey](volumemountfromlocationkey.md): The key for the volume mounted-from location.
