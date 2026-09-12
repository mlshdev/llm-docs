> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441982-fseventstreamunschedulefromrunlo](https://developer.apple.com/documentation/coreservices/1441982-fseventstreamunschedulefromrunlo)

# FSEventStreamUnscheduleFromRunLoop(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.5+ (deprecated in 13.0)

> Use [FSEventStreamSetDispatchQueue(\_:\_:)](1444164-fseventstreamsetdispatchqueue.md) instead.

## Declaration

```swift
func FSEventStreamUnscheduleFromRunLoop(_ streamRef: FSEventStreamRef, _ runLoop: CFRunLoop, _ runLoopMode: CFString)
```

## Parameters

- `streamRef`: A valid stream.
- `runLoop`: The run loop from which to unschedule the stream.
- `runLoopMode`: The run loop mode from which to unschedule the stream.

<a id="discussion"></a>

## Discussion

This function removes the stream from the specified run loop, like CFRunLoopRemoveSource() does for a CFRunLoopSourceRef.

# FSEventStreamUnscheduleFromRunLoop (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.5+ (deprecated in 13.0)

> Use [FSEventStreamSetDispatchQueue](1444164-fseventstreamsetdispatchqueue.md) instead.

## Declaration

```objectivec
void FSEventStreamUnscheduleFromRunLoop(FSEventStreamRef streamRef, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `streamRef`: A valid stream.
- `runLoop`: The run loop from which to unschedule the stream.
- `runLoopMode`: The run loop mode from which to unschedule the stream.

<a id="discussion"></a>

## Discussion

This function removes the stream from the specified run loop, like CFRunLoopRemoveSource() does for a CFRunLoopSourceRef.
