> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfreadstreamunschedulefromrunloop(_:_:_:)

# CFReadStreamUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a read stream from a given run loop.

## Declaration

```swift
func CFReadStreamUnscheduleFromRunLoop(_ stream: CFReadStream!, _ runLoop: CFRunLoop!, _ runLoopMode: CFRunLoopMode!)
```

## Parameters

- `stream`: The stream to unschedule.
- `runLoop`: The run loop from which to remove `stream`.
- `runLoopMode`: The run loop mode of `runLoop` from which to remove `stream`.

## See Also

### Scheduling a Read Stream

- [CFReadStreamScheduleWithRunLoop(\_:\_:\_:)](cfreadstreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.

# CFReadStreamUnscheduleFromRunLoop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a read stream from a given run loop.

## Declaration

```objectivec
extern void CFReadStreamUnscheduleFromRunLoop(CFReadStreamRef stream, CFRunLoopRef runLoop, CFRunLoopMode runLoopMode);
```

## Parameters

- `stream`: The stream to unschedule.
- `runLoop`: The run loop from which to remove `stream`.
- `runLoopMode`: The run loop mode of `runLoop` from which to remove `stream`.

## See Also

### Scheduling a Read Stream

- [CFReadStreamScheduleWithRunLoop](cfreadstreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
