> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1809435-releaseasyncreference64](https://developer.apple.com/documentation/kernel/iouserclient/1809435-releaseasyncreference64)

# releaseAsyncReference64

**Interface language:** Objective-C

**Framework:** Kernel

Release the mach_port_t reference held within the OSAsyncReference64 structure.

## Declaration

```objectivec
static IOReturn releaseAsyncReference64(
 OSAsyncReference64reference); 
```

## Parameters

- `reference`: The reference passed to the subclass IOAsyncMethod, or externalMethod() in the IOExternalMethodArguments.asyncReference field.

<a id="return_value"></a>

## Return Value

A return code.

<a id="overview"></a>

## Overview

The OSAsyncReference64 structure passed to async methods holds a reference to the wakeup mach port, which should be released to balance each async method call. Behavior is undefined if these calls are not correctly balanced.

## See Also

### Miscellaneous

- [exportObjectToClient](1809421-exportobjecttoclient.md)
- [releaseNotificationPort](1809442-releasenotificationport.md): Release the mach_port_t passed to registerNotificationPort().
- [removeMappingForDescriptor](1809451-removemappingfordescriptor.md)
- [sendAsyncResult64WithOptions](1809458-sendasyncresult64withoptions.md): Send a notification as with sendAsyncResult, but with finite queueing.
