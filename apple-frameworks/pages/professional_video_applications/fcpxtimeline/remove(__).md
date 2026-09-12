> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fcpxtimeline/remove(_:)](https://developer.apple.com/documentation/professional_video_applications/fcpxtimeline/remove(_:))

# remove(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Workflow Extensions 1.0+

Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

## Declaration

```swift
func remove(_ observer: any FCPXTimelineObserver)
```

## Parameters

- `observer`: The object to remove as an observer.

<a id="discussion"></a>

## Discussion

Once this method is invoked, the observer no longer gets notified of further Final Cut Pro timeline changes.

You must use this method to cancel an observer added using the [add(\_:)](add%28__%29.md) method.

**Swift**

```swift
host.timeline?.remove(self)
```

**Objective-C**

```objc
[host.timeline removeTimelineObserver(id<FCPXTimelineObserver>)self];

```

## See Also

### Observing the Final Cut Pro Timeline

- [add(\_:)](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayhead(to:)](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime()](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.

# removeTimelineObserver: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Stops an observer object from receiving notifications for changes in the Final Cut Pro timeline.

## Declaration

```objectivec
- (void) removeTimelineObserver:(NSObject<FCPXTimelineObserver> *) observer;
```

## Parameters

- `observer`: The object to remove as an observer.

<a id="discussion"></a>

## Discussion

Once this method is invoked, the observer no longer gets notified of further Final Cut Pro timeline changes.

You must use this method to cancel an observer added using the [addTimelineObserver:](add%28__%29.md) method.

**Swift**

```swift
host.timeline?.remove(self)
```

**Objective-C**

```objc
[host.timeline removeTimelineObserver(id<FCPXTimelineObserver>)self];

```

## See Also

### Observing the Final Cut Pro Timeline

- [addTimelineObserver:](add%28__%29.md): Registers a workflow extension object as an observer for Final Cut Pro timeline changes.
- [movePlayheadTo:](moveplayhead%28to_%29.md): Sets the Final Cut Pro timeline playhead to a specified time.
- [playheadTime](playheadtime%28%29.md): Returns the current playhead position in the Final Cut Pro timeline.
