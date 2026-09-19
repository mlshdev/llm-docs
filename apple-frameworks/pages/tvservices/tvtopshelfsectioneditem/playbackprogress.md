> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvservices/tvtopshelfsectioneditem/playbackprogress

# playbackProgress (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The percentage of the content that the user has already played, specified as a value between 0.0 and 1.0.

## Declaration

```swift
var playbackProgress: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify how much of the content the user has already played. The value you specify must be in the range 0.0 to 1.0. If you specify numbers outside of that range, the system clamps them to the minimum or maximum values.

# playbackProgress (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The percentage of the content that the user has already played, specified as a value between 0.0 and 1.0.

## Declaration

```objectivec
@property (nonatomic) double playbackProgress;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify how much of the content the user has already played. The value you specify must be in the range 0.0 to 1.0. If you specify numbers outside of that range, the system clamps them to the minimum or maximum values.
