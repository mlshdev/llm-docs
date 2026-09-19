> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1445629-fseventstreamflushsync

# FSEventStreamFlushSync(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamFlushSync(_ streamRef: FSEventStreamRef)
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Asks the FS Events service to flush out any events that have occurred but have not yet been delivered, due to the latency parameter that was supplied when the stream was created. This flushing occurs synchronously -- by the time this call returns, your callback will have been invoked for every event that had already occurred at the time you made this call.

FSEventStreamFlushSync() can only be called after the stream has been started, via FSEventStreamStart().

# FSEventStreamFlushSync (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
void FSEventStreamFlushSync(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Asks the FS Events service to flush out any events that have occurred but have not yet been delivered, due to the latency parameter that was supplied when the stream was created. This flushing occurs synchronously -- by the time this call returns, your callback will have been invoked for every event that had already occurred at the time you made this call.

FSEventStreamFlushSync() can only be called after the stream has been started, via FSEventStreamStart().
