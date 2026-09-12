> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(filedescriptor:closeondealloc:)](https://developer.apple.com/documentation/foundation/filehandle/init(filedescriptor:closeondealloc:))

# init(fileDescriptor:closeOnDealloc:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.

## Declaration

```swift
init(fileDescriptor fd: Int32, closeOnDealloc closeopt: Bool)
```

## Parameters

- `fd`: The POSIX file descriptor with which to initialize the file handle.
- `closeopt`: [true](https://developer.apple.com/documentation/swift/true) if the returned file handle object should take ownership of the file descriptor and close it for you or [false](https://developer.apple.com/documentation/swift/false) if you want to maintain ownership of the file descriptor.

<a id="return-value"></a>

## Return Value

An initialized file handle object.

<a id="Discussion"></a>

## Discussion

If `flag` is [false](https://developer.apple.com/documentation/swift/false), the file descriptor you pass in to this method isn’t owned by the file handle object. In such a case, you’re responsible for closing the file descriptor at some point after disposing of the file handle object. If you want the file handle object to close the descriptor for you automatically, pass [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter.

## See Also

### Related Documentation

- [closeFile()](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

### Creating a file handle

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [init(forReadingAtPath:)](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [init(forReadingFromURL:)](init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingAtPath:)](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [init(forWritingToURL:)](init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(forUpdatingURL:)](init%28forupdatingurl_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.
- [init(coder:)](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.

# initWithFileDescriptor:closeOnDealloc: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.

## Declaration

```objectivec
- (instancetype) initWithFileDescriptor:(int) fd closeOnDealloc:(BOOL) closeopt;
```

## Parameters

- `fd`: The POSIX file descriptor with which to initialize the file handle.
- `closeopt`: [true](https://developer.apple.com/documentation/swift/true) if the returned file handle object should take ownership of the file descriptor and close it for you or [false](https://developer.apple.com/documentation/swift/false) if you want to maintain ownership of the file descriptor.

<a id="return-value"></a>

## Return Value

An initialized file handle object.

<a id="Discussion"></a>

## Discussion

If `flag` is [false](https://developer.apple.com/documentation/swift/false), the file descriptor you pass in to this method isn’t owned by the file handle object. In such a case, you’re responsible for closing the file descriptor at some point after disposing of the file handle object. If you want the file handle object to close the descriptor for you automatically, pass [true](https://developer.apple.com/documentation/swift/true) for the `flag` parameter.

## See Also

### Related Documentation

- [closeFile](closefile%28%29.md): Deprecated. Disallows further access to the represented file or communications channel and signals end of file on communications channels that permit writing.

### Creating a file handle

- [initWithFileDescriptor:](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [fileHandleForReadingAtPath:](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [fileHandleForWritingAtPath:](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [fileHandleForUpdatingAtPath:](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [initWithCoder:](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.
