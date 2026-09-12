> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(forreadingatpath:)](https://developer.apple.com/documentation/foundation/filehandle/init(forreadingatpath:))

# init(forReadingAtPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading the file, device, or named socket at the specified path.

## Declaration

```swift
convenience init?(forReadingAtPath path: String)
```

## Parameters

- `path`: The path to the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `path`.

<a id="Discussion"></a>

## Discussion

The system sets the file pointer to the beginning of the file. You can’t write data to the returned file handle object. Use the [readDataToEndOfFile()](readdatatoendoffile%28%29.md) or [readData(ofLength:)](readdata%28oflength_%29.md) methods to read data from it.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.

### Creating a file handle

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [init(forReadingFromURL:)](init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingAtPath:)](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [init(forWritingToURL:)](init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(forUpdatingURL:)](init%28forupdatingurl_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(coder:)](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

# fileHandleForReadingAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading the file, device, or named socket at the specified path.

## Declaration

```objectivec
+ (instancetype) fileHandleForReadingAtPath:(NSString *) path;
```

## Parameters

- `path`: The path to the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `path`.

<a id="Discussion"></a>

## Discussion

The system sets the file pointer to the beginning of the file. You can’t write data to the returned file handle object. Use the [readDataToEndOfFile](readdatatoendoffile%28%29.md) or [readDataOfLength:](readdata%28oflength_%29.md) methods to read data from it.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.
- [readDataOfLength:](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [readDataToEndOfFile](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.

### Creating a file handle

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [initWithFileDescriptor:closeOnDealloc:](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [fileHandleForWritingAtPath:](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [fileHandleForUpdatingAtPath:](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [initWithCoder:](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.
