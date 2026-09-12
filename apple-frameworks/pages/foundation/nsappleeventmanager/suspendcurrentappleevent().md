> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/suspendcurrentappleevent()](https://developer.apple.com/documentation/foundation/nsappleeventmanager/suspendcurrentappleevent())

# suspendCurrentAppleEvent() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.

## Declaration

```swift
func suspendCurrentAppleEvent() -> NSAppleEventManager.SuspensionID?
```

<a id="Discussion"></a>

## Discussion

An Apple event is being handled on the current thread if [currentAppleEvent](currentappleevent.md) does not return `nil`. Returns zero otherwise. The suspended event is no longer the current event after this method returns.

## See Also

### Suspending and resuming Apple events

- [appleEvent(forSuspensionID:)](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [replyAppleEvent(forSuspensionID:)](replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resume(withSuspensionID:)](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID(\_:)](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [NSAppleEventManager.SuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.

# suspendCurrentAppleEvent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.

## Declaration

```objectivec
- (NSAppleEventManagerSuspensionID) suspendCurrentAppleEvent;
```

<a id="Discussion"></a>

## Discussion

An Apple event is being handled on the current thread if [currentAppleEvent](currentappleevent.md) does not return `nil`. Returns zero otherwise. The suspended event is no longer the current event after this method returns.

## See Also

### Suspending and resuming Apple events

- [appleEventForSuspensionID:](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [replyAppleEventForSuspensionID:](replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resumeWithSuspensionID:](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID:](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [NSAppleEventManagerSuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.
