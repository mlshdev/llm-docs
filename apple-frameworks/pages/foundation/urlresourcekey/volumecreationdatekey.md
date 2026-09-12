> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/volumecreationdatekey](https://developer.apple.com/documentation/foundation/urlresourcekey/volumecreationdatekey)

# volumeCreationDateKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for the volume’s creation date, returned as an `NSDate` object, or `NULL` if it cannot be determined (read-only).

## Declaration

```swift
static let volumeCreationDateKey: URLResourceKey
```

## See Also

### Volume support keys

- [isMountTriggerKey](ismounttriggerkey.md): Key for determining whether the URL is a file system trigger directory, returned as a Boolean `NSNumber` object (read-only). Traversing or opening a file system trigger directory causes an attempt to mount a file system on the directory.
- [isVolumeKey](isvolumekey.md): Key for determining whether the resource is the root directory of a volume, returned as a Boolean `NSNumber` object (read-only).
- [volumeIdentifierKey](volumeidentifierkey.md): The unique identifier of the resource’s volume, returned as an `id` (read-only).
- [volumeLocalizedFormatDescriptionKey](volumelocalizedformatdescriptionkey.md): Key for the volume’s descriptive format name, returned as an `NSString` object (read-only).
- [volumeLocalizedNameKey](volumelocalizednamekey.md): The name of the volume as it should be displayed in the user interface, returned as an `NSString` object (read-only).
- [volumeMaximumFileSizeKey](volumemaximumfilesizekey.md): Key for the largest file size supported by the volume in bytes, returned as a Boolean `NSNumber` object, or `nil` if it cannot be determined (read-only).
- [volumeNameKey](volumenamekey.md): The name of the volume, returned as an string object.
- [volumeResourceCountKey](volumeresourcecountkey.md): Key for the total number of resources on the volume, returned as an `NSNumber` object (read-only).
- [volumeSupportsAccessPermissionsKey](volumesupportsaccesspermissionskey.md): `true` if the volume supports setting POSIX access permissions with the `NSURLFileSecurityKey` property. (Read-only, value type boolean `NSNumber`).
- [volumeSupportsAdvisoryFileLockingKey](volumesupportsadvisoryfilelockingkey.md): Key for determining whether the volume implements whole-file advisory locks in the style of flock, along with the `O_EXLOCK` and `O_SHLOCK` flags of the open function, returned as a Boolean `NSNumber` object (read-only).
- [volumeSupportsCasePreservedNamesKey](volumesupportscasepreservednameskey.md): Key for determining whether the volume supports case-preserved names, returned as a Boolean `NSNumber` object (read-only).
- [volumeSupportsCaseSensitiveNamesKey](volumesupportscasesensitivenameskey.md): Key for determining whether the volume supports case-sensitive names, returned as a Boolean `NSNumber` object (read-only).
- [volumeSupportsCompressionKey](volumesupportscompressionkey.md): Whether the volume supports transparent decompression of compressed files using `decmpfs`, returned as `NSNumber` containing a Boolean value (read-only).
- [volumeSupportsExclusiveRenamingKey](volumesupportsexclusiverenamingkey.md): Whether the volume supports exclusive renaming using `renamex_np(2)` with the `RENAME_EXCL` option, returned as `NSNumber` containing a Boolean value (read-only).
- [volumeSupportsExtendedSecurityKey](volumesupportsextendedsecuritykey.md): Key for determining whether the volume supports extended security (access control lists), returned as a Boolean `NSNumber` object (read-only).

# NSURLVolumeCreationDateKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for the volume’s creation date, returned as an `NSDate` object, or `NULL` if it cannot be determined (read-only).

## Declaration

```objectivec
extern NSURLResourceKey const NSURLVolumeCreationDateKey;
```

## See Also

### Volume support keys

- [NSURLIsMountTriggerKey](ismounttriggerkey.md): Key for determining whether the URL is a file system trigger directory, returned as a Boolean `NSNumber` object (read-only). Traversing or opening a file system trigger directory causes an attempt to mount a file system on the directory.
- [NSURLIsVolumeKey](isvolumekey.md): Key for determining whether the resource is the root directory of a volume, returned as a Boolean `NSNumber` object (read-only).
- [NSURLVolumeIdentifierKey](volumeidentifierkey.md): The unique identifier of the resource’s volume, returned as an `id` (read-only).
- [NSURLVolumeLocalizedFormatDescriptionKey](volumelocalizedformatdescriptionkey.md): Key for the volume’s descriptive format name, returned as an `NSString` object (read-only).
- [NSURLVolumeLocalizedNameKey](volumelocalizednamekey.md): The name of the volume as it should be displayed in the user interface, returned as an `NSString` object (read-only).
- [NSURLVolumeMaximumFileSizeKey](volumemaximumfilesizekey.md): Key for the largest file size supported by the volume in bytes, returned as a Boolean `NSNumber` object, or `nil` if it cannot be determined (read-only).
- [NSURLVolumeNameKey](volumenamekey.md): The name of the volume, returned as an string object.
- [NSURLVolumeResourceCountKey](volumeresourcecountkey.md): Key for the total number of resources on the volume, returned as an `NSNumber` object (read-only).
- [NSURLVolumeSupportsAccessPermissionsKey](volumesupportsaccesspermissionskey.md): `true` if the volume supports setting POSIX access permissions with the `NSURLFileSecurityKey` property. (Read-only, value type boolean `NSNumber`).
- [NSURLVolumeSupportsAdvisoryFileLockingKey](volumesupportsadvisoryfilelockingkey.md): Key for determining whether the volume implements whole-file advisory locks in the style of flock, along with the `O_EXLOCK` and `O_SHLOCK` flags of the open function, returned as a Boolean `NSNumber` object (read-only).
- [NSURLVolumeSupportsCasePreservedNamesKey](volumesupportscasepreservednameskey.md): Key for determining whether the volume supports case-preserved names, returned as a Boolean `NSNumber` object (read-only).
- [NSURLVolumeSupportsCaseSensitiveNamesKey](volumesupportscasesensitivenameskey.md): Key for determining whether the volume supports case-sensitive names, returned as a Boolean `NSNumber` object (read-only).
- [NSURLVolumeSupportsCompressionKey](volumesupportscompressionkey.md): Whether the volume supports transparent decompression of compressed files using `decmpfs`, returned as `NSNumber` containing a Boolean value (read-only).
- [NSURLVolumeSupportsExclusiveRenamingKey](volumesupportsexclusiverenamingkey.md): Whether the volume supports exclusive renaming using `renamex_np(2)` with the `RENAME_EXCL` option, returned as `NSNumber` containing a Boolean value (read-only).
- [NSURLVolumeSupportsExtendedSecurityKey](volumesupportsextendedsecuritykey.md): Key for determining whether the volume supports extended security (access control lists), returned as a Boolean `NSNumber` object (read-only).
