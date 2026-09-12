> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/directory](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/directory)

# directory

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents a file system directory, including packages and folders.

## Declaration

```swift
static var directory: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `public.directory`.

This type conforms to [UTTypeItem](../uttypeitem.md).

## See Also

### Apple file system objects

- [symbolicLink](symboliclink.md): A type that represents a symbolic link.
- [mountPoint](mountpoint.md): A type that represents a volume mount point.
- [aliasFile](aliasfile.md): A type that represents an alias file.
- [folder](folder.md): A type that represents a user-browsable directory.
- [volume](volume.md): A type that represents the root folder of a volume or mount point.
- [diskImage](diskimage.md): A type that represents a data item that’s mountable as a volume.
