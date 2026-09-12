> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/accessmode](https://developer.apple.com/documentation/system/filedescriptor/accessmode)

# FileDescriptor.AccessMode

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The desired read and write access for a newly opened file.

## Declaration

```swift
@frozen struct AccessMode
```

## Topics

### Creating an Access Mode

- [readOnly](accessmode/readonly.md): Opens the file for reading only.
- [readWrite](accessmode/readwrite.md): Opens the file for reading and writing.
- [writeOnly](accessmode/writeonly.md): Opens the file for writing only.

### Debugging

- [description](accessmode/description.md): A textual representation of the access mode.
- [debugDescription](accessmode/debugdescription.md): A textual representation of the access mode, suitable for debugging

### Working with C APIs

- [init(rawValue:)](accessmode/init%28rawvalue_%29.md): Creates a strongly-typed access mode from a raw C access mode.
- [rawValue](accessmode/rawvalue.md): The raw C access mode.

### Default Implementations

- [CustomDebugStringConvertible Implementations](accessmode/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](accessmode/customstringconvertible-implementations.md)

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

### Opening a File

- [open(\_:\_:options:permissions:retryOnInterrupt:)](open%28____options_permissions_retryoninterrupt_%29-4ql4b.md): Opens or creates a file for reading or writing.
- [open(\_:\_:options:permissions:retryOnInterrupt:)](open%28____options_permissions_retryoninterrupt_%29-5t3xn.md): Opens or creates a file for reading or writing.
- [FileDescriptor.OpenOptions](openoptions.md): Options that specify behavior for a newly-opened file.
