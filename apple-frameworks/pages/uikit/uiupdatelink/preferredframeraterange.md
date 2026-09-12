> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/preferredframeraterange](https://developer.apple.com/documentation/uikit/uiupdatelink/preferredframeraterange)

# preferredFrameRateRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The range of frame rates the UI update link prefers.

## Declaration

```swift
var preferredFrameRateRange: CAFrameRateRange { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [default](../../quartzcore/caframeraterange/default.md), which doesn’t request any specific frame rate range.

## See Also

### Configuring preferences

- [requiresContinuousUpdates](requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsLowLatencyEventDispatch](wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.

# preferredFrameRateRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

The range of frame rates the UI update link prefers.

## Declaration

```objectivec
@property (nonatomic) CAFrameRateRange preferredFrameRateRange;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [CAFrameRateRangeDefault](../../quartzcore/caframeraterange/default.md), which doesn’t request any specific frame rate range.

## See Also

### Configuring preferences

- [requiresContinuousUpdates](requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsLowLatencyEventDispatch](wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
