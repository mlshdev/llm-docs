> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vncalculateimageaestheticsscoresrequest/results

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The results of the aesthetics request.

## Declaration

```swift
var results: [VNImageAestheticsScoresObservation]? { get }
```

## See Also

### Accessing the results

- [VNImageAestheticsScoresObservation](../vnimageaestheticsscoresobservation.md): An object that represents the overall score of aesthetic attributes for an image.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The results of the aesthetics request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNImageAestheticsScoresObservation *> * results;
```

## See Also

### Accessing the results

- [VNImageAestheticsScoresObservation](../vnimageaestheticsscoresobservation.md): An object that represents the overall score of aesthetic attributes for an image.
