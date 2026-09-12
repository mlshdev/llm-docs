> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarks/confidence](https://developer.apple.com/documentation/vision/vnfacelandmarks/confidence)

# confidence (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A confidence estimate for the detected landmarks.

## Declaration

```swift
var confidence: VNConfidence { get }
```

<a id="Discussion"></a>

## Discussion

A value of `0` indicates no confidence. A value of `1` indicates full confidence.

# confidence (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A confidence estimate for the detected landmarks.

## Declaration

```objectivec
@property (readonly) VNConfidence confidence;
```

<a id="Discussion"></a>

## Discussion

A value of `0` indicates no confidence. A value of `1` indicates full confidence.
