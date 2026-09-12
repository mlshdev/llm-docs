> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireremoteisochportinterface/1569289-setstophandler](https://developer.apple.com/documentation/iokit/iofirewireremoteisochportinterface/1569289-setstophandler)

# SetStopHandler

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
IOFireWireLibIsochPortCallback (*SetStopHandler)(IOFireWireLibRemoteIsochPortRef self, IOFireWireLibIsochPortCallback inHandler);
```

<a id="discussion"></a>

## Discussion

Description forthcoming

## See Also

### Miscellaneous

- [AllocatePort](1569266-allocateport.md): The method is called when the port should configure its associated hardware to prepare to send or receive isochronous data on the channel number and at the speed specified.
- [GetRefCon](1569317-getrefcon.md): Get reference value associated with this port.
- [GetSupported](1569252-getsupported.md): The method is called to determine which FireWire isochronous channels and speed this port supports.
- [ReleasePort](1569201-releaseport.md): The method is called to release the hardware after the channel has been stopped.
- [SetAllocatePortHandler](1569327-setallocateporthandler.md)
- [SetGetSupportedHandler](1569273-setgetsupportedhandler.md)
- [SetRefCon](1569305-setrefcon.md): Set reference value associated with this port.
- [SetReleasePortHandler](1569272-setreleaseporthandler.md)
- [SetStartHandler](1569358-setstarthandler.md)
- [Start](1569244-start.md): The method is called when the port is to begin talking or listening.
- [Stop](1569216-stop.md): The method is called when the port is to stop talking or listening.
