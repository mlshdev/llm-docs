> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(contentsoffile:encoding:)](https://developer.apple.com/documentation/swift/string/init(contentsoffile:encoding:))

# init(contentsOfFile:encoding:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Produces a string created by reading data from the file at a given path interpreted using a given encoding.

## Declaration

```swift
init(contentsOfFile path: String, encoding enc: String.Encoding) throws
```

## See Also

### Creating a String from a File or URL

- [init(contentsOf:)](init%28contentsof_%29.md): Deprecated.
- [init(contentsOf:encoding:)](init%28contentsof_encoding_%29.md): Produces a string created by reading data from a given URL interpreted using a given encoding.
- [init(contentsOf:usedEncoding:)](init%28contentsof_usedencoding_%29.md): Produces a string created by reading data from a given URL and returns by reference the encoding used to interpret the data.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated.
- [init(contentsOfFile:usedEncoding:)](init%28contentsoffile_usedencoding_%29.md): Produces a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.
