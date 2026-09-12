> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopactivity/entry](https://developer.apple.com/documentation/corefoundation/cfrunloopactivity/entry)

# entry (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](../cfrunloopruninmode%28______%29.md).

## Declaration

```swift
static var entry: CFRunLoopActivity { get }
```

## See Also

### Constants

- [beforeTimers](beforetimers.md): Inside the event processing loop before any timers are processed.
- [beforeSources](beforesources.md): Inside the event processing loop before any sources are processed.
- [beforeWaiting](beforewaiting.md)
- [afterWaiting](afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [exit](exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](../cfrunloopruninmode%28______%29.md).
- [allActivities](allactivities.md): A combination of all the preceding stages.

# kCFRunLoopEntry (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](../cfrunloopruninmode%28______%29.md).

## Declaration

```objectivec
kCFRunLoopEntry
```

## See Also

### Constants

- [kCFRunLoopBeforeTimers](beforetimers.md): Inside the event processing loop before any timers are processed.
- [kCFRunLoopBeforeSources](beforesources.md): Inside the event processing loop before any sources are processed.
- [kCFRunLoopBeforeWaiting](beforewaiting.md)
- [kCFRunLoopAfterWaiting](afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [kCFRunLoopExit](exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun](../cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](../cfrunloopruninmode%28______%29.md).
- [kCFRunLoopAllActivities](allactivities.md): A combination of all the preceding stages.
