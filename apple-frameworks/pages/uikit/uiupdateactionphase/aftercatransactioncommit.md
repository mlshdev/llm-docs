> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateactionphase/aftercatransactioncommit](https://developer.apple.com/documentation/uikit/uiupdateactionphase/aftercatransactioncommit)

# afterCATransactionCommit (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs after a Core Animation transaction commit.

## Declaration

```swift
class var afterCATransactionCommit: UIUpdateActionPhase { get }
```

<a id="Discussion"></a>

## Discussion

This phase runs after [flush()](../../quartzcore/catransaction/flush%28%29.md). By default, any changes you make to the Core Animation layer tree during this phase or later appear onscreen with the next UI update instead of the current one. However, if you opt in to low-latency event dispatch with [wantsLowLatencyEventDispatch](../uiupdatelink/wantslowlatencyeventdispatch.md), any changes you make to the Core Animation layer tree before or during the [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md) phase appear onscreen with the current UI update.

> **Important**

>  Although you can send the latest Core Animation layer changes to the render server right away by calling [commit()](../../quartzcore/catransaction/commit%28%29.md) or [flush()](../../quartzcore/catransaction/flush%28%29.md) manually, doing so isn’t recommended. Calling these methods manually might send unrelated changes to the render server prematurely.

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [afterEventDispatch](aftereventdispatch.md): A phase that runs after standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [beforeCATransactionCommit](beforecatransactioncommit.md): A phase that runs before a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.

# afterCATransactionCommit (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs after a Core Animation transaction commit.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIUpdateActionPhase * afterCATransactionCommit;
```

<a id="Discussion"></a>

## Discussion

This phase runs after [flush](../../quartzcore/catransaction/flush%28%29.md). By default, any changes you make to the Core Animation layer tree during this phase or later appear onscreen with the next UI update instead of the current one. However, if you opt in to low-latency event dispatch with [wantsLowLatencyEventDispatch](../uiupdatelink/wantslowlatencyeventdispatch.md), any changes you make to the Core Animation layer tree before or during the [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md) phase appear onscreen with the current UI update.

> **Important**

>  Although you can send the latest Core Animation layer changes to the render server right away by calling [commit](../../quartzcore/catransaction/commit%28%29.md) or [flush](../../quartzcore/catransaction/flush%28%29.md) manually, doing so isn’t recommended. Calling these methods manually might send unrelated changes to the render server prematurely.

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [afterEventDispatch](aftereventdispatch.md): A phase that runs after standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [beforeCATransactionCommit](beforecatransactioncommit.md): A phase that runs before a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.
