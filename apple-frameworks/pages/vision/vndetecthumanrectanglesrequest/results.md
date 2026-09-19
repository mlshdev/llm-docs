> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vndetecthumanrectanglesrequest/results

# results (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the request to find rectangular regions that contain people in an image.

## Declaration

```swift
var results: [VNHumanObservation]? { get }
```

# results (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The results of the request to find rectangular regions that contain people in an image.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<VNHumanObservation *> * results;
```
