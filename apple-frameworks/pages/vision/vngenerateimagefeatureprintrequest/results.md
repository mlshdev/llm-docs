> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vngenerateimagefeatureprintrequest/results

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the feature print request.

## Declaration

```swift
var results: [VNFeaturePrintObservation]? { get }
```

## See Also

### Accessing the Results

- [VNFeaturePrintObservation](../vnfeatureprintobservation.md): An observation that provides the recognized feature print.

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the feature print request.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNFeaturePrintObservation *> * results;
```

## See Also

### Accessing the Results

- [VNFeaturePrintObservation](../vnfeatureprintobservation.md): An observation that provides the recognized feature print.
