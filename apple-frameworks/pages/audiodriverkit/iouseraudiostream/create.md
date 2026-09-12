> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiostream/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudiostream/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the audio stream class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioStream> Create(IOUserAudioDriver *in_driver, IOUserAudioStreamDirection in_direction, IOMemoryDescriptor *in_io_memory_descriptor);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_direction`: A `IOUserAudioStreamDirection` for the stream’s direction: input or output.
- `in_io_memory_descriptor`: A pointer to a [IOMemoryDescriptor](../../driverkit/iomemorydescriptor.md). The stream maps the descriptor’s buffer to the host for doing audio I/O.

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioStream](../iouseraudiostream.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioStream](../iouseraudiostream.md) to override this class’ behavior, don’t use [Create](create.md) to allocate and initialize the custom subclass.

## See Also

### Creating an Audio Stream

- [init](init.md): Initializes an instance of the audio stream class.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
