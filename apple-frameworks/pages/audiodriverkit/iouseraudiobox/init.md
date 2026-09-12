> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of the audio box class.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_driver, bool in_is_acquirable, OSString *in_box_uid);
```

## Parameters

- `in_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.
- `in_is_acquirable`: A Boolean value that specifies if the box supports being acquired.
- `in_box_uid`: The name of the box, as an [OSString](../../driverkit/osstring.md).

<a id="return-value"></a>

## Return Value

`true` if initialization succeeded; `false` otherwise.

<a id="Discussion"></a>

## Discussion

Always pass in the [IOUserAudioDriver](../iouseraudiodriver.md) and arguments. The no-argument \`\`IOUserAudioBox/init\`\`\`()`always returns`false\`.

## See Also

### Creating an Audio Box

- [Create](create.md): Allocates and initializes an instance of the audio box class.
- [IOUserAudioDriver](../iouseraudiodriver.md): A DriverKit provider object that manages communications with an audio device.
