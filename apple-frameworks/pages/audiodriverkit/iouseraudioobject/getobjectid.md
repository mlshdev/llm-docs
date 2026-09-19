> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/getobjectid

# GetObjectID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the object’s identifier.

## Declaration

```objectivec
IOUserAudioObjectID GetObjectID();
```

<a id="return-value"></a>

## Return Value

The object’s `IOUserAudioObjectID`.

<a id="Discussion"></a>

## Discussion

Use this identifier when looking up a driver’s objects with [GetAudioObjectForObjectID](../iouseraudiodriver/getaudioobjectforobjectid.md).

## See Also

### Getting Information About the Class

- [GetClassID](getclassid.md): Gets the audio class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the audio class identifier of the base class object.
- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
- [IOUserAudioObjectID](../audiodriverkit/iouseraudioobjectid.md): An identifier that provides a handle on a specific audio object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the audio object, as a pointer to a dispatch queue.
