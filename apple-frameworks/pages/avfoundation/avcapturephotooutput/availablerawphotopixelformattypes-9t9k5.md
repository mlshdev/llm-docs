> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/availablerawphotopixelformattypes-9t9k5](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/availablerawphotopixelformattypes-9t9k5)

# availableRawPhotoPixelFormatTypes

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 17.0+

The pixel formats the capture output supports for RAW photo capture.

## Declaration

```swift
@nonobjc var availableRawPhotoPixelFormatTypes: [OSType] { get }
```

<a id="Discussion"></a>

## Discussion

To capture a photo in RAW format, use the [init(rawPixelFormatType:)](../avcapturephotosettings/init%28rawpixelformattype_%29.md) or [init(rawPixelFormatType:processedFormat:)](../avcapturephotosettings/init%28rawpixelformattype_processedformat_%29.md) initializer to create your photo settings object. The value for that initializer’s `rawPixelFormatType` parameter must be one of the Bayer RAW format identifiers listed in this array.

> **Note**

>  Read this property only after adding the photo capture output to an [AVCaptureSession](../avcapturesession.md) object containing a video source. If the photo capture output isn’t connected to a session with a video source, this array is empty.
>
> Not all devices support RAW image capture. If the current device doesn’t support RAW capture, this array is empty.

This property supports key-value observing.

## See Also

### Determining supported pixel formats

- [availablePhotoPixelFormatTypes](availablephotopixelformattypes-3ydgm.md): The pixel formats the capture output supports for photo capture.
- [supportedPhotoPixelFormatTypes(for:)](supportedphotopixelformattypes%28for_%29.md): Returns the list of uncompressed pixel formats supported for photo data in the specified file type.
- [supportedRawPhotoPixelFormatTypes(for:)](supportedrawphotopixelformattypes%28for_%29.md): Returns the list of Bayer RAW pixel formats supported for photo data in the specified file type.
- [isAppleProRAWPixelFormat(\_:)](isappleprorawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is an Apple ProRAW format.
- [isBayerRAWPixelFormat(\_:)](isbayerrawpixelformat%28__%29.md): Returns a Boolean value that indicates whether the pixel format is a Bayer RAW format.
