> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1809451-removemappingfordescriptor](https://developer.apple.com/documentation/kernel/iouserclient/1809451-removemappingfordescriptor)

# removeMappingForDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOMemoryMap * removeMappingForDescriptor(
 IOMemoryDescriptor *memory); 
```

## Parameters

- `memory`: The memory descriptor instance previously returned by the implementation of clientMemoryForType().

<a id="return_value"></a>

## Return Value

A reference to the first IOMemoryMap instance found in the list of mappings created by IOUserClient from that passed memory descriptor is returned, or zero if none exist. The caller should release this reference.

<a id="overview"></a>

## Overview

Remove the first mapping created from the memory descriptor returned by clientMemoryForType() from IOUserClient's list of mappings. If such a mapping exists, it is retained and the reference currently held by IOUserClient is returned to the caller.

## See Also

### Miscellaneous

- [exportObjectToClient](1809421-exportobjecttoclient.md)
- [releaseAsyncReference64](1809435-releaseasyncreference64.md): Release the mach_port_t reference held within the OSAsyncReference64 structure.
- [releaseNotificationPort](1809442-releasenotificationport.md): Release the mach_port_t passed to registerNotificationPort().
- [sendAsyncResult64WithOptions](1809458-sendasyncresult64withoptions.md): Send a notification as with sendAsyncResult, but with finite queueing.
