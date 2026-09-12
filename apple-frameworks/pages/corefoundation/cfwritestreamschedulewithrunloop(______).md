> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamschedulewithrunloop(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamschedulewithrunloop(_:_:_:))

# CFWriteStreamScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a stream into a run loop.

## Declaration

```swift
func CFWriteStreamScheduleWithRunLoop(_ stream: CFWriteStream!, _ runLoop: CFRunLoop!, _ runLoopMode: CFRunLoopMode!)
```

## Parameters

- `stream`: The stream to schedule.
- `runLoop`: The run loop in which to schedule `stream`.
- `runLoopMode`: The run loop mode of `runLoop` in which to schedule `stream`.

<a id="Discussion"></a>

## Discussion

After scheduling `stream` into a run loop, its client (set with [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md)) is notified when various events happen with the stream, such as when it finishes opening, when it can accept new bytes, and when an error occurs. A stream can be scheduled into multiple run loops and run loop modes. Use [CFWriteStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfwritestreamunschedulefromrunloop%28______%29.md) to later remove `stream` from the run loop.

## See Also

### Scheduling a Write Stream

- [CFWriteStreamUnscheduleFromRunLoop(\_:\_:\_:)](cfwritestreamunschedulefromrunloop%28______%29.md): Removes a stream from a particular run loop.

# CFWriteStreamScheduleWithRunLoop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Schedules a stream into a run loop.

## Declaration

```objectivec
extern void CFWriteStreamScheduleWithRunLoop(CFWriteStreamRef stream, CFRunLoopRef runLoop, CFRunLoopMode runLoopMode);
```

## Parameters

- `stream`: The stream to schedule.
- `runLoop`: The run loop in which to schedule `stream`.
- `runLoopMode`: The run loop mode of `runLoop` in which to schedule `stream`.

<a id="Discussion"></a>

## Discussion

After scheduling `stream` into a run loop, its client (set with [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md)) is notified when various events happen with the stream, such as when it finishes opening, when it can accept new bytes, and when an error occurs. A stream can be scheduled into multiple run loops and run loop modes. Use [CFWriteStreamUnscheduleFromRunLoop](cfwritestreamunschedulefromrunloop%28______%29.md) to later remove `stream` from the run loop.

## See Also

### Scheduling a Write Stream

- [CFWriteStreamUnscheduleFromRunLoop](cfwritestreamunschedulefromrunloop%28______%29.md): Removes a stream from a particular run loop.
