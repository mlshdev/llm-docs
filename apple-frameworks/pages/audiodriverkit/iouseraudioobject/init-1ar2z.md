> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioobject/init-1ar2z](https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/init-1ar2z)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an instance of the audio object base class.

## Declaration

```objectivec
virtual bool init(IOUserAudioDriver *in_audio_driver);
```

## Parameters

- `in_audio_driver`: The [IOUserAudioDriver](../iouseraudiodriver.md) that owns this object.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates the result of initialization: `true` if initialization succeeded, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Always pass in the [IOUserAudioDriver](../iouseraudiodriver.md). The no-arg initializer, [init](init-26qwx.md), always returns `false`.

## See Also

### Creating an Audio Object

- [init](init-26qwx.md): Initializes an empty object.
