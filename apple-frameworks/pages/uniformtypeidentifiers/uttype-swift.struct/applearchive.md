> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/applearchive](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/applearchive)

# appleArchive

**Framework:** Uniform Type Identifiers  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A type that represents an Apple archive of files and directories.

## Declaration

```swift
static var appleArchive: UTType { get }
```

<a id="Discussion"></a>

## Discussion

The identifier for this type is `com.apple.archive`.

This type conforms to [data](data.md) and [archive](archive.md).

## See Also

### Compressed archives

- [archive](archive.md): A base type that represents an archive of files and directories.
- [zip](zip.md): A type that represents a zip archive.
- [gzip](gzip.md): A type that represents a GNU zip archive.
- [bz2](bz2.md): A type that represents a bzip2 archive.
