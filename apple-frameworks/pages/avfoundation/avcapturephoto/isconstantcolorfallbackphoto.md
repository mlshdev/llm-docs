> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/isconstantcolorfallbackphoto](https://developer.apple.com/documentation/avfoundation/avcapturephoto/isconstantcolorfallbackphoto)

# isConstantColorFallbackPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that Indicates whether this photo is a fallback photo for a constant color capture.

## Declaration

```swift
var isConstantColorFallbackPhoto: Bool { get }
```

## See Also

### Enabling constant color

- [constantColorCenterWeightedMeanConfidenceLevel](constantcolorcenterweightedmeanconfidencelevel.md): A score that summarizes the overall confidence level of a constant color photo.
- [constantColorConfidenceMap](constantcolorconfidencemap.md): A pixel buffer where each pixel value indicates how fully the system achieves the constant color effect in the corresponding region of the photo.

# constantColorFallbackPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that Indicates whether this photo is a fallback photo for a constant color capture.

## Declaration

```objectivec
@property (readonly, getter=isConstantColorFallbackPhoto) BOOL constantColorFallbackPhoto;
```

## See Also

### Enabling constant color

- [constantColorCenterWeightedMeanConfidenceLevel](constantcolorcenterweightedmeanconfidencelevel.md): A score that summarizes the overall confidence level of a constant color photo.
- [constantColorConfidenceMap](constantcolorconfidencemap.md): A pixel buffer where each pixel value indicates how fully the system achieves the constant color effect in the corresponding region of the photo.
