> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibphypacketlistenerinterface/1555866-getflags](https://developer.apple.com/documentation/iokit/iofirewirelibphypacketlistenerinterface/1555866-getflags)

# GetFlags

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

get the flags of listener.

## Declaration

```objectivec
UInt32 (*GetFlags)(IOFireWireLibPHYPacketListenerRef self);
```

## Parameters

- `self`: The PHY packet listener object.

<a id="return_value"></a>

## Return Value

flags No current flags are defined.

## See Also

### Miscellaneous

- [ClientCommandIsComplete](1555760-clientcommandiscomplete.md): Notify the PHY packet listener object that a packet notification handler has completed.
- [GetRefCon](1555627-getrefcon.md): Returns the user refCon value for thisinterface.
- [NotificationIsOn](1556004-notificationison.md): Is notification on?
- [SetFlags](1556083-setflags.md): set flags for the listener.
- [SetListenerCallback](1556119-setlistenercallback.md): Set the callback that should be called to handle incoming phy packets
- [SetRefCon](1555962-setrefcon.md): Sets the user refCon value for this interface.
- [SetSkippedPacketCallback](1555813-setskippedpacketcallback.md): Set the callback that should be called when incoming phy packets are dropped by the listener space.
- [TurnOffNotification](1555738-turnoffnotification.md): Turn packet notification off.
- [TurnOnNotification](1555787-turnonnotification.md): Try to turn on packet notifications for this listener.
