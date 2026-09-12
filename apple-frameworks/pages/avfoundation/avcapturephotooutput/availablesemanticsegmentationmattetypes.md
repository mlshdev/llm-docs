> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/availablesemanticsegmentationmattetypes](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/availablesemanticsegmentationmattetypes)

# availableSemanticSegmentationMatteTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of semantic segmentation matte types that may be captured and delivered along with the primary photo.

## Declaration

```swift
var availableSemanticSegmentationMatteTypes: [AVSemanticSegmentationMatte.MatteType] { get }
```

<a id="Discussion"></a>

## Discussion

This property returns the array of semantic segmentation types that’s available given the current session configuration.

This property is key-value observable.

> **Important**

>  The value of this property may change when switching cameras or formats. When this property changes, [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) reverts to an empty array. If you’ve previously opted in for delivery of one or more semantic segmentation mattes, you need to set up your [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) again.

## See Also

### Getting segmentation mattes

- [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md): The semantic segmentation matte types that the photo render pipeline delivers.

# availableSemanticSegmentationMatteTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of semantic segmentation matte types that may be captured and delivered along with the primary photo.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableSemanticSegmentationMatteTypes;
```

<a id="Discussion"></a>

## Discussion

This property returns the array of semantic segmentation types that’s available given the current session configuration.

This property is key-value observable.

> **Important**

>  The value of this property may change when switching cameras or formats. When this property changes, [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) reverts to an empty array. If you’ve previously opted in for delivery of one or more semantic segmentation mattes, you need to set up your [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md) again.

## See Also

### Getting segmentation mattes

- [enabledSemanticSegmentationMatteTypes](enabledsemanticsegmentationmattetypes.md): The semantic segmentation matte types that the photo render pipeline delivers.
