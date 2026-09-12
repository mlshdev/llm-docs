> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioobject/getworkqueue](https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/getworkqueue)

# GetWorkQueue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the work queue created by the audio object, as a pointer to a dispatch queue.

## Declaration

```objectivec
OSSharedPtr<IODispatchQueue> GetWorkQueue();
```

<a id="return-value"></a>

## Return Value

The work queue created by the audio object.

<a id="Discussion"></a>

## Discussion

The work queue synchronizes access to the driver’s state. Setters and getters for the object do their work on the work queue.

## See Also

### Getting Information About the Class

- [GetClassID](getclassid.md): Gets the audio class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the audio class identifier of the base class object.
- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
- [GetObjectID](getobjectid.md): Gets the object’s identifier.
- [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md): An identifier that provides a handle on a specific audio object.
