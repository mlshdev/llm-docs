> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline/add(_:)](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline/add(_:))

# add(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

Registers a workflow extension object as an observer for Final Cut Pro timeline changes.

## Declaration

```swift
func add(_ observer: any FCPXTimelineObserver)
```

## Parameters

- `observer`: An object to register as an observer.

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

You can choose any object in your extension to act as an observer; you typically use the extension view controller. Make sure that the observer object conforms to the [FCPXTimelineObserver](../fcpxtimelineobserver.md) protocol.

**Swift**

```swift
host.timeline?.add(self)
```

**Objective-C**

```objc
[host.timeline addTimelineObserver(NSObject<FCPXTimelineObserver>*)self];
```

Final Cut Pro notifies a registered observer of a change in the Final Cut Pro timeline through one of the [FCPXTimelineObserver](../fcpxtimelineobserver.md) protocol methods the observer implements. For example, to get notifications of changes in the current sequence, implement the [activeSequenceChanged()](../fcpxtimelineobserver/activesequencechanged%28%29.md) method. Pair each invocation of the [add(\_:)](add%28__%29.md) method with a corresponding call to [remove(\_:)](remove%28__%29.md) method.

## See Also

### Observing the Final Cut Pro Timeline

- [movePlayhead(to:)](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime()](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [remove(\_:)](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

# addTimelineObserver: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Registers a workflow extension object as an observer for Final Cut Pro timeline changes.

## Declaration

```objectivec
- (void) addTimelineObserver:(NSObject<FCPXTimelineObserver> *) observer;
```

## Parameters

- `observer`: An object to register as an observer.

## Mentioned In

- [Interacting with the Final Cut Pro Timeline](../../professional-video-applications/interacting-with-the-final-cut-pro-timeline.md)

<a id="discussion"></a>

## Discussion

You can choose any object in your extension to act as an observer; you typically use the extension view controller. Make sure that the observer object conforms to the [FCPXTimelineObserver](../fcpxtimelineobserver.md) protocol.

**Swift**

```swift
host.timeline?.add(self)
```

**Objective-C**

```objc
[host.timeline addTimelineObserver(NSObject<FCPXTimelineObserver>*)self];
```

Final Cut Pro notifies a registered observer of a change in the Final Cut Pro timeline through one of the [FCPXTimelineObserver](../fcpxtimelineobserver.md) protocol methods the observer implements. For example, to get notifications of changes in the current sequence, implement the [activeSequenceChanged](../fcpxtimelineobserver/activesequencechanged%28%29.md) method. Pair each invocation of the [addTimelineObserver:](add%28__%29.md) method with a corresponding call to [removeTimelineObserver:](remove%28__%29.md) method.

## See Also

### Observing the Final Cut Pro Timeline

- [movePlayheadTo:](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
- [removeTimelineObserver:](remove%28__%29.md): Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.
