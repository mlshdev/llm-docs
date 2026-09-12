> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filehandle/init(forupdating:)](https://developer.apple.com/documentation/foundation/filehandle/init(forupdating:))

# init(forUpdating:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.

## Declaration

```swift
convenience init(forUpdating url: URL) throws
```

## Parameters

- `url`: The URL of the file, device, or named socket to access.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `url`.

<a id="discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. The returned object responds to both read and [write(\_:)](write%28__%29.md) messages.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.

# fileHandleForUpdatingURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a file handle initialized for reading and writing to the file, device, or named socket at the specified URL.

## Declaration

```objectivec
+ (instancetype) fileHandleForUpdatingURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL of the file, device, or named socket to access.
- `error`: If an error occurs, upon return contains an `NSError` object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

The initialized file handle object or `nil` if no file exists at `url`.

<a id="discussion"></a>

## Discussion

The file pointer is set to the beginning of the file. The returned object responds to both read and [writeData:](write%28__%29.md) messages.

When using this method to create a file handle object, the file handle owns its associated file descriptor and is responsible for closing it.
