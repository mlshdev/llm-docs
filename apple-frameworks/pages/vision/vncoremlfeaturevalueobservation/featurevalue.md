> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vncoremlfeaturevalueobservation/featurevalue

# featureValue (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The feature result of a [VNCoreMLRequest](../vncoremlrequest.md) that outputs neither a classification nor an image.

## Declaration

```swift
@NSCopying var featureValue: MLFeatureValue { get }
```

<a id="Discussion"></a>

## Discussion

Refer to [Core ML](../../coreml.md) documentation and the model itself to learn about proper handling of the content.

## See Also

### Obtaining Feature Values

- [featureName](featurename.md): The name used in the model description of the CoreML model that produced this observation.

# featureValue (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The feature result of a [VNCoreMLRequest](../vncoremlrequest.md) that outputs neither a classification nor an image.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MLFeatureValue * featureValue;
```

<a id="Discussion"></a>

## Discussion

Refer to [Core ML](../../coreml.md) documentation and the model itself to learn about proper handling of the content.

## See Also

### Obtaining Feature Values

- [featureName](featurename.md): The name used in the model description of the CoreML model that produced this observation.
