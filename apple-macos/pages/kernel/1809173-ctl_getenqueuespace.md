> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1809173-ctl_getenqueuespace](https://developer.apple.com/documentation/kernel/1809173-ctl_getenqueuespace)

# ctl_getenqueuespace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
errno_t ctl_getenqueuespace(kern_ctl_ref kctlref, u_int32_t unit, size_t *space);
```

## Parameters

- `kctlref`: The control reference of the kernel control.
- `unit`: The unit number of the kernel control instance.
- `space`: The address where to return the current space available

<a id="return_value"></a>

## Return Value

0 - Success; the amount of space is returned to caller. EINVAL - Invalid parameters.

<a id="discussion"></a>

## Discussion

Retrieve the amount of space currently available for data to be sent from the kernel control to the client.

## See Also

### control

- [ctl_deregister](1809161-ctl_deregister.md)
- [ctl_enqueuedata](1809168-ctl_enqueuedata.md)
- [ctl_enqueuembuf](1809171-ctl_enqueuembuf.md)
- [ctl_getenqueuereadable](2919907-ctl_getenqueuereadable.md)
- [ctl_register](1809176-ctl_register.md)
