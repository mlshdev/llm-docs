> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/trycancel()](https://developer.apple.com/documentation/metal/mtliocommandbuffer/trycancel())

# tryCancel() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Submits a request to abandon a command buffer the queue is currently running.

## Declaration

```swift
func tryCancel()
```

<a id="discussion"></a>

## Discussion

Check the command buffer’s [status](status.md) property after it completes, either after [waitUntilCompleted()](waituntilcompleted%28%29.md) or in one of your completion handlers (see [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md)).

# tryCancel (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Submits a request to abandon a command buffer the queue is currently running.

## Declaration

```objectivec
- (void) tryCancel;
```

<a id="discussion"></a>

## Discussion

Check the command buffer’s [status](status.md) property after it completes, either after [waitUntilCompleted](waituntilcompleted%28%29.md) or in one of your completion handlers (see [addCompletedHandler:](addcompletedhandler%28__%29.md)).
