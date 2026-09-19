> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnimageaestheticsscoresobservation/isutility

# isUtility (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.

## Declaration

```swift
var isUtility: Bool { get }
```

## See Also

### Parsing Observation Content

- [overallScore](overallscore.md): A score which incorporates aesthetic score, failure score, and utility labels.

# isUtility (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isUtility;
```

## See Also

### Parsing Observation Content

- [overallScore](overallscore.md): A score which incorporates aesthetic score, failure score, and utility labels.
