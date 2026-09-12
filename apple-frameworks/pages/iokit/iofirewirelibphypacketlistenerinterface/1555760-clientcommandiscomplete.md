> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibphypacketlistenerinterface/1555760-clientcommandiscomplete](https://developer.apple.com/documentation/iokit/iofirewirelibphypacketlistenerinterface/1555760-clientcommandiscomplete)

# ClientCommandIsComplete

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Notify the PHY packet listener object that a packet notification handler has completed.

## Declaration

```objectivec
void (*ClientCommandIsComplete)(IOFireWireLibPHYPacketListenerRef self, FWClientCommandID commandID);
```

## Parameters

- `self`: The PHY packet listener object.
- `commandID`: The ID of the packet notification being completed. This is the same ID that was passed when a packet notification handler is called.

<a id="discussion"></a>

## Discussion

Packet notifications are received one at a time, in order. This function must be called after a packet handler has completed its work.

## See Also

### Miscellaneous

- [GetFlags](1555866-getflags.md): get the flags of listener.
- [GetRefCon](1555627-getrefcon.md): Returns the user refCon value for thisinterface.
- [NotificationIsOn](1556004-notificationison.md): Is notification on?
- [SetFlags](1556083-setflags.md): set flags for the listener.
- [SetListenerCallback](1556119-setlistenercallback.md): Set the callback that should be called to handle incoming phy packets
- [SetRefCon](1555962-setrefcon.md): Sets the user refCon value for this interface.
- [SetSkippedPacketCallback](1555813-setskippedpacketcallback.md): Set the callback that should be called when incoming phy packets are dropped by the listener space.
- [TurnOffNotification](1555738-turnoffnotification.md): Turn packet notification off.
- [TurnOnNotification](1555787-turnonnotification.md): Try to turn on packet notifications for this listener.
