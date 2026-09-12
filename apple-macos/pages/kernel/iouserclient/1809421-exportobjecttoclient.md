> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1809421-exportobjecttoclient](https://developer.apple.com/documentation/kernel/iouserclient/1809421-exportobjecttoclient)

# exportObjectToClient

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn exportObjectToClient(
 task_ttask, 
 OSObject *obj,
 io_object_t *clientObj); 
```

## Parameters

- `task`: The task.
- `obj`: The object we want to export to the client.
- `clientObj`: Returned value is the client's port name.

<a id="overview"></a>

## Overview

Make an arbitrary OSObject available to the client task.

## See Also

### Miscellaneous

- [releaseAsyncReference64](1809435-releaseasyncreference64.md): Release the mach_port_t reference held within the OSAsyncReference64 structure.
- [releaseNotificationPort](1809442-releasenotificationport.md): Release the mach_port_t passed to registerNotificationPort().
- [removeMappingForDescriptor](1809451-removemappingfordescriptor.md)
- [sendAsyncResult64WithOptions](1809458-sendasyncresult64withoptions.md): Send a notification as with sendAsyncResult, but with finite queueing.
