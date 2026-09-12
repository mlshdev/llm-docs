> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1809458-sendasyncresult64withoptions](https://developer.apple.com/documentation/kernel/iouserclient/1809458-sendasyncresult64withoptions)

# sendAsyncResult64WithOptions

**Interface language:** Objective-C

**Framework:** Kernel

Send a notification as with sendAsyncResult, but with finite queueing.

## Declaration

```objectivec
static IOReturn sendAsyncResult64WithOptions(
 OSAsyncReference64 reference, 
 IOReturn result,
 io_user_reference_t args[],
 UInt32 numArgs, 
 IOOptionBits options); 
```

<a id="overview"></a>

## Overview

IOUserClient::sendAsyncResult64() will infitely queue messages if the client is not processing them in a timely fashion. This variant will not, for simple handling of situations where clients may be expected to stop processing messages.

## See Also

### Miscellaneous

- [exportObjectToClient](1809421-exportobjecttoclient.md)
- [releaseAsyncReference64](1809435-releaseasyncreference64.md): Release the mach_port_t reference held within the OSAsyncReference64 structure.
- [releaseNotificationPort](1809442-releasenotificationport.md): Release the mach_port_t passed to registerNotificationPort().
- [removeMappingForDescriptor](1809451-removemappingfordescriptor.md)
