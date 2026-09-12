> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1809176-ctl_register](https://developer.apple.com/documentation/kernel/1809176-ctl_register)

# ctl_register

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
errno_t ctl_register(struct kern_ctl_reg *userkctl, kern_ctl_ref *kctlref);
```

## Parameters

- `userkctl`: A structure defining the kernel control to be attached. The ctl_connect callback must be specified, the other callbacks are optional. If ctl_connect is set to zero, ctl_register fails with the error code EINVAL.
- `kctlref`: Upon successful return, the kctlref will contain a reference to the attached kernel control. This reference is used to unregister the kernel control. This reference will also be passed in to the callbacks each time they are called.

<a id="return_value"></a>

## Return Value

0 - Kernel control was registered. EINVAL - The registration structure was not valid. ENOMEM - There was insufficient memory. EEXIST - A controller with that id/unit is already registered.

<a id="discussion"></a>

## Discussion

Register a kernel control. This will enable clients to connect to the kernel control using a PF_SYSTEM socket.

## See Also

### control

- [ctl_deregister](1809161-ctl_deregister.md)
- [ctl_enqueuedata](1809168-ctl_enqueuedata.md)
- [ctl_enqueuembuf](1809171-ctl_enqueuembuf.md)
- [ctl_getenqueuereadable](2919907-ctl_getenqueuereadable.md)
- [ctl_getenqueuespace](1809173-ctl_getenqueuespace.md)
