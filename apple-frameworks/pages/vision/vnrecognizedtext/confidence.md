> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedtext/confidence](https://developer.apple.com/documentation/vision/vnrecognizedtext/confidence)

# confidence (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A normalized confidence score for the text recognition result.

## Declaration

```swift
var confidence: VNConfidence { get }
```

<a id="Discussion"></a>

## Discussion

The confidence level is a normalized value between `0.0` and `1.0`, where `1.0` represents the highest confidence.

## See Also

### Determining Recognized Text

- [string](string.md): The top candidate for recognized text.

# confidence (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A normalized confidence score for the text recognition result.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) VNConfidence confidence;
```

<a id="Discussion"></a>

## Discussion

The confidence level is a normalized value between `0.0` and `1.0`, where `1.0` represents the highest confidence.

## See Also

### Determining Recognized Text

- [string](string.md): The top candidate for recognized text.
