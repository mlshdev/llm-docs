> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/gettransporttype](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/gettransporttype)

# GetTransportType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the transport type of the driver.

## Declaration

```objectivec
IOUserAudioTransportType GetTransportType();
```

<a id="return-value"></a>

## Return Value

The transport type of the driver.

<a id="Discussion"></a>

## Discussion

Getting the value synchronizes by using the work queue created by the object.

## See Also

### Working with Transport Type

- [SetTransportType](settransporttype.md): Set the transport type of the driver.
- [IOUserAudioTransportType](../audiodriverkit/iouseraudiotransporttype.md): The type of transport to deliver audio.
