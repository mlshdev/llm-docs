> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocontrol/getbaseclassid](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocontrol/getbaseclassid)

# GetBaseClassID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the audio class identifier of the base class object.

## Declaration

```objectivec
virtual IOUserAudioClassID GetBaseClassID();
```

<a id="return-value"></a>

## Return Value

The audio class identifier of the base class object.

<a id="Discussion"></a>

## Discussion

This method overrides the base class [IOUserAudioObject](../iouseraudioobject.md).

## See Also

### Getting Information About the Class

- [GetClassID](getclassid.md): Gets the audio class identifier of the object.
- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
