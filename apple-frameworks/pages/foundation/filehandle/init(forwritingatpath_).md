> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(forwritingatpath:)](https://developer.apple.com/documentation/foundation/filehandle/init(forwritingatpath:))

# init(forWritingAtPath:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for writing to the file, device, or named socket at the specified path.

## Declaration

```swift
convenience init?(forWritingAtPath path: String)
```

## Parameters

- `path`: The path to the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `path`.

<a id="Discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. You cannot read data from the returned file handle object. Use the [write(\_:)](write%28__%29.md) method to write data to the file handle.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.

### Creating a file handle

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [init(forReadingAtPath:)](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [init(forReadingFromURL:)](init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingToURL:)](init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(forUpdatingURL:)](init%28forupdatingurl_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(coder:)](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

# fileHandleForWritingAtPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for writing to the file, device, or named socket at the specified path.

## Declaration

```objectivec
+ (instancetype) fileHandleForWritingAtPath:(NSString *) path;
```

## Parameters

- `path`: The path to the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `path`.

<a id="Discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. You cannot read data from the returned file handle object. Use the [writeData:](write%28__%29.md) method to write data to the file handle.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

## See Also

### Related Documentation

- [writeData:](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.

### Creating a file handle

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [initWithFileDescriptor:closeOnDealloc:](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [fileHandleForReadingAtPath:](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [fileHandleForUpdatingAtPath:](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [initWithCoder:](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.
