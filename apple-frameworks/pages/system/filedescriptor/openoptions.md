> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/openoptions](https://developer.apple.com/documentation/system/filedescriptor/openoptions)

# FileDescriptor.OpenOptions

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Options that specify behavior for a newly-opened file.

## Declaration

```swift
@frozen struct OpenOptions
```

## Topics

### Specifying Options

- [append](openoptions/append.md): Indicates that each write operation appends to the file.
- [closeOnExec](openoptions/closeonexec.md): Indicates that executing a program closes the file.
- [create](openoptions/create.md): Indicates that opening the file creates the file if it doesn’t exist.
- [eventOnly](openoptions/eventonly.md): Indicates that opening the file monitors a file for changes.
- [exclusiveCreate](openoptions/exclusivecreate.md): Indicates that opening the file creates the file, expecting that it doesn’t exist.
- [exclusiveLock](openoptions/exclusivelock.md): Indicates that opening the file atomically obtains an exclusive lock.
- [noFollow](openoptions/nofollow.md): Indicates that opening the file doesn’t follow symlinks.
- [nonBlocking](openoptions/nonblocking.md): Indicates that opening the file doesn’t wait for the file or device to become available.
- [sharedLock](openoptions/sharedlock.md): Indicates that opening the file atomically obtains a shared lock on the file.
- [symlink](openoptions/symlink.md): Indicates that opening the file opens symbolic links instead of following them.
- [truncate](openoptions/truncate.md): Indicates that opening the file truncates the file if it exists.

### Interacting with C APIs

- [init(rawValue:)](openoptions/init%28rawvalue_%29.md): Create a strongly-typed options value from raw C options.
- [rawValue](openoptions/rawvalue.md): The raw C options.

### Debugging

- [description](openoptions/description.md): A textual representation of the open options.
- [debugDescription](openoptions/debugdescription.md): A textual representation of the open options, suitable for debugging.

### Type Properties

- [directory](openoptions/directory.md): Indicates that opening the file only succeeds if the file is a directory.

### Default Implementations

- [CustomDebugStringConvertible Implementations](openoptions/customdebugstringconvertible-implementations.md)
- [CustomStringConvertible Implementations](openoptions/customstringconvertible-implementations.md)

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
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Opening a File

- [open(\_:\_:options:permissions:retryOnInterrupt:)](open%28____options_permissions_retryoninterrupt_%29-4ql4b.md): Opens or creates a file for reading or writing.
- [open(\_:\_:options:permissions:retryOnInterrupt:)](open%28____options_permissions_retryoninterrupt_%29-5t3xn.md): Opens or creates a file for reading or writing.
- [FileDescriptor.AccessMode](accessmode.md): The desired read and write access for a newly opened file.
