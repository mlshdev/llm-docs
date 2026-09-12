> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1809161-ctl_deregister](https://developer.apple.com/documentation/kernel/1809161-ctl_deregister)

# ctl_deregister

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
errno_t ctl_deregister(kern_ctl_ref kctlref);
```

## Parameters

- `kctlref`: The control reference of the control to unregister.

<a id="return_value"></a>

## Return Value

0 - Kernel control was unregistered. EINVAL - The kernel control reference was invalid. EBUSY - The kernel control has clients still attached.

<a id="discussion"></a>

## Discussion

Unregister a kernel control. A kernel extension must unregister it's kernel control(s) before unloading. If a kernel control has clients attached, this call will fail.

## See Also

### control

- [ctl_enqueuedata](1809168-ctl_enqueuedata.md)
- [ctl_enqueuembuf](1809171-ctl_enqueuembuf.md)
- [ctl_getenqueuereadable](2919907-ctl_getenqueuereadable.md)
- [ctl_getenqueuespace](1809173-ctl_getenqueuespace.md)
- [ctl_register](1809176-ctl_register.md)
