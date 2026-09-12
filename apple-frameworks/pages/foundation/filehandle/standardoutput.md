> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/standardoutput](https://developer.apple.com/documentation/foundation/filehandle/standardoutput)

# standardOutput (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with the standard output file.

## Declaration

```swift
class var standardOutput: FileHandle { get }
```

<a id="return-value"></a>

## Return Value

The shared file handle associated with the standard output file.

<a id="Discussion"></a>

## Discussion

Conventionally this is a terminal device that receives a stream of data from a program. There’s one standard output file handle per process; it’s a shared instance.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [standardError](standarderror.md): The file handle associated with the standard error file.
- [standardInput](standardinput.md): The file handle associated with the standard input file.
- [nullDevice](nulldevice.md): The file handle associated with a null device.

# fileHandleWithStandardOutput (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with the standard output file.

## Declaration

```objectivec
@property (class, strong, readonly) NSFileHandle * fileHandleWithStandardOutput;
```

<a id="return-value"></a>

## Return Value

The shared file handle associated with the standard output file.

<a id="Discussion"></a>

## Discussion

Conventionally this is a terminal device that receives a stream of data from a program. There’s one standard output file handle per process; it’s a shared instance.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [fileHandleWithStandardError](standarderror.md): The file handle associated with the standard error file.
- [fileHandleWithStandardInput](standardinput.md): The file handle associated with the standard input file.
- [fileHandleWithNullDevice](nulldevice.md): The file handle associated with a null device.
