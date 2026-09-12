> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(forreadingfrom:)](https://developer.apple.com/documentation/foundation/filehandle/init(forreadingfrom:))

# init(forReadingFrom:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading the file, device, or named socket at the specified URL.

## Declaration

```swift
convenience init(forReadingFrom url: URL) throws
```

## Parameters

- `url`: The URL of the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `url`.

<a id="discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. You cannot write data to the returned file handle object. Use the [readDataToEndOfFile()](readdatatoendoffile%28%29.md) or [readData(ofLength:)](readdata%28oflength_%29.md) methods to read data from it.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

# fileHandleForReadingFromURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading the file, device, or named socket at the specified URL.

## Declaration

```objectivec
+ (instancetype) fileHandleForReadingFromURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL of the file, device, or named socket to access.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `url`.

<a id="discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. You cannot write data to the returned file handle object. Use the [readDataToEndOfFile](readdatatoendoffile%28%29.md) or [readDataOfLength:](readdata%28oflength_%29.md) methods to read data from it.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.
