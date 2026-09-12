> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(filedescriptor:)](https://developer.apple.com/documentation/foundation/filehandle/init(filedescriptor:))

# init(fileDescriptor:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a file handle object associated with the specified file descriptor.

## Declaration

```swift
convenience init(fileDescriptor fd: Int32)
```

## Parameters

- `fd`: The POSIX file descriptor with which to initialize the file handle. This descriptor represents an open file or socket that you created previously. For example, when creating a file handle for a socket, you’d pass the value returned by the socket function.

<a id="return-value"></a>

## Return Value

A file handle initialized with `fileDescriptor`.

<a id="Discussion"></a>

## Discussion

The file descriptor you pass in to this method isn’t owned by the file handle object. Therefore, you’re responsible for closing the file descriptor at some point after disposing of the file handle object.

You can create a file handle for a socket by using the result of a `socket` call as `fileDescriptor`.

## See Also

### Related Documentation

- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

### Creating a file handle

- [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [init(forReadingAtPath:)](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [init(forReadingFromURL:)](init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingAtPath:)](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [init(forWritingToURL:)](init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(forUpdatingURL:)](init%28forupdatingurl_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(coder:)](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

# initWithFileDescriptor: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a file handle object associated with the specified file descriptor.

## Declaration

```objectivec
- (instancetype) initWithFileDescriptor:(int) fd;
```

## Parameters

- `fd`: The POSIX file descriptor with which to initialize the file handle. This descriptor represents an open file or socket that you created previously. For example, when creating a file handle for a socket, you’d pass the value returned by the socket function.

<a id="return-value"></a>

## Return Value

A file handle initialized with `fileDescriptor`.

<a id="Discussion"></a>

## Discussion

The file descriptor you pass in to this method isn’t owned by the file handle object. Therefore, you’re responsible for closing the file descriptor at some point after disposing of the file handle object.

You can create a file handle for a socket by using the result of a `socket` call as `fileDescriptor`.

## See Also

### Related Documentation

- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

### Creating a file handle

- [initWithFileDescriptor:closeOnDealloc:](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [fileHandleForReadingAtPath:](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [fileHandleForWritingAtPath:](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [fileHandleForUpdatingAtPath:](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [initWithCoder:](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.
