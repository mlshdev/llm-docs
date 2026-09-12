> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/preferredimagedynamicrange](https://developer.apple.com/documentation/uikit/uiimageview/preferredimagedynamicrange)

# preferredImageDynamicRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The preferred treatment to use for HDR images. By default the image view will defer to the value from its traitCollection.

## Declaration

```swift
var preferredImageDynamicRange: UIImage.DynamicRange { get set }
```

## See Also

### Specifying the dynamic range

- [imageDynamicRange](imagedynamicrange.md): The resolved treatment to use for HDR images.
- [UIImage.DynamicRange](../uiimage/dynamicrange.md)

# preferredImageDynamicRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The preferred treatment to use for HDR images. By default the image view will defer to the value from its traitCollection.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) UIImageDynamicRange preferredImageDynamicRange;
```

## See Also

### Specifying the dynamic range

- [imageDynamicRange](imagedynamicrange.md): The resolved treatment to use for HDR images.
- [UIImageDynamicRange](../uiimage/dynamicrange.md)
