> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireisochchannelinterface/1569360-notificationison](https://developer.apple.com/documentation/iokit/iofirewireisochchannelinterface/1569360-notificationison)

# NotificationIsOn

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
Boolean (*NotificationIsOn)(IOFireWireLibIsochChannelRef self);
```

<a id="discussion"></a>

## Discussion

Description forthcoming

## See Also

### Miscellaneous

- [AddListener](1569199-addlistener.md): Modify the transfer size of a transfer packet DCL (send or receive)
- [AllocateChannel](1569334-allocatechannel.md): Prepare all hardware to begin sending or receiving isochronous data.
- [ClientCommandIsComplete](1569206-clientcommandiscomplete.md)
- [GetRefCon](1569187-getrefcon.md): Set reference value associated with this channel.
- [ReleaseChannel](1569255-releasechannel.md): Release all hardware after stopping the isochronous channel.
- [SetChannelForceStopHandler](1569347-setchannelforcestophandler.md): Set the channel force stop handler.
- [SetRefCon](1569224-setrefcon.md): Set reference value associated with this channel.
- [SetTalker](1569194-settalker.md): Set the talker port for this channel.
- [Start](1569362-start.md): Start the channel.
- [Stop](1569251-stop.md): Stop the channel.
- [TurnOffNotification](1569241-turnoffnotification.md)
- [TurnOnNotification](1569227-turnonnotification.md)
