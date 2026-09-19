> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/getbaseclassid

# GetBaseClassID

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the audio class identifier of the base class object.

## Declaration

```objectivec
IOUserAudioClassID GetBaseClassID();
```

<a id="return-value"></a>

## Return Value

The audio class identifier of the base class object.

## See Also

### Getting Information About the Class

- [GetClassID](getclassid.md): Gets the audio class identifier of the object.
- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the audio object, as a pointer to a dispatch queue.
- [GetName](getname.md): Gets the name of the driver.
- [SetName](setname.md): Sets the name of the driver.
