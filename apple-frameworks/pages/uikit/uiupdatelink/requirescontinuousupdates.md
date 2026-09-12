> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/requirescontinuousupdates](https://developer.apple.com/documentation/uikit/uiupdatelink/requirescontinuousupdates)

# requiresContinuousUpdates (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link needs continuous UI updates.

## Declaration

```swift
var requiresContinuousUpdates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), which means the UI update link acts as a passive observer of UI updates. The system only calls its actions while producing a UI update in response to some kind of event, such as a gesture or layer change.

Set the value to [true](https://developer.apple.com/documentation/swift/true) to request that the system produces UI updates continuously. You might opt in to this behavior if you want your actions to run at consistent intervals regardless of other input to the system.

## See Also

### Configuring preferences

- [wantsLowLatencyEventDispatch](wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](preferredframeraterange.md): The range of frame rates the UI update link prefers.

# requiresContinuousUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that determines whether the UI update link needs continuous UI updates.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresContinuousUpdates;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), which means the UI update link acts as a passive observer of UI updates. The system only calls its actions while producing a UI update in response to some kind of event, such as a gesture or layer change.

Set the value to [true](https://developer.apple.com/documentation/swift/true) to request that the system produces UI updates continuously. You might opt in to this behavior if you want your actions to run at consistent intervals regardless of other input to the system.

## See Also

### Configuring preferences

- [wantsLowLatencyEventDispatch](wantslowlatencyeventdispatch.md): A Boolean value that determines whether the UI update link requests dispatch of low-latency eligible events.
- [wantsImmediatePresentation](wantsimmediatepresentation.md): A Boolean value that determines whether the UI update link requests immediate frame presentation.
- [preferredFrameRateRange](preferredframeraterange.md): The range of frame rates the UI update link prefers.
