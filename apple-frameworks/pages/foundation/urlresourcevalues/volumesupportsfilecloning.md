> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/volumesupportsfilecloning](https://developer.apple.com/documentation/foundation/urlresourcevalues/volumesupportsfilecloning)

# volumeSupportsFileCloning

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the volume supports file cloning.

## Declaration

```swift
var volumeSupportsFileCloning: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `true` if the volume supports the `clonefile(2)` system call.

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
