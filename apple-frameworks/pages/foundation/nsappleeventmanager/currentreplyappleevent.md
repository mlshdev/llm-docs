> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/currentreplyappleevent](https://developer.apple.com/documentation/foundation/nsappleeventmanager/currentreplyappleevent)

# currentReplyAppleEvent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.

## Declaration

```swift
var currentReplyAppleEvent: NSAppleEventDescriptor? { get }
```

<a id="Discussion"></a>

## Discussion

An Apple event is being handled on the current thread if [currentAppleEvent](currentappleevent.md) does not return `nil`. Returns `nil` otherwise. This descriptor, including any mutations, will be returned to the sender of the current event when all handling of the event has been completed, if the sender has requested a reply. The effects of retaining the descriptor are undefined; it may be copied, but mutations of the copy are not returned to the sender of the current event.

## See Also

### Suspending and resuming Apple events

- [appleEvent(forSuspensionID:)](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [replyAppleEvent(forSuspensionID:)](replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resume(withSuspensionID:)](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID(\_:)](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent()](suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManager.SuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.

# currentReplyAppleEvent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the corresponding reply event descriptor if an Apple event is being handled on the current thread.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSAppleEventDescriptor * currentReplyAppleEvent;
```

<a id="Discussion"></a>

## Discussion

An Apple event is being handled on the current thread if [currentAppleEvent](currentappleevent.md) does not return `nil`. Returns `nil` otherwise. This descriptor, including any mutations, will be returned to the sender of the current event when all handling of the event has been completed, if the sender has requested a reply. The effects of retaining the descriptor are undefined; it may be copied, but mutations of the copy are not returned to the sender of the current event.

## See Also

### Suspending and resuming Apple events

- [appleEventForSuspensionID:](appleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the descriptor for the event whose handling was suspended.
- [currentAppleEvent](currentappleevent.md): Returns the descriptor for `currentAppleEvent` if an Apple event is being handled on the current thread.
- [replyAppleEventForSuspensionID:](replyappleevent%28forsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), returns the corresponding reply event descriptor.
- [resumeWithSuspensionID:](resume%28withsuspensionid_%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), signal that handling of the suspended event may now continue.
- [setCurrentAppleEventAndReplyEventWithSuspensionID:](setcurrentappleeventandreplyeventwithsuspensionid%28__%29.md): Given a nonzero `suspensionID` returned by an invocation of [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md), sets the values that will be returned by subsequent invocations of [currentAppleEvent](currentappleevent.md) and [currentReplyAppleEvent](currentreplyappleevent.md) to be the event whose handling was suspended and its corresponding reply event, respectively.
- [suspendCurrentAppleEvent](suspendcurrentappleevent%28%29.md): Suspends the handling of the current event and returns an ID that must be used to resume the handling of the event if an Apple event is being handled on the current thread.
- [NSAppleEventManagerSuspensionID](suspensionid.md): Identifies an Apple event whose handling has been suspended. Can be used to resume handling of the Apple event.
