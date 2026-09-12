> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/wantslowlatencyeventdispatch](https://developer.apple.com/documentation/uikit/uiupdatelink/wantslowlatencyeventdispatch)

# wantsLowLatencyEventDispatch (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.

## Declaration

```swift
var wantsLowLatencyEventDispatch: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), which means dispatch for events that are eligible for low-latency is off.

Set the value to [true](https://developer.apple.com/documentation/swift/true) to request dispatch of low-latency eligible events. Only pencil events are low-latency eligible, so this behavior is primarily useful for pencil-drawing or writing apps.

Low-latency eligible events dispatch in the middle of a UI update. This timing gives an app half the amount of time to handle them as standard events. Check the value of [completionDeadlineTime](../uiupdateinfo/completiondeadlinetime.md) for the precise completion deadline time.

> **Important**

>  If you opt in to this behavior, keep the complexity of the code you use to handle these events to a minimum. When an app requests low-latency event dispatch, but doesn’t optimize event-handling code, frames don’t submit for presentation in time. Dropped frames cause hitches and provide a suboptimal user experience. If you request dispatch of low-latency eligible events, make sure to profile your app thoroughly. For more information, read [Understanding user interface responsiveness](https://developer.apple.com/documentation/xcode/understanding-user-interface-responsiveness).

## See Also

### Configuring preferences

- [requiresContinuousUpdates](requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](preferredframeraterange.md): The range of frame rates the UI update link prefers.

# wantsLowLatencyEventDispatch (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.

## Declaration

```objectivec
@property (nonatomic) BOOL wantsLowLatencyEventDispatch;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), which means dispatch for events that are eligible for low-latency is off.

Set the value to [true](https://developer.apple.com/documentation/swift/true) to request dispatch of low-latency eligible events. Only pencil events are low-latency eligible, so this behavior is primarily useful for pencil-drawing or writing apps.

Low-latency eligible events dispatch in the middle of a UI update. This timing gives an app half the amount of time to handle them as standard events. Check the value of [completionDeadlineTime](../uiupdateinfo/completiondeadlinetime.md) for the precise completion deadline time.

> **Important**

>  If you opt in to this behavior, keep the complexity of the code you use to handle these events to a minimum. When an app requests low-latency event dispatch, but doesn’t optimize event-handling code, frames don’t submit for presentation in time. Dropped frames cause hitches and provide a suboptimal user experience. If you request dispatch of low-latency eligible events, make sure to profile your app thoroughly. For more information, read [Understanding user interface responsiveness](https://developer.apple.com/documentation/xcode/understanding-user-interface-responsiveness).

## See Also

### Configuring preferences

- [requiresContinuousUpdates](requirescontinuousupdates.md): A Boolean value that determines whether the UI update link needs continuous UI updates.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](preferredframeraterange.md): The range of frame rates the UI update link prefers.
