> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vndetecttextrectanglesrequest/reportcharacterboxes

# reportCharacterBoxes (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request detects character bounding boxes.

## Declaration

```swift
var reportCharacterBoxes: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value to [true](https://developer.apple.com/documentation/swift/true) to have the detector return character bounding boxes as an array of [VNRectangleObservation](../vnrectangleobservation.md) objects.

# reportCharacterBoxes (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request detects character bounding boxes.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL reportCharacterBoxes;
```

<a id="Discussion"></a>

## Discussion

Set the value to [true](https://developer.apple.com/documentation/swift/true) to have the detector return character bounding boxes as an array of [VNRectangleObservation](../vnrectangleobservation.md) objects.
