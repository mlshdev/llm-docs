> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/enabledsemanticsegmentationmattetypes](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/enabledsemanticsegmentationmattetypes)

# enabledSemanticSegmentationMatteTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The semantic segmentation matte types that the photo render pipeline delivers.

## Declaration

```swift
var enabledSemanticSegmentationMatteTypes: [AVSemanticSegmentationMatte.MatteType] { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property value to the array of matte types you’d like delivered with your primary photos. The array may only contain values present in [availableSemanticSegmentationMatteTypes](availablesemanticsegmentationmattetypes.md).

The default value of this property is an empty array.

> **Important**

>  Enabling semantic segmentation matte delivery requires a lengthy reconfiguration of the capture render pipeline. If you intend to capture semantic segmentation mattes, set this property to your desired types before calling the capture session’s [startRunning()](../avcapturesession/startrunning%28%29.md) method.

## See Also

### Getting segmentation mattes

- [availableSemanticSegmentationMatteTypes](availablesemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that may be captured and delivered along with the primary photo.

# enabledSemanticSegmentationMatteTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The semantic segmentation matte types that the photo render pipeline delivers.

## Declaration

```objectivec
@property (nonatomic) NSArray<NSString *> * enabledSemanticSegmentationMatteTypes;
```

<a id="Discussion"></a>

## Discussion

Set this property value to the array of matte types you’d like delivered with your primary photos. The array may only contain values present in [availableSemanticSegmentationMatteTypes](availablesemanticsegmentationmattetypes.md).

The default value of this property is an empty array.

> **Important**

>  Enabling semantic segmentation matte delivery requires a lengthy reconfiguration of the capture render pipeline. If you intend to capture semantic segmentation mattes, set this property to your desired types before calling the capture session’s [startRunning](../avcapturesession/startrunning%28%29.md) method.

## See Also

### Getting segmentation mattes

- [availableSemanticSegmentationMatteTypes](availablesemanticsegmentationmattetypes.md): An array of semantic segmentation matte types that may be captured and delivered along with the primary photo.
