> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/getname](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/getname)

# GetName

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the name of the driver.

## Declaration

```objectivec
OSSharedPtr<OSString> GetName();
```

<a id="return-value"></a>

## Return Value

A `OSSharedPtr` to an [OSString](../../driverkit/osstring.md) containing the driver name.

<a id="Discussion"></a>

## Discussion

Getting the name synchronizes by using the work queue created by the object.

## See Also

### Getting Information About the Class

- [GetClassID](getclassid.md): Gets the audio class identifier of the object.
- [GetBaseClassID](getbaseclassid.md): Gets the audio class identifier of the base class object.
- [IOUserAudioClassID](../audiodriverkit/iouseraudioclassid.md): An identifier for the type of audio object.
- [GetWorkQueue](getworkqueue.md): Gets the work queue created by the audio object, as a pointer to a dispatch queue.
- [SetName](setname.md): Sets the name of the driver.
