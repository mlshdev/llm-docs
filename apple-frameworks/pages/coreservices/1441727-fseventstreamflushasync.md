> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441727-fseventstreamflushasync](https://developer.apple.com/documentation/coreservices/1441727-fseventstreamflushasync)

# FSEventStreamFlushAsync(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamFlushAsync(_ streamRef: FSEventStreamRef) -> FSEventStreamEventId
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The largest event id of any event ever queued for this stream, otherwise zero if no events have been queued for this stream.

<a id="discussion"></a>

## Discussion

Asks the FS Events service to flush out any events that have occurred but have not yet been delivered, due to the latency parameter that was supplied when the stream was created. This flushing occurs asynchronously -- do not expect the events to have already been delivered by the time this call returns.

FSEventStreamFlushAsync() can only be called after the stream has been started, via FSEventStreamStart().

# FSEventStreamFlushAsync (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
FSEventStreamEventId FSEventStreamFlushAsync(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The largest event id of any event ever queued for this stream, otherwise zero if no events have been queued for this stream.

<a id="discussion"></a>

## Discussion

Asks the FS Events service to flush out any events that have occurred but have not yet been delivered, due to the latency parameter that was supplied when the stream was created. This flushing occurs asynchronously -- do not expect the events to have already been delivered by the time this call returns.

FSEventStreamFlushAsync() can only be called after the stream has been started, via FSEventStreamStart().
