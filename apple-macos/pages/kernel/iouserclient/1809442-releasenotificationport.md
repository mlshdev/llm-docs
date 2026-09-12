> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1809442-releasenotificationport](https://developer.apple.com/documentation/kernel/iouserclient/1809442-releasenotificationport)

# releaseNotificationPort

**Interface language:** Objective-C

**Framework:** Kernel

Release the mach_port_t passed to registerNotificationPort().

## Declaration

```objectivec
static IOReturn releaseNotificationPort(
 mach_port_treference); 
```

## Parameters

- `reference`: The mach_port_t argument previously passed to the subclass implementation of registerNotificationPort().

<a id="return_value"></a>

## Return Value

A return code.

<a id="overview"></a>

## Overview

The mach_port_t passed to the registerNotificationPort() methods should be released to balance each call to registerNotificationPort(). Behavior is undefined if these calls are not correctly balanced.

## See Also

### Miscellaneous

- [exportObjectToClient](1809421-exportobjecttoclient.md)
- [releaseAsyncReference64](1809435-releaseasyncreference64.md): Release the mach_port_t reference held within the OSAsyncReference64 structure.
- [removeMappingForDescriptor](1809451-removemappingfordescriptor.md)
- [sendAsyncResult64WithOptions](1809458-sendasyncresult64withoptions.md): Send a notification as with sendAsyncResult, but with finite queueing.
