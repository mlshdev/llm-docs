> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/filedescriptor](https://developer.apple.com/documentation/foundation/filehandle/filedescriptor)

# fileDescriptor (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The POSIX file descriptor associated with the receiver.

## Declaration

```swift
var fileDescriptor: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

You can use this method to retrieve the file descriptor while it is open. If the file handle object owns the file descriptor, you must not close it yourself. However, you can use the [closeFile()](closefile%28%29.md) method to close the file descriptor programmatically. If you do call the [closeFile()](closefile%28%29.md) method, subsequent calls to this method raise an exception.

## See Also

### Related Documentation

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.

# fileDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The POSIX file descriptor associated with the receiver.

## Declaration

```objectivec
@property (readonly) int fileDescriptor;
```

<a id="Discussion"></a>

## Discussion

You can use this method to retrieve the file descriptor while it is open. If the file handle object owns the file descriptor, you must not close it yourself. However, you can use the [closeFile](closefile%28%29.md) method to close the file descriptor programmatically. If you do call the [closeFile](closefile%28%29.md) method, subsequent calls to this method raise an exception.

## See Also

### Related Documentation

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
