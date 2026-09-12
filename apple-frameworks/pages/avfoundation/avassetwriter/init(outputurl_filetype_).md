> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/init(outputurl:filetype:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/init(outputurl:filetype:))

# init(outputURL:fileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that writes media data to a container file at the output URL.

## Declaration

```swift
init(outputURL: URL, fileType outputFileType: AVFileType) throws
```

## Parameters

- `outputURL`: The location of the file to write.
- `outputFileType`: The type of container file to write.

<a id="Discussion"></a>

## Discussion

Writing fails if a file already exists at the output URL.

## See Also

### Creating an asset writer

- [init(url:fileType:)](init%28url_filetype_%29-xt34.md): Returns a new object that writes media data to a container file at the output URL.
- [init(contentType:)](init%28contenttype_%29.md): Creates an object that outputs segment data in a specified container format.

# initWithURL:fileType:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that writes media data to a container file at the output URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) outputURL fileType:(AVFileType) outputFileType error:(NSError **) outError;
```

## Parameters

- `outputURL`: The location of the file to write.
- `outputFileType`: The type of container file to write.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="Discussion"></a>

## Discussion

Writing fails if a file already exists at the output URL.

## See Also

### Creating an asset writer

- [assetWriterWithURL:fileType:error:](init%28url_filetype_%29-xt34.md): Returns a new object that writes media data to a container file at the output URL.
- [initWithContentType:](init%28contenttype_%29.md): Creates an object that outputs segment data in a specified container format.
