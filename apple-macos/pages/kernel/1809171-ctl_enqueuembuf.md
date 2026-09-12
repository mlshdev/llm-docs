> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1809171-ctl_enqueuembuf](https://developer.apple.com/documentation/kernel/1809171-ctl_enqueuembuf)

# ctl_enqueuembuf

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
errno_t ctl_enqueuembuf(kern_ctl_ref kctlref, u_int32_t unit, mbuf_t m, u_int32_t flags);
```

## Parameters

- `kctlref`: The control reference of the kernel control.
- `unit`: The unit number of the kernel control instance.
- `m`: An mbuf chain containing the data to send to the client.
- `flags`: Send flags. CTL_DATA_NOWAKEUP and CTL_DATA_EOR are currently the only supported flags.

<a id="return_value"></a>

## Return Value

0 - Data was enqueued to be read by the client. EINVAL - Invalid parameters. ENOBUFS - The queue is full.

<a id="discussion"></a>

## Discussion

Send data stored in an mbuf chain from the kernel control to the client. The caller is responsible for freeing the mbuf chain if ctl_enqueuembuf returns an error.

## See Also

### control

- [ctl_deregister](1809161-ctl_deregister.md)
- [ctl_enqueuedata](1809168-ctl_enqueuedata.md)
- [ctl_getenqueuereadable](2919907-ctl_getenqueuereadable.md)
- [ctl_getenqueuespace](1809173-ctl_getenqueuespace.md)
- [ctl_register](1809176-ctl_register.md)
