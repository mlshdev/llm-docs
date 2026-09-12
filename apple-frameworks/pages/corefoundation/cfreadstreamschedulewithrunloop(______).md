> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamschedulewithrunloop(_:_:_:))

# CFReadStreamScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a stream into a run loop.

## Declaration

```swift
func CFReadStreamScheduleWithRunLoop(_ stream: CFReadStream!, _ runLoop: CFRunLoop!, _ runLoopMode: CFRunLoopMode!)
```

## Parameters

- `stream`: The stream to schedule.
- `runLoop`: The run loop with which to schedule `stream`.
- `runLoopMode`: The run loop mode of `runLoop` in which to schedule `stream`.

<a id="Discussion"></a>

## Discussion

After scheduling `stream` with a run loop, its client (set with [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md)) is notified when various events happen with the stream, such as when it finishes opening, when it has bytes available, and when an error occurs. A stream can be scheduled with multiple run loops and run loop modes. Use [CFReadStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfreadstreamunschedulefromrunloop%28______%29.md) to later remove `stream` from the run loop.

## See Also

### Scheduling a Read Stream

- [CFReadStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfreadstreamunschedulefromrunloop%28______%29.md): Removes a read stream from a given run loop.

# CFReadStreamScheduleWithRunLoop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a stream into a run loop.

## Declaration

```objectivec
extern void CFReadStreamScheduleWithRunLoop(CFReadStreamRef stream, CFRunLoopRef runLoop, CFRunLoopMode runLoopMode);
```

## Parameters

- `stream`: The stream to schedule.
- `runLoop`: The run loop with which to schedule `stream`.
- `runLoopMode`: The run loop mode of `runLoop` in which to schedule `stream`.

<a id="Discussion"></a>

## Discussion

After scheduling `stream` with a run loop, its client (set with [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md)) is notified when various events happen with the stream, such as when it finishes opening, when it has bytes available, and when an error occurs. A stream can be scheduled with multiple run loops and run loop modes. Use [CFReadStreamUnscheduleFromRunLoop](cfreadstreamunschedulefromrunloop%28______%29.md) to later remove `stream` from the run loop.

## See Also

### Scheduling a Read Stream

- [CFReadStreamUnscheduleFromRunLoop](cfreadstreamunschedulefromrunloop%28______%29.md): Removes a read stream from a given run loop.
