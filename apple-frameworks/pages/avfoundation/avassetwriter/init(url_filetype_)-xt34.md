> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/init(url:filetype:)-xt34](https://developer.apple.com/documentation/avfoundation/avassetwriter/init(url:filetype:)-xt34)

# init(url:fileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that writes media data to a container file at the output URL.

## Declaration

```swift
convenience init(url outputURL: URL, fileType outputFileType: AVFileType) throws
```

## Parameters

- `outputURL`: The location of the file to write.
- `outputFileType`: The type of container file to write.

<a id="return-value"></a>

## Return Value

A new asset writer.

<a id="Discussion"></a>

## Discussion

Writing fails if a file already exists at the output URL.

## See Also

### Creating an asset writer

- [init(outputURL:fileType:)](init%28outputurl_filetype_%29.md): Creates an object that writes media data to a container file at the output URL.
- [init(contentType:)](init%28contenttype_%29.md): Creates an object that outputs segment data in a specified container format.

# assetWriterWithURL:fileType:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that writes media data to a container file at the output URL.

## Declaration

```objectivec
+ (instancetype) assetWriterWithURL:(NSURL *) outputURL fileType:(AVFileType) outputFileType error:(NSError **) outError;
```

## Parameters

- `outputURL`: The location of the file to write.
- `outputFileType`: The type of container file to write.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="return-value"></a>

## Return Value

A new asset writer.

<a id="Discussion"></a>

## Discussion

Writing fails if a file already exists at the output URL.

## See Also

### Creating an asset writer

- [initWithURL:fileType:error:](init%28outputurl_filetype_%29.md): Creates an object that writes media data to a container file at the output URL.
- [initWithContentType:](init%28contenttype_%29.md): Creates an object that outputs segment data in a specified container format.
