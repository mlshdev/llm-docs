> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntextobservation/characterboxes](https://developer.apple.com/documentation/vision/vntextobservation/characterboxes)

# characterBoxes (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array of detected individual character bounding boxes.

## Declaration

```swift
var characterBoxes: [VNRectangleObservation]? { get }
```

<a id="Discussion"></a>

## Discussion

If the associated [VNDetectTextRectanglesRequest](../vndetecttextrectanglesrequest.md) request indicates interest in character boxes by setting the option `reportCharacterBoxes` to [true](https://developer.apple.com/documentation/swift/true), this property is non-`nil`. If no characters are found, it remains empty.

# characterBoxes (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An array of detected individual character bounding boxes.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<VNRectangleObservation *> * characterBoxes;
```

<a id="Discussion"></a>

## Discussion

If the associated [VNDetectTextRectanglesRequest](../vndetecttextrectanglesrequest.md) request indicates interest in character boxes by setting the option `reportCharacterBoxes` to [true](https://developer.apple.com/documentation/swift/true), this property is non-`nil`. If no characters are found, it remains empty.
