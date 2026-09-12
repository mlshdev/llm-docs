> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/nulldevice](https://developer.apple.com/documentation/foundation/filehandle/nulldevice)

# nullDevice (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with a null device.

## Declaration

```swift
class var nullDevice: FileHandle { get }
```

<a id="return-value"></a>

## Return Value

A file handle associated with a null device.

<a id="Discussion"></a>

## Discussion

You can use null-device file handles as “placeholders” for standard-device file handles or in collection objects to avoid exceptions and other errors resulting from messages being sent to invalid file handles. Read messages sent to a null-device file handle return an end-of-file indicator (an empty `NSData` object) rather than raise an exception. Write messages are no-ops, whereas [fileDescriptor](filedescriptor.md) returns an illegal value. Other methods are no-ops or return “sensible” values.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [standardError](standarderror.md): The file handle associated with the standard error file.
- [standardInput](standardinput.md): The file handle associated with the standard input file.
- [standardOutput](standardoutput.md): The file handle associated with the standard output file.

# fileHandleWithNullDevice (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with a null device.

## Declaration

```objectivec
@property (class, strong, readonly) NSFileHandle * fileHandleWithNullDevice;
```

<a id="return-value"></a>

## Return Value

A file handle associated with a null device.

<a id="Discussion"></a>

## Discussion

You can use null-device file handles as “placeholders” for standard-device file handles or in collection objects to avoid exceptions and other errors resulting from messages being sent to invalid file handles. Read messages sent to a null-device file handle return an end-of-file indicator (an empty `NSData` object) rather than raise an exception. Write messages are no-ops, whereas [fileDescriptor](filedescriptor.md) returns an illegal value. Other methods are no-ops or return “sensible” values.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [fileHandleWithStandardError](standarderror.md): The file handle associated with the standard error file.
- [fileHandleWithStandardInput](standardinput.md): The file handle associated with the standard input file.
- [fileHandleWithStandardOutput](standardoutput.md): The file handle associated with the standard output file.
