> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/availablephotocodectypes](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/availablephotocodectypes)

# availablePhotoCodecTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The compression codecs this capture output currently supports for photo capture.

## Declaration

```swift
var availablePhotoCodecTypes: [AVVideoCodecType] { get }
```

<a id="Discussion"></a>

## Discussion

To capture a photo in a compressed format, such as JPEG, use the [init(format:)](../avcapturephotosettings/init%28format_%29.md) initializer to create your photo settings object. In that initializer’s `format` dictionary, pass the key [AVVideoCodecKey](../avvideocodeckey.md), whose value must be one of the codec identifiers listed in this array.

> **Note**

>  Read this property only after adding the photo capture output to an [AVCaptureSession](../avcapturesession.md) object containing a video source. If the photo capture output isn’t connected to a session with a video source, this array is empty.

This property supports key-value observing.

## See Also

### Determining supported codec types

- [supportedPhotoCodecTypes(for:)](supportedphotocodectypes%28for_%29.md): Returns the list of photo codecs (such as JPEG or HEVC) supported for photo data in the specified file type.

# availablePhotoCodecTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The compression codecs this capture output currently supports for photo capture.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availablePhotoCodecTypes;
```

<a id="Discussion"></a>

## Discussion

To capture a photo in a compressed format, such as JPEG, use the [photoSettingsWithFormat:](../avcapturephotosettings/init%28format_%29.md) initializer to create your photo settings object. In that initializer’s `format` dictionary, pass the key [AVVideoCodecKey](../avvideocodeckey.md), whose value must be one of the codec identifiers listed in this array.

> **Note**

>  Read this property only after adding the photo capture output to an [AVCaptureSession](../avcapturesession.md) object containing a video source. If the photo capture output isn’t connected to a session with a video source, this array is empty.

This property supports key-value observing.

## See Also

### Determining supported codec types

- [supportedPhotoCodecTypesForFileType:](supportedphotocodectypes%28for_%29.md): Returns the list of photo codecs (such as JPEG or HEVC) supported for photo data in the specified file type.
