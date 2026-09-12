> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/enablestreams()](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/enablestreams())

# enableStreams() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enables streams for the pipe.

## Declaration

```swift
func enableStreams() throws
```

<a id="Discussion"></a>

## Discussion

This method changes the operational mode of the pipe to allow streaming endpoint transfers. Call this method before [copyStream(withStreamID:)](copystream%28withstreamid_%29.md).

## See Also

### Managing Streams

- [copyStream(withStreamID:)](copystream%28withstreamid_%29.md): Returns the stream for a stream ID.
- [disableStreams()](disablestreams%28%29.md): Disables streams for the pipe.

# enableStreamsWithError: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Enables streams for the pipe.

## Declaration

```objectivec
- (BOOL) enableStreamsWithError:(NSError **) error;
```

## Parameters

- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This method changes the operational mode of the pipe to allow streaming endpoint transfers. Call this method before [copyStreamWithStreamID:error:](copystream%28withstreamid_%29.md).

## See Also

### Managing Streams

- [copyStreamWithStreamID:error:](copystream%28withstreamid_%29.md): Returns the stream for a stream ID.
- [disableStreamsWithError:](disablestreams%28%29.md): Disables streams for the pipe.
