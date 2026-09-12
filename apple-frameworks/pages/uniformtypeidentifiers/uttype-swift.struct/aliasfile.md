> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/aliasfile](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/aliasfile)

# aliasFile

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents an alias file.

## Declaration

```swift
static var aliasFile: UTType { get }
```

<a id="Discussion"></a>

## Discussion

This type conforms to both [data](data.md) and [resolvable](resolvable.md), and its identifier is `com.apple.alias-file`.

## See Also

### Apple file system objects

- [directory](directory.md): A type that represents a file system directory, including packages and folders.
- [symbolicLink](symboliclink.md): A type that represents a symbolic link.
- [mountPoint](mountpoint.md): A type that represents a volume mount point.
- [folder](folder.md): A type that represents a user-browsable directory.
- [volume](volume.md): A type that represents the root folder of a volume or mount point.
- [diskImage](diskimage.md): A type that represents a data item that’s mountable as a volume.
