> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopactivity](https://developer.apple.com/documentation/corefoundation/cfrunloopactivity)

# CFRunLoopActivity (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Run loop activity stages in which run loop observers can be scheduled.

## Declaration

```swift
struct CFRunLoopActivity
```

<a id="overview"></a>

## Overview

The run loop stages in which an observer is scheduled are selected when the observer is created with [CFRunLoopObserverCreate(\_:\_:\_:\_:\_:\_:)](cfrunloopobservercreate%28____________%29.md).

## Topics

### Constants

- [entry](cfrunloopactivity/entry.md): The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md).
- [beforeTimers](cfrunloopactivity/beforetimers.md): Inside the event processing loop before any timers are processed.
- [beforeSources](cfrunloopactivity/beforesources.md): Inside the event processing loop before any sources are processed.
- [beforeWaiting](cfrunloopactivity/beforewaiting.md)
- [afterWaiting](cfrunloopactivity/afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [exit](cfrunloopactivity/exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun()](cfrunlooprun%28%29.md) and [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md).
- [allActivities](cfrunloopactivity/allactivities.md): A combination of all the preceding stages.

### Initializers

- [init(rawValue:)](cfrunloopactivity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# CFRunLoopActivity (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Run loop activity stages in which run loop observers can be scheduled.

## Declaration

```objectivec
enum CFRunLoopActivity : CFOptionFlags;
```

<a id="overview"></a>

## Overview

The run loop stages in which an observer is scheduled are selected when the observer is created with [CFRunLoopObserverCreate](cfrunloopobservercreate%28____________%29.md).

## Topics

### Constants

- [kCFRunLoopEntry](cfrunloopactivity/entry.md): The entrance of the run loop, before entering the event processing loop. This activity occurs once for each call to [CFRunLoopRun](cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md).
- [kCFRunLoopBeforeTimers](cfrunloopactivity/beforetimers.md): Inside the event processing loop before any timers are processed.
- [kCFRunLoopBeforeSources](cfrunloopactivity/beforesources.md): Inside the event processing loop before any sources are processed.
- [kCFRunLoopBeforeWaiting](cfrunloopactivity/beforewaiting.md)
- [kCFRunLoopAfterWaiting](cfrunloopactivity/afterwaiting.md): Inside the event processing loop after the run loop wakes up, but before processing the event that woke it up. This activity occurs only if the run loop did in fact go to sleep during the current loop.
- [kCFRunLoopExit](cfrunloopactivity/exit.md): The exit of the run loop, after exiting the event processing loop. This activity occurs once for each call to [CFRunLoopRun](cfrunlooprun%28%29.md) and [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md).
- [kCFRunLoopAllActivities](cfrunloopactivity/allactivities.md): A combination of all the preceding stages.
