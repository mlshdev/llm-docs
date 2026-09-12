> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444164-fseventstreamsetdispatchqueue](https://developer.apple.com/documentation/coreservices/1444164-fseventstreamsetdispatchqueue)

# FSEventStreamSetDispatchQueue(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

Schedules the stream on the specified dispatch queue.

## Declaration

```swift
func FSEventStreamSetDispatchQueue(_ streamRef: FSEventStreamRef, _ q: dispatch_queue_t?)
```

## Parameters

- `streamRef`: A valid stream.
- `q`: The dispatch queue to use to receive events (or `NULL` to stop receiving events from the stream).

<a id="discussion"></a>

## Discussion

The caller is responsible for ensuring that the stream is scheduled on a dispatch queue and that the queue is started.

If there’s a problem scheduling the stream on the queue, an error will be returned when you try to start the stream.

To start receiving events on the stream, call [FSEventStreamStart(\_:)](1448000-fseventstreamstart.md).

To remove the stream from the queue on which it was scheduled, call [FSEventStreamSetDispatchQueue(\_:\_:)](1444164-fseventstreamsetdispatchqueue.md) with a `NULL` queue parameter or call [FSEventStreamInvalidate(\_:)](1446990-fseventstreaminvalidate.md) which does the same thing. You must eventually call [FSEventStreamInvalidate(\_:)](1446990-fseventstreaminvalidate.md) and it’s an error to call [FSEventStreamInvalidate(\_:)](1446990-fseventstreaminvalidate.md) without having the stream either scheduled on a runloop or a dispatch queue, so don’t set the dispatch queue to `NULL` before calling [FSEventStreamInvalidate(\_:)](1446990-fseventstreaminvalidate.md).

# FSEventStreamSetDispatchQueue (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

Schedules the stream on the specified dispatch queue.

## Declaration

```objectivec
void FSEventStreamSetDispatchQueue(FSEventStreamRef streamRef, dispatch_queue_t q);
```

## Parameters

- `streamRef`: A valid stream.
- `q`: The dispatch queue to use to receive events (or `NULL` to stop receiving events from the stream).

<a id="discussion"></a>

## Discussion

The caller is responsible for ensuring that the stream is scheduled on a dispatch queue and that the queue is started.

If there’s a problem scheduling the stream on the queue, an error will be returned when you try to start the stream.

To start receiving events on the stream, call [FSEventStreamStart](1448000-fseventstreamstart.md).

To remove the stream from the queue on which it was scheduled, call [FSEventStreamSetDispatchQueue](1444164-fseventstreamsetdispatchqueue.md) with a `NULL` queue parameter or call [FSEventStreamInvalidate](1446990-fseventstreaminvalidate.md) which does the same thing. You must eventually call [FSEventStreamInvalidate](1446990-fseventstreaminvalidate.md) and it’s an error to call [FSEventStreamInvalidate](1446990-fseventstreaminvalidate.md) without having the stream either scheduled on a runloop or a dispatch queue, so don’t set the dispatch queue to `NULL` before calling [FSEventStreamInvalidate](1446990-fseventstreaminvalidate.md).
