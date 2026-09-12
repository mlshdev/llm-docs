> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/copystream(withstreamid:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/copystream(withstreamid:))

# copyStream(withStreamID:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Returns the stream for a stream ID.

## Declaration

```swift
func copyStream(withStreamID streamID: Int) throws -> IOUSBHostStream
```

## Parameters

- `streamID`: A stream ID in the range of 1 to *n*. Retrieve *n* can by calling [IOUSBGetEndpointMaxStreams(\_:\_:\_:)](../iousbgetendpointmaxstreams%28______%29.md) with the [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/iokit/iousbendpointdescriptor).

<a id="return-value"></a>

## Return Value

A pointer to an [IOUSBHostStream](../iousbhoststream.md); otherwise, `nil` if the device or the underlying host controller doesn’t support the specified stream ID.

<a id="Discussion"></a>

## Discussion

Call [enableStreams()](enablestreams%28%29.md) before this method.

## See Also

### Managing Streams

- [enableStreams()](enablestreams%28%29.md): Enables streams for the pipe.
- [disableStreams()](disablestreams%28%29.md): Disables streams for the pipe.

# copyStreamWithStreamID:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Returns the stream for a stream ID.

## Declaration

```objectivec
- (IOUSBHostStream *) copyStreamWithStreamID:(NSUInteger) streamID error:(NSError **) error;
```

## Parameters

- `streamID`: A stream ID in the range of 1 to *n*. Retrieve *n* can by calling [IOUSBGetEndpointMaxStreams](../iousbgetendpointmaxstreams%28______%29.md) with the [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/iokit/iousbendpointdescriptor).
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

A pointer to an [IOUSBHostStream](../iousbhoststream.md); otherwise, `nil` if the device or the underlying host controller doesn’t support the specified stream ID.

<a id="Discussion"></a>

## Discussion

Call [enableStreamsWithError:](enablestreams%28%29.md) before this method.

## See Also

### Managing Streams

- [enableStreamsWithError:](enablestreams%28%29.md): Enables streams for the pipe.
- [disableStreamsWithError:](disablestreams%28%29.md): Disables streams for the pipe.
