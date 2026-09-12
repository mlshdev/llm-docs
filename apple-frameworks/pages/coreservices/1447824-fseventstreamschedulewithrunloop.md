> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447824-fseventstreamschedulewithrunloop](https://developer.apple.com/documentation/coreservices/1447824-fseventstreamschedulewithrunloop)

# FSEventStreamScheduleWithRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.5+ (deprecated in 13.0)

> Use [FSEventStreamSetDispatchQueue(\_:\_:)](1444164-fseventstreamsetdispatchqueue.md) instead.

## Declaration

```swift
func FSEventStreamScheduleWithRunLoop(_ streamRef: FSEventStreamRef, _ runLoop: CFRunLoop, _ runLoopMode: CFString)
```

## Parameters

- `streamRef`: A valid stream.
- `runLoop`: The run loop on which to schedule the stream.
- `runLoopMode`: A run loop mode on which to schedule the stream.

<a id="discussion"></a>

## Discussion

This function schedules the stream on the specified run loop, like CFRunLoopAddSource() does for a CFRunLoopSourceRef. The caller is responsible for ensuring that the stream is scheduled on at least one run loop and that at least one of the run loops on which the stream is scheduled is being run.

To start receiving events on the stream, call FSEventStreamStart().

To remove the stream from the run loops upon which it has been scheduled, call FSEventStreamUnscheduleFromRunLoop() or FSEventStreamInvalidate().

# FSEventStreamScheduleWithRunLoop (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.5+ (deprecated in 13.0)

> Use [FSEventStreamSetDispatchQueue](1444164-fseventstreamsetdispatchqueue.md) instead.

## Declaration

```objectivec
void FSEventStreamScheduleWithRunLoop(FSEventStreamRef streamRef, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `streamRef`: A valid stream.
- `runLoop`: The run loop on which to schedule the stream.
- `runLoopMode`: A run loop mode on which to schedule the stream.

<a id="discussion"></a>

## Discussion

This function schedules the stream on the specified run loop, like CFRunLoopAddSource() does for a CFRunLoopSourceRef. The caller is responsible for ensuring that the stream is scheduled on at least one run loop and that at least one of the run loops on which the stream is scheduled is being run.

To start receiving events on the stream, call FSEventStreamStart().

To remove the stream from the run loops upon which it has been scheduled, call FSEventStreamUnscheduleFromRunLoop() or FSEventStreamInvalidate().
