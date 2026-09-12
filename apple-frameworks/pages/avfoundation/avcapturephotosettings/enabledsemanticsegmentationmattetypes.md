> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/enabledsemanticsegmentationmattetypes](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/enabledsemanticsegmentationmattetypes)

# enabledSemanticSegmentationMatteTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of semantic segmentation matte types that the photo render pipeline can deliver.

## Declaration

```swift
var enabledSemanticSegmentationMatteTypes: [AVSemanticSegmentationMatte.MatteType] { get set }
```

<a id="Discussion"></a>

## Discussion

You may set this property to the array of matte types you’d like delivered with [AVCapturePhoto](../avcapturephoto.md). The array may only contain values present in [availableSemanticSegmentationMatteTypes](../avcapturephotooutput/availablesemanticsegmentationmattetypes.md).

The default value of this property is an empty array.

## See Also

### Capturing semantic segmentation mattes

- [embedsSemanticSegmentationMattesInPhoto](embedssemanticsegmentationmattesinphoto.md): A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.

# enabledSemanticSegmentationMatteTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of semantic segmentation matte types that the photo render pipeline can deliver.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * enabledSemanticSegmentationMatteTypes;
```

<a id="Discussion"></a>

## Discussion

You may set this property to the array of matte types you’d like delivered with [AVCapturePhoto](../avcapturephoto.md). The array may only contain values present in [availableSemanticSegmentationMatteTypes](../avcapturephotooutput/availablesemanticsegmentationmattetypes.md).

The default value of this property is an empty array.

## See Also

### Capturing semantic segmentation mattes

- [embedsSemanticSegmentationMattesInPhoto](embedssemanticsegmentationmattesinphoto.md): A Boolean value that specifies whether to write the enabled semantic segmentation matte types captured with this photo to the photo’s file structure.
