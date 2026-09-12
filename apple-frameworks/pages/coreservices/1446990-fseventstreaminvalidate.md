> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446990-fseventstreaminvalidate](https://developer.apple.com/documentation/coreservices/1446990-fseventstreaminvalidate)

# FSEventStreamInvalidate(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamInvalidate(_ streamRef: FSEventStreamRef)
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Invalidates the stream, like CFRunLoopSourceInvalidate() does for a CFRunLoopSourceRef. It will be unscheduled from any runloops or dispatch queues upon which it had been scheduled.

FSEventStreamInvalidate() can only be called on the stream after you have called FSEventStreamScheduleWithRunLoop() or FSEventStreamSetDispatchQueue().

# FSEventStreamInvalidate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
void FSEventStreamInvalidate(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Invalidates the stream, like CFRunLoopSourceInvalidate() does for a CFRunLoopSourceRef. It will be unscheduled from any runloops or dispatch queues upon which it had been scheduled.

FSEventStreamInvalidate() can only be called on the stream after you have called FSEventStreamScheduleWithRunLoop() or FSEventStreamSetDispatchQueue().
