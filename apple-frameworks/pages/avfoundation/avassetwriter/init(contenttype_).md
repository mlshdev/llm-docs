> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/init(contenttype:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/init(contenttype:))

# init(contentType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an object that outputs segment data in a specified container format.

## Declaration

```swift
init(contentType outputContentType: UTType)
```

## Parameters

- `outputContentType`: A type that indicates the format of the segment data to output.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an asset writer that outputs segment data to an adopter of the [AVAssetWriterDelegate](../avassetwriterdelegate.md) protocol. For example, you can create an asset writer object to write an MPEG-4 file as shown below:

```swift
// Create a UTType for the MP4 file type.
guard let contentType = UTType(AVFileType.mp4.rawValue) else { return }
let assetWriter = AVAssetWriter(contentType: contentType)
```

## See Also

### Creating an asset writer

- [init(url:fileType:)](init%28url_filetype_%29-xt34.md): Returns a new object that writes media data to a container file at the output URL.
- [init(outputURL:fileType:)](init%28outputurl_filetype_%29.md): Creates an object that writes media data to a container file at the output URL.

# initWithContentType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an object that outputs segment data in a specified container format.

## Declaration

```objectivec
- (instancetype) initWithContentType:(UTType *) outputContentType;
```

## Parameters

- `outputContentType`: A type that indicates the format of the segment data to output.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an asset writer that outputs segment data to an adopter of the [AVAssetWriterDelegate](../avassetwriterdelegate.md) protocol. For example, you can create an asset writer object to write an MPEG-4 file as shown below:

```swift
// Create a UTType for the MP4 file type.
guard let contentType = UTType(AVFileType.mp4.rawValue) else { return }
let assetWriter = AVAssetWriter(contentType: contentType)
```

## See Also

### Creating an asset writer

- [assetWriterWithURL:fileType:error:](init%28url_filetype_%29-xt34.md): Returns a new object that writes media data to a container file at the output URL.
- [initWithURL:fileType:error:](init%28outputurl_filetype_%29.md): Creates an object that writes media data to a container file at the output URL.
