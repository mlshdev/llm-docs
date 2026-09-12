> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447673-fseventstreamstop](https://developer.apple.com/documentation/coreservices/1447673-fseventstreamstop)

# FSEventStreamStop(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamStop(_ streamRef: FSEventStreamRef)
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Unregisters with the FS Events service. The client callback will not be called for this stream while it is stopped.

FSEventStreamStop() can only be called if the stream has been started, via FSEventStreamStart().

Once stopped, the stream can be restarted via FSEventStreamStart(), at which point it will resume receiving events from where it left off ("sinceWhen").

# FSEventStreamStop (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
void FSEventStreamStop(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Unregisters with the FS Events service. The client callback will not be called for this stream while it is stopped.

FSEventStreamStop() can only be called if the stream has been started, via FSEventStreamStart().

Once stopped, the stream can be restarted via FSEventStreamStart(), at which point it will resume receiving events from where it left off ("sinceWhen").
