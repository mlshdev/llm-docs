> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirepseudoaddressspaceinterface/1555901-turnoffnotification](https://developer.apple.com/documentation/iokit/iofirewirepseudoaddressspaceinterface/1555901-turnoffnotification)

# TurnOffNotification

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Force packet notification off.

## Declaration

```objectivec
void (*TurnOffNotification)(IOFireWireLibPseudoAddressSpaceRef self);
```

## Parameters

- `self`: The pseudo address interface to use.

## See Also

### Miscellaneous

- [ClientCommandIsComplete](1555641-clientcommandiscomplete.md): Notify the address space that a packet notification handler has completed.
- [GetBuffer](1556020-getbuffer.md): Get a pointer to the backing store for this address space
- [GetBufferSize](1555796-getbuffersize.md): Get the size in bytes of this address space.
- [GetFWAddress](1555588-getfwaddress.md): Get the FireWire address of this address space
- [GetRefCon](1555864-getrefcon.md): Returns the user refCon value for this address space.
- [NotificationIsOn](1555698-notificationison.md): Is notification on?
- [SetReadHandler](1555833-setreadhandler.md): Set the callback that should be called to handle read accesses to the corresponding address space
- [SetSkippedPacketHandler](1555589-setskippedpackethandler.md): Set the callback that should be called when incoming packets are dropped by the address space.
- [SetWriteHandler](1555939-setwritehandler.md): Set the callback that should be called to handle write accesses to the corresponding address space
- [TurnOnNotification](1556072-turnonnotification.md): Try to turn on packet notifications for this address space.
