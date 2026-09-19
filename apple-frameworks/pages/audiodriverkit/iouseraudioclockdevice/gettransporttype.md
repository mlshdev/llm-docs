> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/gettransporttype

# GetTransportType

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the transport type of the clock device.

## Declaration

```objectivec
IOUserAudioTransportType GetTransportType();
```

<a id="return-value"></a>

## Return Value

The clock device’s transport type.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Transport Type

- [SetTransportType](settransporttype.md): Sets the transport type of the clock device.
- [IOUserAudioTransportType](../audiodriverkit/iouseraudiotransporttype.md): The type of transport to deliver audio.
