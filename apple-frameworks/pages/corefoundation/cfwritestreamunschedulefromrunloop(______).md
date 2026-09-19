> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfwritestreamunschedulefromrunloop(_:_:_:)

# CFWriteStreamUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a stream from a particular run loop.

## Declaration

```swift
func CFWriteStreamUnscheduleFromRunLoop(_ stream: CFWriteStream!, _ runLoop: CFRunLoop!, _ runLoopMode: CFRunLoopMode!)
```

## Parameters

- `stream`: The stream to remove.
- `runLoop`: The run loop from which to remove `stream`.
- `runLoopMode`: The run loop mode of `runLoop` from which to remove `stream`.

## See Also

### Scheduling a Write Stream

- [CFWriteStreamScheduleWithRunLoop(\_:\_:\_:)](cfwritestreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.

# CFWriteStreamUnscheduleFromRunLoop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a stream from a particular run loop.

## Declaration

```objectivec
extern void CFWriteStreamUnscheduleFromRunLoop(CFWriteStreamRef stream, CFRunLoopRef runLoop, CFRunLoopMode runLoopMode);
```

## Parameters

- `stream`: The stream to remove.
- `runLoop`: The run loop from which to remove `stream`.
- `runLoopMode`: The run loop mode of `runLoop` from which to remove `stream`.

## See Also

### Scheduling a Write Stream

- [CFWriteStreamScheduleWithRunLoop](cfwritestreamschedulewithrunloop%28______%29.md): Schedules a stream into a run loop.
