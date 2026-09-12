> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isdepthdatafiltered](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isdepthdatafiltered)

# isDepthDataFiltered (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.

## Declaration

```swift
var isDepthDataFiltered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and depth data capture is enabled with the [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property, the capture system smooths noise and fills in missing values (caused by low light or lens occlusion) in depth data maps by temporally interpolating between previous and subsequent frames of captured depth data.

Filtering depth data makes it more useful for applying visual effects to a companion image, but alters the data such that it may no longer be suitable for computer vision tasks. (In an unfiltered depth map, missing values are represented as `NaN`.) Set this property to [false](https://developer.apple.com/documentation/swift/false) to disable filtering and receive unfiltered depth data.

## See Also

### Capturing depth data

- [isDepthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [embedsDepthDataInPhoto](embedsdepthdatainphoto.md): A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.

# depthDataFiltered (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that determines whether to smooth noise and fill in missing values in depth data output.

## Declaration

```objectivec
@property (nonatomic, getter=isDepthDataFiltered) BOOL depthDataFiltered;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default), and depth data capture is enabled with the [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md) property, the capture system smooths noise and fills in missing values (caused by low light or lens occlusion) in depth data maps by temporally interpolating between previous and subsequent frames of captured depth data.

Filtering depth data makes it more useful for applying visual effects to a companion image, but alters the data such that it may no longer be suitable for computer vision tasks. (In an unfiltered depth map, missing values are represented as `NaN`.) Set this property to [false](https://developer.apple.com/documentation/swift/false) to disable filtering and receive unfiltered depth data.

## See Also

### Capturing depth data

- [depthDataDeliveryEnabled](isdepthdatadeliveryenabled.md): A Boolean value that determines whether the photo output captures depth data along with the photo.
- [embedsDepthDataInPhoto](embedsdepthdatainphoto.md): A Boolean value that determines whether any depth data captured with the photo is included when generating output file data.
