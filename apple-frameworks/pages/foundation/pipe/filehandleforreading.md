> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/pipe/filehandleforreading](https://developer.apple.com/documentation/foundation/pipe/filehandleforreading)

# fileHandleForReading (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s read file handle.

## Declaration

```swift
var fileHandleForReading: FileHandle { get }
```

<a id="Discussion"></a>

## Discussion

The descriptor represented by this object is deleted, and the object itself is automatically deallocated when the receiver is deallocated.

You use the returned file handle to read from the pipe using `NSFileHandle`’s read methods—[availableData](../filehandle/availabledata.md), [readDataToEndOfFile()](../filehandle/readdatatoendoffile%28%29.md), and [readData(ofLength:)](../filehandle/readdata%28oflength_%29.md).

You don’t need to send [closeFile()](../filehandle/closefile%28%29.md) to this object or explicitly release the object after you have finished using it.

## See Also

### Getting the File Handles for a Pipe

- [fileHandleForWriting](filehandleforwriting.md): The receiver’s write file handle.

# fileHandleForReading (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s read file handle.

## Declaration

```objectivec
@property (retain, readonly) NSFileHandle * fileHandleForReading;
```

<a id="Discussion"></a>

## Discussion

The descriptor represented by this object is deleted, and the object itself is automatically deallocated when the receiver is deallocated.

You use the returned file handle to read from the pipe using `NSFileHandle`’s read methods—[availableData](../filehandle/availabledata.md), [readDataToEndOfFile](../filehandle/readdatatoendoffile%28%29.md), and [readDataOfLength:](../filehandle/readdata%28oflength_%29.md).

You don’t need to send [closeFile](../filehandle/closefile%28%29.md) to this object or explicitly release the object after you have finished using it.

## See Also

### Getting the File Handles for a Pipe

- [fileHandleForWriting](filehandleforwriting.md): The receiver’s write file handle.
