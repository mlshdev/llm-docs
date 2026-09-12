> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/addstream](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/addstream)

# AddStream

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Adds an audio stream to the device.

## Declaration

```objectivec
kern_return_t AddStream(IOUserAudioStream *in_stream);
```

## Parameters

- `in_stream`: The stream to add to the device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If adding the stream succeeds, the stream’s reference count increments by one.

## See Also

### Working with Audio Streams

- [RemoveStream](removestream.md): Removes an audio stream from the device.
- [IOUserAudioStream](../iouseraudiostream.md): An audio object that performs I/O for an audio device.
