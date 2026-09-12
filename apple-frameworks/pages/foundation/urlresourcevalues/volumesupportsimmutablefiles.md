> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/volumesupportsimmutablefiles](https://developer.apple.com/documentation/foundation/urlresourcevalues/volumesupportsimmutablefiles)

# volumeSupportsImmutableFiles

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether the volume supports making files immutable.

## Declaration

```swift
var volumeSupportsImmutableFiles: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `true` if the volume supports making files immutable with the [isUserImmutableKey](../urlresourcekey/isuserimmutablekey.md) or [isSystemImmutableKey](../urlresourcekey/issystemimmutablekey.md) properties.

## See Also

### Volume support values

- [isMountTrigger](ismounttrigger.md): A Boolean value that indicates whether this URL is a file system trigger directory.
- [isVolume](isvolume.md): A Boolean value that indicates whether the root directory is a volume.
- [volume](volume.md): URL of the volume on which the resource is stored.
- [volumeCreationDate](volumecreationdate.md): The volume’s creation date, or `nil` if this cannot be determined.
- [volumeIdentifier](volumeidentifier.md): An identifier that identifies the volume the file system object is on.
- [volumeLocalizedFormatDescription](volumelocalizedformatdescription.md): The volume format that’s visible to the user.
- [volumeLocalizedName](volumelocalizedname.md): The name of the volume that’s visible to the user.
- [volumeMaximumFileSize](volumemaximumfilesize.md): The largest file size supported by this file system, in bytes, or `nil` if this cannot be determined.
- [volumeName](volumename.md): The name of the volume.
- [volumeResourceCount](volumeresourcecount.md): The total number of resources on the volume.
- [volumeSupportsAccessPermissions](volumesupportsaccesspermissions.md): A Boolean value that indicates whether the volume supports setting standard access permissions.
- [volumeSupportsAdvisoryFileLocking](volumesupportsadvisoryfilelocking.md): A Boolean value that indicates whether the volume implements whole-file flock(2) style advisory locks, and the O_EXLOCK and O_SHLOCK flags of the open(2) call.
- [volumeSupportsCasePreservedNames](volumesupportscasepreservednames.md): A Boolean value that indicates whether the volume format preserves the case of file and directory names.
- [volumeSupportsCaseSensitiveNames](volumesupportscasesensitivenames.md): A Boolean value that indicates whether the volume format treats upper and lower case characters in file and directory names as different.
- [volumeSupportsCompression](volumesupportscompression.md): A Boolean value that indicates whether the volume supports transparent decompression of compressed files using decmpfs.
