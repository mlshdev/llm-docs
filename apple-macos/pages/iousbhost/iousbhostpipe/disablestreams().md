> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/disablestreams()](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/disablestreams())

# disableStreams() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Disables streams for the pipe.

## Declaration

```swift
func disableStreams() throws
```

<a id="Discussion"></a>

## Discussion

This method changes the operational mode of the [IOUSBHostPipe](../../kernel/iousbhostpipe.md) to disable streaming endpoint transfers. Before calling this method, set all stream contexts as nonactive on the device through an out-of-band (class-defined) mechanism, in accordance with USB 3.2, 8.12.1.4. This is necessary, as the method synchronously aborts any outstanding calls on existing [IOUSBHostStream](../iousbhoststream.md) objects.

## See Also

### Managing Streams

- [enableStreams()](enablestreams%28%29.md): Enables streams for the pipe.
- [copyStream(withStreamID:)](copystream%28withstreamid_%29.md): Returns the stream for a stream ID.

# disableStreamsWithError: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Disables streams for the pipe.

## Declaration

```objectivec
- (BOOL) disableStreamsWithError:(NSError **) error;
```

## Parameters

- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method changes the operational mode of the [IOUSBHostPipe](../../kernel/iousbhostpipe.md) to disable streaming endpoint transfers. Before calling this method, set all stream contexts as nonactive on the device through an out-of-band (class-defined) mechanism, in accordance with USB 3.2, 8.12.1.4. This is necessary, as the method synchronously aborts any outstanding calls on existing [IOUSBHostStream](../iousbhoststream.md) objects.

## See Also

### Managing Streams

- [enableStreamsWithError:](enablestreams%28%29.md): Enables streams for the pipe.
- [copyStreamWithStreamID:error:](copystream%28withstreamid_%29.md): Returns the stream for a stream ID.
