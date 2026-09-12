> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsimplequeuegetfullness](https://developer.apple.com/documentation/coremedia/cmsimplequeuegetfullness)

# CMSimpleQueueGetFullness

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A convenience macro that returns a queue’s fullness as a percentage of its capacity.

## Declaration

```objectivec
#define CMSimpleQueueGetFullness(queue)
```

<a id="return-value"></a>

## Return Value

\- Returns `0.0` if the queue is empty.

<a id="overview"></a>

## Overview

- Returns `0.5` if the queue is half full.
- Returns `1.0` if the queue is full.
- Returns `0.0` if there is an error (for example, if the queue is `NULL`).

## See Also

### Inspecting Queues

- [CMSimpleQueueGetHead](cmsimplequeuegethead%28__%29.md): Returns the element at the head of the queue.
- [CMSimpleQueueGetCapacity](cmsimplequeuegetcapacity%28__%29.md): Returns the number of elements that the queue can hold.
- [CMSimpleQueueGetCount](cmsimplequeuegetcount%28__%29.md): Returns the number of elements currently in the queue.
