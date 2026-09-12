> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/pipe/filehandleforwriting](https://developer.apple.com/documentation/foundation/pipe/filehandleforwriting)

# fileHandleForWriting (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s write file handle.

## Declaration

```swift
var fileHandleForWriting: FileHandle { get }
```

<a id="Discussion"></a>

## Discussion

This object is automatically deallocated when the receiver is deallocated.

You use the returned file handle to write to the pipe using `NSFileHandle`’s [write(\_:)](../filehandle/write%28__%29.md) method. When you are finished writing data to this object, send it a [closeFile()](../filehandle/closefile%28%29.md) message to delete the descriptor. Deleting the descriptor causes the reading process to receive an end-of-data signal (an empty `NSData` object).

## See Also

### Getting the File Handles for a Pipe

- [fileHandleForReading](filehandleforreading.md): The receiver’s read file handle.

# fileHandleForWriting (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s write file handle.

## Declaration

```objectivec
@property (retain, readonly) NSFileHandle * fileHandleForWriting;
```

<a id="Discussion"></a>

## Discussion

This object is automatically deallocated when the receiver is deallocated.

You use the returned file handle to write to the pipe using `NSFileHandle`’s [writeData:](../filehandle/write%28__%29.md) method. When you are finished writing data to this object, send it a [closeFile](../filehandle/closefile%28%29.md) message to delete the descriptor. Deleting the descriptor causes the reading process to receive an end-of-data signal (an empty `NSData` object).

## See Also

### Getting the File Handles for a Pipe

- [fileHandleForReading](filehandleforreading.md): The receiver’s read file handle.
