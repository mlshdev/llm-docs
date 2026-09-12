> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamopen(_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamopen(_:))

# CFWriteStreamOpen(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a stream for writing.

## Declaration

```swift
func CFWriteStreamOpen(_ stream: CFWriteStream!) -> Bool
```

## Parameters

- `stream`: The stream to open.

<a id="return-value"></a>

## Return Value

`true` if `stream` was successfully opened, `false` otherwise. If `stream` is not in the [CFStreamStatus.notOpen](cfstreamstatus/notopen.md) state, this function returns `false`.

<a id="Discussion"></a>

## Discussion

Opening a stream causes it to reserve all the system resources it requires. If the stream can open in the background without blocking, this function always returns `true`. To learn when a background open operation completes, you can either schedule the stream into a run loop with [CFWriteStreamScheduleWithRunLoop(\_:\_:\_:)](cfwritestreamschedulewithrunloop%28______%29.md) and wait for the stream’s client (set with [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md)) to be notified or you can poll the stream using [CFWriteStreamGetStatus(\_:)](cfwritestreamgetstatus%28__%29.md), waiting for a status of [CFStreamStatus.open](cfstreamstatus/open.md) or [CFStreamStatus.error](cfstreamstatus/error.md).

## See Also

### Opening and Closing a Stream

- [CFWriteStreamClose(\_:)](cfwritestreamclose%28__%29.md): Closes a writable stream.

# CFWriteStreamOpen (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a stream for writing.

## Declaration

```objectivec
extern Boolean CFWriteStreamOpen(CFWriteStreamRef stream);
```

## Parameters

- `stream`: The stream to open.

<a id="return-value"></a>

## Return Value

`true` if `stream` was successfully opened, `false` otherwise. If `stream` is not in the [kCFStreamStatusNotOpen](cfstreamstatus/notopen.md) state, this function returns `false`.

<a id="Discussion"></a>

## Discussion

Opening a stream causes it to reserve all the system resources it requires. If the stream can open in the background without blocking, this function always returns `true`. To learn when a background open operation completes, you can either schedule the stream into a run loop with [CFWriteStreamScheduleWithRunLoop](cfwritestreamschedulewithrunloop%28______%29.md) and wait for the stream’s client (set with [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md)) to be notified or you can poll the stream using [CFWriteStreamGetStatus](cfwritestreamgetstatus%28__%29.md), waiting for a status of [kCFStreamStatusOpen](cfstreamstatus/open.md) or [kCFStreamStatusError](cfstreamstatus/error.md).

## See Also

### Opening and Closing a Stream

- [CFWriteStreamClose](cfwritestreamclose%28__%29.md): Closes a writable stream.
