> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/create](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/create)

# Create

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 21.0+

Allocates and initializes an instance of the audio box class.

## Declaration

```objectivec
static OSSharedPtr<IOUserAudioBox> Create(IOUserAudioDriver *in_driver, bool in_is_acquirable, OSString *in_box_uid);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_acquirable`: A Boolean value that specifies if the box supports being acquired.
- `in_box_uid`: The name of the box, as an [OSString](../../driverkit/osstring.md).

<a id="return-value"></a>

## Return Value

A poiner to an [IOUserAudioBox](../iouseraudiobox.md), if allocation and initialization succeeded.

<a id="Discussion"></a>

## Discussion

If you subclass [IOUserAudioBox](../iouseraudiobox.md) to override this class’ behavior, don’t use [Create](create.md) to allocate and initialize the custom subclass.

## See Also

### Creating an Audio Box

- [init](init.md): Initializes an instance of the audio box class.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
