> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamopen(_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamopen(_:))

# CFReadStreamOpen(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a stream for reading.

## Declaration

```swift
func CFReadStreamOpen(_ stream: CFReadStream!) -> Bool
```

## Parameters

- `stream`: The stream to open.

<a id="return-value"></a>

## Return Value

`TRUE` if `stream` was successfully opened, `FALSE` otherwise. If `stream` is not in the [CFStreamStatus.notOpen](cfstreamstatus/notopen.md) state, this function returns `FALSE`.

<a id="Discussion"></a>

## Discussion

Opening a stream causes it to reserve all the system resources it requires. If the stream can open in the background without blocking, this function always returns `true`. To learn when a background open operation completes, you can either schedule the stream into a run loop with [CFReadStreamScheduleWithRunLoop(\_:\_:\_:)](cfreadstreamschedulewithrunloop%28______%29.md) and wait for the stream’s client (set with [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md)) to be notified or you can poll the stream using [CFReadStreamGetStatus(\_:)](cfreadstreamgetstatus%28__%29.md), waiting for a status of [CFStreamStatus.open](cfstreamstatus/open.md) or [CFStreamStatus.error](cfstreamstatus/error.md).

You do not need to wait until a stream has finished opening in the background before calling the [CFReadStreamRead(\_:\_:\_:)](cfreadstreamread%28______%29.md) function. The read operation will simply block until the open has completed.

## See Also

### Opening and Closing a Read Stream

- [CFReadStreamClose(\_:)](cfreadstreamclose%28__%29.md): Closes a readable stream.

# CFReadStreamOpen (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Opens a stream for reading.

## Declaration

```objectivec
extern Boolean CFReadStreamOpen(CFReadStreamRef stream);
```

## Parameters

- `stream`: The stream to open.

<a id="return-value"></a>

## Return Value

`TRUE` if `stream` was successfully opened, `FALSE` otherwise. If `stream` is not in the [kCFStreamStatusNotOpen](cfstreamstatus/notopen.md) state, this function returns `FALSE`.

<a id="Discussion"></a>

## Discussion

Opening a stream causes it to reserve all the system resources it requires. If the stream can open in the background without blocking, this function always returns `true`. To learn when a background open operation completes, you can either schedule the stream into a run loop with [CFReadStreamScheduleWithRunLoop](cfreadstreamschedulewithrunloop%28______%29.md) and wait for the stream’s client (set with [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md)) to be notified or you can poll the stream using [CFReadStreamGetStatus](cfreadstreamgetstatus%28__%29.md), waiting for a status of [kCFStreamStatusOpen](cfstreamstatus/open.md) or [kCFStreamStatusError](cfstreamstatus/error.md).

You do not need to wait until a stream has finished opening in the background before calling the [CFReadStreamRead](cfreadstreamread%28______%29.md) function. The read operation will simply block until the open has completed.

## See Also

### Opening and Closing a Read Stream

- [CFReadStreamClose](cfreadstreamclose%28__%29.md): Closes a readable stream.
