> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/embedssemanticsegmentationmattesinphoto](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/embedssemanticsegmentationmattesinphoto)

# embedsSemanticSegmentationMattesInPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.

## Declaration

```swift
var embedsSemanticSegmentationMattesInPhoto: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Semantic segmentation mattes are only supported in HEIF and JPEG. The photo output ignores this property if you set [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) to an empty array.

The property’s default value is [true](https://developer.apple.com/documentation/swift/true).

> **Important**

>  Enabling semantic segmentation matte delivery requires a lengthy reconfiguration of the capture render pipeline. If you intend to capture semantic segmentation mattes, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling the capture session’s [startRunning()](../avcapturesession/startrunning%28%29.md) method.

## See Also

### Capturing semantic segmentation mattes

- [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that the photo render pipeline can deliver.

# embedsSemanticSegmentationMattesInPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.

## Declaration

```objectivec
@property (nonatomic) BOOL embedsSemanticSegmentationMattesInPhoto;
```

<a id="Discussion"></a>

## Discussion

Semantic segmentation mattes are only supported in HEIF and JPEG. The photo output ignores this property if you set [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) to an empty array.

The property’s default value is [true](https://developer.apple.com/documentation/swift/true).

> **Important**

>  Enabling semantic segmentation matte delivery requires a lengthy reconfiguration of the capture render pipeline. If you intend to capture semantic segmentation mattes, set this property to [true](https://developer.apple.com/documentation/swift/true) before calling the capture session’s [startRunning](../avcapturesession/startrunning%28%29.md) method.

## See Also

### Capturing semantic segmentation mattes

- [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that the photo render pipeline can deliver.
