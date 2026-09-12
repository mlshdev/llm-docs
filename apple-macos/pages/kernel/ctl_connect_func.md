> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ctl_connect_func](https://developer.apple.com/documentation/kernel/ctl_connect_func)

# ctl_connect_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

## Declaration

```objectivec
typedef errno_t (*ctl_connect_func)(kern_ctl_ref kctlref, struct sockaddr_ctl *sac, void **unitinfo);
```

## Parameters

- `kctlref`: The control ref for the kernel control the client is connecting to.
- `sac`: The address used to connect to this control. The field sc_unit contains the unit number of the kernel control instance the client is connecting to. If CTL_FLAG_REG_ID_UNIT was set when the kernel control was registered, sc_unit is the ctl_unit of the kern_ctl_reg structure. If CTL_FLAG_REG_ID_UNIT was not set when the kernel control was registered, sc_unit is the dynamically allocated unit number of the new kernel control instance that is used for this connection.
- `unitinfo`: A placeholder for a pointer to the optional user-defined private data associated with this kernel control instance. This opaque info will be provided to the user when the rest of the callback routines are executed. For example, it can be used to pass a pointer to an instance-specific data structure in order for the user to keep track of the states related to this kernel control instance.

<a id="discussion"></a>

## Discussion

The ctl_connect_func is used to receive notification of a client connecting to the kernel control.
