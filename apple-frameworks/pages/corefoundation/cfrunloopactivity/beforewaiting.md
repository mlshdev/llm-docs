> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopactivity/beforewaiting](https://developer.apple.com/documentation/corefoundation/cfrunloopactivity/beforewaiting)

# beforeWaiting (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
static var beforeWaiting: CFRunLoopActivity { get }
```

<a id="Discussion"></a>

## Discussion

Inside the event processing loop before the run loop sleeps, waiting for a source or timer to fire. This activity does not occur if [CFRunLoopRunInMode(\_:\_:\_:)](../cfrunloopruninmode%28______%29.md) is called with a timeout of 0 seconds. It also does not occur in a particular iteration of the event processing loop if a version 0 source fires.

## See Also

### Constants

- [entry](entry.md): The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](../cfrunloopruninmode%28______%29.md).
- [beforeTimers](beforetimers.md): Inside the event processing loop before any timers are processed.
- [beforeSources](beforesources.md): Inside the event processing loop before any sources are processed.
- [afterWaiting](afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [exit](exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](../cfrunloopruninmode%28______%29.md).
- [allActivities](allactivities.md): A combination of all the preceding stages.

# kCFRunLoopBeforeWaiting (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCFRunLoopBeforeWaiting
```

<a id="Discussion"></a>

## Discussion

Inside the event processing loop before the run loop sleeps, waiting for a source or timer to fire. This activity does not occur if [CFRunLoopRunInMode](../cfrunloopruninmode%28______%29.md) is called with a timeout of 0 seconds. It also does not occur in a particular iteration of the event processing loop if a version 0 source fires.

## See Also

### Constants

- [kCFRunLoopEntry](entry.md): The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](../cfrunloopruninmode%28______%29.md).
- [kCFRunLoopBeforeTimers](beforetimers.md): Inside the event processing loop before any timers are processed.
- [kCFRunLoopBeforeSources](beforesources.md): Inside the event processing loop before any sources are processed.
- [kCFRunLoopAfterWaiting](afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [kCFRunLoopExit](exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](../cfrunloopruninmode%28______%29.md).
- [kCFRunLoopAllActivities](allactivities.md): A combination of all the preceding stages.
