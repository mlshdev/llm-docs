> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireisochportinterface/1569245-getrefcon](https://developer.apple.com/documentation/iokit/iofirewireisochportinterface/1569245-getrefcon)

# GetRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Get reference value associated with this port.

## Declaration

```objectivec
void *(*GetRefCon)(IOFireWireLibIsochPortRef self);
```

## Parameters

- `self`: The isoch port interface to use.

<a id="return_value"></a>

## Return Value

The port refcon value.

<a id="discussion"></a>

## Discussion

Set the reference value with SetRefCon()

## See Also

### Miscellaneous

- [AllocatePort](1569309-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetSupported](1569205-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ReleasePort](1569267-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetRefCon](1569301-setrefcon.md): Set reference value associated with this port.
- [Start](1569348-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569292-stop.md): The method is called when the port is to stop talking or listening.
