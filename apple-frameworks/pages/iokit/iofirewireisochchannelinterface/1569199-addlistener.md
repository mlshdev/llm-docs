> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireisochchannelinterface/1569199-addlistener](https://developer.apple.com/documentation/iokit/iofirewireisochchannelinterface/1569199-addlistener)

# AddListener

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Modify the transfer size of a transfer packet DCL (send or receive)

## Declaration

```objectivec
IOReturn (*AddListener)(IOFireWireLibIsochChannelRef self, IOFireWireLibIsochPortRef listener);
```

## Parameters

- `self`: The isoch channel interface to use.
- `listener`: The listener to add.

<a id="return_value"></a>

## Return Value

Returns an IOReturn error code.

<a id="discussion"></a>

## Discussion

Allows you to modify transfer packet DCLs after they have been compiled and while the DCL program is still running. The transfer size can be set to any size less than or equal to the size set when the DCL program was compiled (including 0).

Availability: IOFireWireLocalIsochPortInterface_v3 and newer.

## See Also

### Miscellaneous

- [AllocateChannel](1569334-allocatechannel.md): Prepare all hardware to begin sending or receiving isochronous data.
- [ClientCommandIsComplete](1569206-clientcommandiscomplete.md)
- [GetRefCon](1569187-getrefcon.md): Set reference value associated with this channel.
- [NotificationIsOn](1569360-notificationison.md)
- [ReleaseChannel](1569255-releasechannel.md): Release all hardware after stopping the isochronous channel.
- [SetChannelForceStopHandler](1569347-setchannelforcestophandler.md): Set the channel force stop handler.
- [SetRefCon](1569224-setrefcon.md): Set reference value associated with this channel.
- [SetTalker](1569194-settalker.md): Set the talker port for this channel.
- [Start](1569362-start.md): Start the channel.
- [Stop](1569251-stop.md): Stop the channel.
- [TurnOffNotification](1569241-turnoffnotification.md)
- [TurnOnNotification](1569227-turnonnotification.md)
