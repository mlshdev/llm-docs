> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vncoremlfeaturevalueobservation/featurename](https://developer.apple.com/documentation/vision/vncoremlfeaturevalueobservation/featurename)

# featureName (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The name used in the model description of the CoreML model that produced this observation.

## Declaration

```swift
var featureName: String { get }
```

## See Also

### Obtaining Feature Values

- [featureValue](featurevalue.md): The feature result of a [VNCoreMLRequest](../vncoremlrequest.md) that outputs neither a classification nor an image.

# featureName (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The name used in the model description of the CoreML model that produced this observation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * featureName;
```

## See Also

### Obtaining Feature Values

- [featureValue](featurevalue.md): The feature result of a [VNCoreMLRequest](../vncoremlrequest.md) that outputs neither a classification nor an image.
