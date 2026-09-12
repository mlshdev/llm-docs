> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/seekorigin](https://developer.apple.com/documentation/system/filedescriptor/seekorigin)

# FileDescriptor.SeekOrigin

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Options for specifying what a file descriptor’s offset is relative to.

## Declaration

```swift
@frozen struct SeekOrigin
```

## Topics

### Creating a Seek Origin

- [current](seekorigin/current.md): Indicates that the offset should be set to the specified number of bytes after the current location.
- [end](seekorigin/end.md): Indicates that the offset should be set to the size of the file plus the specified number of bytes.
- [nextHole](seekorigin/nexthole.md): Indicates that the offset should be set to the next hole after the specified number of bytes.
- [nextData](seekorigin/nextdata.md): Indicates that the offset should be set to the start of the next file region that isn’t a hole and is greater than or equal to the supplied offset.
- [start](seekorigin/start.md): Indicates that the offset should be set to the specified value.

### Debugging

- [description](seekorigin/description.md): A textual representation of the seek origin.
- [debugDescription](seekorigin/debugdescription.md): A textual representation of the seek origin, suitable for debugging.

### Working with C APIs

- [init(rawValue:)](seekorigin/init%28rawvalue_%29.md): Create a strongly-typed seek origin from a raw C value.
- [rawValue](seekorigin/rawvalue.md): The raw C value.

### Default Implementations

- [CustomDebugStringConvertible Implementations](seekorigin/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](seekorigin/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing a File’s Offset

- [seek(offset:from:)](seek%28offset_from_%29.md): Repositions the offset for the given file descriptor.
