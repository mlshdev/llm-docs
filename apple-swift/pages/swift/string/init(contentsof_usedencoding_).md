> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(contentsof:usedencoding:)](https://developer.apple.com/documentation/swift/string/init(contentsof:usedencoding:))

# init(contentsOf:usedEncoding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces a string created by reading data from a given URL and returns by reference the encoding used to interpret the data.

## Declaration

```swift
init(contentsOf url: URL, usedEncoding: inout String.Encoding) throws
```

## See Also

### Creating a String from a File or URL

- [init(contentsOf:)](init%28contentsof_%29.md): Deprecated.
- [init(contentsOf:encoding:)](init%28contentsof_encoding_%29.md): Produces a string created by reading data from a given URL interpreted using a given encoding.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated.
- [init(contentsOfFile:encoding:)](init%28contentsoffile_encoding_%29.md): Produces a string created by reading data from the file at a given path interpreted using a given encoding.
- [init(contentsOfFile:usedEncoding:)](init%28contentsoffile_usedencoding_%29.md): Produces a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.
