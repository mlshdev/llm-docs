> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/replyappleevent(forsuspensionid:)](https://developer.apple.com/documentation/foundation/nsappleeventmanager/replyappleevent(forsuspensionid:))

# replyAppleEvent(forSuspensionID:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.

## Declaration

```swift
func replyAppleEvent(forSuspensionID suspensionID: NSAppleEventManager.SuspensionID) -> NSAppleEventDescriptor
```

<a id="Discussion"></a>

## Discussion

This descriptor, including any mutations, will be returned to the sender of the suspended event when handling of the event is resumed, if the sender has requested a reply. The effects of retaining the descriptor are undefined; it may be copied, but mutations of the copy are returned to the sender of the suspended event. [replyAppleEvent(forSuspensionID:)](replyappleevent%28forsuspensionid_%29.md) may be invoked in any thread, not just the one in which the corresponding invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md) occurred.

## See Also

### Suspending and resuming Apple events

- [appleEvent(forSuspensionID:)](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [resume(withSuspensionID:)](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID(\_:)](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManager.SuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.

# replyAppleEventForSuspensionID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.

## Declaration

```objectivec
- (NSAppleEventDescriptor *) replyAppleEventForSuspensionID:(NSAppleEventManagerSuspensionID) suspensionID;
```

<a id="Discussion"></a>

## Discussion

This descriptor, including any mutations, will be returned to the sender of the suspended event when handling of the event is resumed, if the sender has requested a reply. The effects of retaining the descriptor are undefined; it may be copied, but mutations of the copy are returned to the sender of the suspended event. [replyAppleEventForSuspensionID:](replyappleevent%28forsuspensionid_%29.md) may be invoked in any thread, not just the one in which the corresponding invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md) occurred.

## See Also

### Suspending and resuming Apple events

- [appleEventForSuspensionID:](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [currentReplyAppleEvent](currentreplyappleevent.md): Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.
- [resumeWithSuspensionID:](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID:](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManagerSuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.
