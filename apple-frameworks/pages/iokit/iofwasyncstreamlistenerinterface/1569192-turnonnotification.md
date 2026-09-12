> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofwasyncstreamlistenerinterface/1569192-turnonnotification](https://developer.apple.com/documentation/iokit/iofwasyncstreamlistenerinterface/1569192-turnonnotification)

# TurnOnNotification

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Try to turn on packet notifications for this channel.

## Declaration

```objectivec
Boolean (*TurnOnNotification)(IOFWAsyncStreamListenerInterfaceRef self);
```

## Parameters

- `self`: The async stream interface to use.

<a id="return_value"></a>

## Return Value

Returns true upon success

## See Also

### Miscellaneous

- [ClientCommandIsComplete](1569204-clientcommandiscomplete.md): Notify the async stream object that a packet notification handler has completed.
- [GetFlags](1569264-getflags.md): get the flags of listener.
- [GetOverrunCounter](1569355-getoverruncounter.md): get overrun counter from the DCL program.
- [GetRefCon](1569191-getrefcon.md): Returns the user refCon value for this async stream interface.
- [NotificationIsOn](1569341-notificationison.md): Is notification on?
- [SetFlags](1569319-setflags.md): set flags for the listener.
- [SetListenerHandler](1569284-setlistenerhandler.md): Set the callback that should be called to handle incoming async stream packets
- [SetSkippedPacketHandler](1569256-setskippedpackethandler.md): Set the callback that should be called when incoming packets are dropped by the address space.
- [TurnOffNotification](1569306-turnoffnotification.md): Force packet notification off.
