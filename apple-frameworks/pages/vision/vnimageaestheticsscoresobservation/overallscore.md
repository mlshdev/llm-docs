> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnimageaestheticsscoresobservation/overallscore

# overallScore (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A score which incorporates aesthetic score, failure score, and utility labels.

## Declaration

```swift
var overallScore: Float { get }
```

<a id="discussion"></a>

## Discussion

This returns a value within the range of `-1` and `1`, where `-1` is least desirable and `1` is most desirable.

## See Also

### Parsing Observation Content

- [isUtility](isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.

# overallScore (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A score which incorporates aesthetic score, failure score, and utility labels.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) float overallScore;
```

<a id="discussion"></a>

## Discussion

This returns a value within the range of `-1` and `1`, where `-1` is least desirable and `1` is most desirable.

## See Also

### Parsing Observation Content

- [isUtility](isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.
