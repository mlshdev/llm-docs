> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(forupdatingurl:)](https://developer.apple.com/documentation/foundation/filehandle/init(forupdatingurl:))

# init(forUpdatingURL:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.

## Declaration

```swift
convenience init(forUpdatingURL url: URL) throws
```

## Parameters

- `url`: The URL of the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `url`.

<a id="Discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. The returned object responds to both ```NSFileHandle``read...``` messages and [write(\_:)](write%28__%29.md).

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [availableData](availabledata.md): The data currently available in the receiver.
- [readData(ofLength:)](readdata%28oflength_%29.md): Deprecated. Reads data synchronously up to the specified number of bytes.
- [readDataToEndOfFile()](readdatatoendoffile%28%29.md): Deprecated. Reads the available data synchronously up to the end of file or maximum number of bytes.
- [write(\_:)](write%28__%29.md): Deprecated. Writes the specified data synchronously to the file handle.

### Creating a file handle

- [init(fileDescriptor:)](init%28filedescriptor_%29.md): Creates and returns a file handle object associated with the specified file descriptor.
- [init(fileDescriptor:closeOnDealloc:)](init%28filedescriptor_closeondealloc_%29.md): Creates and returns a file handle object associated with the specified file descriptor and deallocation policy.
- [init(forReadingAtPath:)](init%28forreadingatpath_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified path.
- [init(forReadingFromURL:)](init%28forreadingfromurl_%29.md): Returns a file handle initialized for reading the file, device, or named socket at the specified URL.
- [init(forWritingAtPath:)](init%28forwritingatpath_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified path.
- [init(forWritingToURL:)](init%28forwritingtourl_%29.md): Returns a file handle initialized for writing to the file, device, or named socket at the specified URL.
- [init(forUpdatingAtPath:)](init%28forupdatingatpath_%29.md): Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified path.
- [init(coder:)](init%28coder_%29.md): Returns a file handle initialized from data in an unarchiver.
