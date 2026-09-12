> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/framesemantics-swift.struct](https://developer.apple.com/documentation/arkit/arconfiguration/framesemantics-swift.struct)

# ARConfiguration.FrameSemantics (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Types of optional frame features you can enable in your app.

## Declaration

```swift
struct FrameSemantics
```

<a id="Discussion"></a>

## Discussion

A frame semantic represents 2D information that ARKit extracts from a frame.

## Topics

### Creating a Feature

- [init(rawValue:)](framesemantics-swift.struct/init%28rawvalue_%29.md): Creates a frame semantics feature.

### Tracking Bodies in 2D

- [bodyDetection](framesemantics-swift.struct/bodydetection.md): An option that indicates that 2D body detection is enabled.

### Occluding Virtual Content with People

- [personSegmentation](framesemantics-swift.struct/personsegmentation.md): An option that indicates that people occlude your app’s virtual content.
- [personSegmentationWithDepth](framesemantics-swift.struct/personsegmentationwithdepth.md): An option that indicates that people occlude your app’s virtual content depending on depth.

### Accessing Depth

- [sceneDepth](framesemantics-swift.struct/scenedepth.md): An option that provides the distance from the device to real-world objects viewed through the camera.
- [smoothedSceneDepth](framesemantics-swift.struct/smoothedscenedepth.md): An option that provides the distance from the device to real-world objects, averaged across several frames.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enabling frame features

- [frameSemantics](framesemantics-swift.property.md): The set of active semantics on the frame.
- [supportsFrameSemantics(\_:)](supportsframesemantics%28__%29.md): Checks whether a particular feature is supported.

# ARFrameSemantics (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Types of optional frame features you can enable in your app.

## Declaration

```objectivec
enum ARFrameSemantics : NSUInteger;
```

<a id="Discussion"></a>

## Discussion

A frame semantic represents 2D information that ARKit extracts from a frame.

## Topics

### Tracking Bodies in 2D

- [ARFrameSemanticBodyDetection](framesemantics-swift.struct/bodydetection.md): An option that indicates that 2D body detection is enabled.

### Occluding Virtual Content with People

- [ARFrameSemanticPersonSegmentation](framesemantics-swift.struct/personsegmentation.md): An option that indicates that people occlude your app’s virtual content.
- [ARFrameSemanticPersonSegmentationWithDepth](framesemantics-swift.struct/personsegmentationwithdepth.md): An option that indicates that people occlude your app’s virtual content depending on depth.

### Accessing Depth

- [ARFrameSemanticSceneDepth](framesemantics-swift.struct/scenedepth.md): An option that provides the distance from the device to real-world objects viewed through the camera.
- [ARFrameSemanticSmoothedSceneDepth](framesemantics-swift.struct/smoothedscenedepth.md): An option that provides the distance from the device to real-world objects, averaged across several frames.

### Disabling Features

- [ARFrameSemanticNone](../arframesemantics/arframesemanticnone.md): An option that indicates no frame features are enabled.

## See Also

### Enabling frame features

- [frameSemantics](framesemantics-swift.property.md): The set of active semantics on the frame.
- [supportsFrameSemantics:](supportsframesemantics%28__%29.md): Checks whether a particular feature is supported.
