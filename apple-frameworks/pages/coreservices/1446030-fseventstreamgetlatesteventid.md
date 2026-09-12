> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446030-fseventstreamgetlatesteventid](https://developer.apple.com/documentation/coreservices/1446030-fseventstreamgetlatesteventid)

# FSEventStreamGetLatestEventId(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamGetLatestEventId(_ streamRef: ConstFSEventStreamRef) -> FSEventStreamEventId
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The sinceWhen attribute of the stream.

<a id="discussion"></a>

## Discussion

Fetches the sinceWhen property of the stream. Upon receiving an event (and just before invoking the client's callback) this attribute is updated to the highest-numbered event ID mentioned in the event.

# FSEventStreamGetLatestEventId (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
FSEventStreamEventId FSEventStreamGetLatestEventId(ConstFSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

The sinceWhen attribute of the stream.

<a id="discussion"></a>

## Discussion

Fetches the sinceWhen property of the stream. Upon receiving an event (and just before invoking the client's callback) this attribute is updated to the highest-numbered event ID mentioned in the event.
