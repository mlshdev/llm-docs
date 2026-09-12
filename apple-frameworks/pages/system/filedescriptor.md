> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor](https://developer.apple.com/documentation/system/filedescriptor)

# FileDescriptor

**Framework:** System  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An abstract handle to an input or output data resource, such as a file or a socket.

## Declaration

```swift
@frozen struct FileDescriptor
```

<a id="overview"></a>

## Overview

You are responsible for managing the lifetime and validity of `FileDescriptor` values, in the same way as you manage a raw C file handle.

## Topics

### Creating a File Descriptor

- [init(rawValue:)](filedescriptor/init%28rawvalue_%29.md): Creates a strongly-typed file handle from a raw C file handle.
- [rawValue](filedescriptor/rawvalue.md): The raw C file handle.

### Opening a File

- [open(\_:\_:options:permissions:retryOnInterrupt:)](filedescriptor/open%28____options_permissions_retryoninterrupt_%29-4ql4b.md): Opens or creates a file for reading or writing.
- [open(\_:\_:options:permissions:retryOnInterrupt:)](filedescriptor/open%28____options_permissions_retryoninterrupt_%29-5t3xn.md): Opens or creates a file for reading or writing.
- [FileDescriptor.AccessMode](filedescriptor/accessmode.md): The desired read and write access for a newly opened file.
- [FileDescriptor.OpenOptions](filedescriptor/openoptions.md): Options that specify behavior for a newly-opened file.

### Reading From a File

- [read(into:retryOnInterrupt:)](filedescriptor/read%28into_retryoninterrupt_%29.md): Reads bytes at the current file offset into a buffer.
- [read(fromAbsoluteOffset:into:retryOnInterrupt:)](filedescriptor/read%28fromabsoluteoffset_into_retryoninterrupt_%29.md): Reads bytes at the specified offset into a buffer.

### Changing a File’s Offset

- [seek(offset:from:)](filedescriptor/seek%28offset_from_%29.md): Repositions the offset for the given file descriptor.
- [FileDescriptor.SeekOrigin](filedescriptor/seekorigin.md): Options for specifying what a file descriptor’s offset is relative to.

### Writing To A File

- [write(\_:retryOnInterrupt:)](filedescriptor/write%28__retryoninterrupt_%29.md): Writes the contents of a buffer at the current file offset.
- [write(toAbsoluteOffset:\_:retryOnInterrupt:)](filedescriptor/write%28toabsoluteoffset___retryoninterrupt_%29.md): Writes the contents of a buffer at the specified offset.
- [writeAll(\_:)](filedescriptor/writeall%28__%29.md): Writes a sequence of bytes to the current offset and then updates the offset.
- [writeAll(toAbsoluteOffset:\_:)](filedescriptor/writeall%28toabsoluteoffset___%29.md): Writes a sequence of bytes to the given offset.

### Closing a File

- [close()](filedescriptor/close%28%29.md): Deletes a file descriptor.
- [closeAfter(\_:)](filedescriptor/closeafter%28__%29.md): Runs a closure and then closes the file descriptor, even if an error occurs.

### Structures

- [FileDescriptor.DuplicateOptions](filedescriptor/duplicateoptions.md): Options that specify behavior for a duplicated file descriptor.
- [FileDescriptor.PipeOptions](filedescriptor/pipeoptions.md): Options that specify behavior for a newly-created pipe.

### Instance Methods

- [duplicate(as:options:retryOnInterrupt:)](filedescriptor/duplicate%28as_options_retryoninterrupt_%29.md): Duplicates this file descriptor and returns the newly created copy.
- [duplicate(as:retryOnInterrupt:)](filedescriptor/duplicate%28as_retryoninterrupt_%29.md): Duplicates this file descriptor and returns the newly created copy.
- [resize(to:retryOnInterrupt:)](filedescriptor/resize%28to_retryoninterrupt_%29.md): Truncates or extends the file referenced by this file descriptor.
- [stat(retryOnInterrupt:)](filedescriptor/stat%28retryoninterrupt_%29.md): Creates a `Stat` struct for the file referenced by this `FileDescriptor`.

### Type Properties

- [standardError](filedescriptor/standarderror.md): The standard error file descriptor, with a numeric value of 2.
- [standardInput](filedescriptor/standardinput.md): The standard input file descriptor, with a numeric value of 0.
- [standardOutput](filedescriptor/standardoutput.md): The standard output file descriptor, with a numeric value of 1.

### Type Methods

- [pipe()](filedescriptor/pipe%28%29.md): Creates a unidirectional data channel, which can be used for interprocess communication.
- [pipe(options:)](filedescriptor/pipe%28options_%29.md): Creates a unidirectional data channel, which can be used for interprocess communication.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Files

- [FilePath](filepath.md): Represents a location in the file system.
- [FilePermissions](filepermissions.md): The access permissions for a file.
