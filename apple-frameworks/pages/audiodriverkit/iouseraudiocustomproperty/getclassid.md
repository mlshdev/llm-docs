> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiocustomproperty/getclassid](https://developer.apple.com/documentation/audiodriverkit/iouseraudiocustomproperty/getclassid)

# GetClassID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the audio class identifier of the object.

## Declaration

```objectivec
virtual IOUserAudioClassID GetClassID();
```

<a id="return-value"></a>

## Return Value

The audio class identifier of the object.

<a id="Discussion"></a>

## Discussion

This method overrides the base class [IOUserAudioObject](../iouseraudioobject.md).

## See Also

### Getting Information About the Class

- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
