> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/standarderror](https://developer.apple.com/documentation/foundation/filehandle/standarderror)

# standardError (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with the standard error file.

## Declaration

```swift
class var standardError: FileHandle { get }
```

<a id="return-value"></a>

## Return Value

The shared file handle associated with the standard error file.

<a id="Discussion"></a>

## Discussion

Conventionally this is a terminal device where the system sends error messages. There’s one standard error file handle per process; it’s a shared instance.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [standardInput](standardinput.md): The file handle associated with the standard input file.
- [standardOutput](standardoutput.md): The file handle associated with the standard output file.
- [nullDevice](nulldevice.md): The file handle associated with a null device.

# fileHandleWithStandardError (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file handle associated with the standard error file.

## Declaration

```objectivec
@property (class, strong, readonly) NSFileHandle * fileHandleWithStandardError;
```

<a id="return-value"></a>

## Return Value

The shared file handle associated with the standard error file.

<a id="Discussion"></a>

## Discussion

Conventionally this is a terminal device where the system sends error messages. There’s one standard error file handle per process; it’s a shared instance.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

### Getting a file handle

- [fileHandleWithStandardInput](standardinput.md): The file handle associated with the standard input file.
- [fileHandleWithStandardOutput](standardoutput.md): The file handle associated with the standard output file.
- [fileHandleWithNullDevice](nulldevice.md): The file handle associated with a null device.
