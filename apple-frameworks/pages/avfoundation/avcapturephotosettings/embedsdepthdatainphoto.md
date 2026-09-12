> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/embedsdepthdatainphoto](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/embedsdepthdatainphoto)

# embedsDepthDataInPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.

## Declaration

```swift
var embedsDepthDataInPhoto: Bool { get set }
```

## Mentioned In

- [Capturing photos with depth](../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and depth data capture is enabled with the [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property, the [AVCapturePhoto](../avcapturephoto.md) class includes the depth map as an embedded attachment when you flatten the photo data for output in compatible file formats.

Set this property to [false](https://developer.apple.com/documentation/swift/false) if you wish to capture depth data with a photo but not include depth data in  output.

## See Also

### Capturing depth data

- [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [isDepthDataFiltered](isdepthdatafiltered.md): A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.

# embedsDepthDataInPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.

## Declaration

```objectivec
@property (nonatomic) BOOL embedsDepthDataInPhoto;
```

## Mentioned In

- [Capturing photos with depth](../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and depth data capture is enabled with the [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property, the [AVCapturePhoto](../avcapturephoto.md) class includes the depth map as an embedded attachment when you flatten the photo data for output in compatible file formats.

Set this property to [false](https://developer.apple.com/documentation/swift/false) if you wish to capture depth data with a photo but not include depth data in  output.

## See Also

### Capturing depth data

- [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [depthDataFiltered](isdepthdatafiltered.md): A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.
