> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodevice/removestream](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/removestream)

# RemoveStream

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Removes an audio stream from the device.

## Declaration

```objectivec
kern_return_t RemoveStream(IOUserAudioStream *in_stream);
```

## Parameters

- `in_stream`: The stream to remove from the device.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If removing the stream succeeds, the stream’s reference count decrements by one.

## See Also

### Working with Audio Streams

- [AddStream](addstream.md): Adds an audio stream to the device.
- [IOUserAudioStream](../iouseraudiostream.md): An audio object that performs I/O for an audio device.
