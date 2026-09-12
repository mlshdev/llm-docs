> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of the audio stream class.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_driver, IOUserAudioStreamDirection in_direction, IOMemoryDescriptor *in_io_memory_descriptor);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_direction`: A `IOUserAudioStreamDirection` for the stream’s direction: input or output.
- `in_io_memory_descriptor`: A pointer to a [IOMemoryDescriptor](../../driverkit/iomemorydescriptor.md). The stream maps the descriptor’s buffer to the Host for doing audio I/O.

<a id="return-value"></a>

## Return Value

`true` if initialization succeeded; `false` otherwise.

## See Also

### Creating an Audio Stream

- [Create](create.md): Allocates and initializes an instance of the audio stream class.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
