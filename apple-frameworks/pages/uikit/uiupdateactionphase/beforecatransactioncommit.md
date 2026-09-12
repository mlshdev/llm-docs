> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateactionphase/beforecatransactioncommit](https://developer.apple.com/documentation/uikit/uiupdateactionphase/beforecatransactioncommit)

# beforeCATransactionCommit (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs before a Core Animation transaction commit.

## Declaration

```swift
class var beforeCATransactionCommit: UIUpdateActionPhase { get }
```

<a id="Discussion"></a>

## Discussion

This phase runs before [flush()](../../quartzcore/catransaction/flush%28%29.md).

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [afterEventDispatch](aftereventdispatch.md): A phase that runs after standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [afterCATransactionCommit](aftercatransactioncommit.md): A phase that runs after a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.

# beforeCATransactionCommit (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A phase that runs before a Core Animation transaction commit.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIUpdateActionPhase * beforeCATransactionCommit;
```

<a id="Discussion"></a>

## Discussion

This phase runs before [flush](../../quartzcore/catransaction/flush%28%29.md).

## See Also

### Phases

- [afterUpdateScheduled](afterupdatescheduled.md): A phase that runs after the scheduling of a UI update.
- [beforeEventDispatch](beforeeventdispatch.md): A phase that runs before standard event handlers.
- [afterEventDispatch](aftereventdispatch.md): A phase that runs after standard event handlers.
- [beforeCADisplayLinkDispatch](beforecadisplaylinkdispatch.md): A phase that runs before Core Animation display link callbacks.
- [afterCADisplayLinkDispatch](aftercadisplaylinkdispatch.md): A phase that runs after Core Animation display link callbacks.
- [afterCATransactionCommit](aftercatransactioncommit.md): A phase that runs after a Core Animation transaction commit.
- [beforeLowLatencyEventDispatch](beforelowlatencyeventdispatch.md): A phase that runs before low-latency event handlers.
- [afterLowLatencyEventDispatch](afterlowlatencyeventdispatch.md): A phase that runs after low-latency event handlers.
- [beforeLowLatencyCATransactionCommit](beforelowlatencycatransactioncommit.md): A phase that runs before a Core Animation transaction commit for a low-latency event.
- [afterLowLatencyCATransactionCommit](afterlowlatencycatransactioncommit.md): A phase that runs after a Core Animation transaction commit for a low-latency event.
- [afterUpdateComplete](afterupdatecomplete.md): A phase that runs at the end of a UI update.
