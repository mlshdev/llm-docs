> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateactionphase/aftereventdispatch](https://developer.apple.com/documentation/uikit/uiupdateactionphase/aftereventdispatch)

# afterEventDispatch (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs after standard event handlers.

## Declaration

```swift
class var afterEventDispatch: UIUpdateActionPhase { get }
```

<a id="Discussion"></a>

## Discussion

This phase runs after [UIEvent](../uievent.md) and [UIGestureRecognizer](../uigesturerecognizer.md) handlers run for standard events. After that point, the app doesn’t receive new user input events. However, if you request low-latency event dispatch using [wantsLowLatencyEventDispatch](../uiupdatelink/wantslowlatencyeventdispatch.md), more events might dispatch in the low-latency event dispatch phase.

Use this phase to perform tasks after processing all user input events for the UI update, like starting a parallel rendering thread.

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [beforeCATransactionCommit](beforecatransactioncommit.md): A phase that runs before a Core Animation transaction commit.
- [afterCATransactionCommit](aftercatransactioncommit.md): A phase that runs after a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.

# afterEventDispatch (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs after standard event handlers.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIUpdateActionPhase * afterEventDispatch;
```

<a id="Discussion"></a>

## Discussion

This phase runs after [UIEvent](../uievent.md) and [UIGestureRecognizer](../uigesturerecognizer.md) handlers run for standard events. After that point, the app doesn’t receive new user input events. However, if you request low-latency event dispatch using [wantsLowLatencyEventDispatch](../uiupdatelink/wantslowlatencyeventdispatch.md), more events might dispatch in the low-latency event dispatch phase.

Use this phase to perform tasks after processing all user input events for the UI update, like starting a parallel rendering thread.

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [beforeCATransactionCommit](beforecatransactioncommit.md): A phase that runs before a Core Animation transaction commit.
- [afterCATransactionCommit](aftercatransactioncommit.md): A phase that runs after a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.
