> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_copy_port](https://developer.apple.com/documentation/os/os_workgroup_copy_port)

# os_workgroup_copy_port

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** macOS 11.0+

Returns the Mach port associated with the workgroup.

## Declaration

```objectivec
extern int os_workgroup_copy_port(os_workgroup_t wg, mach_port_t *mach_port_out);
```

## Parameters

- `wg`: The workgroup whose Mach port you want.
- `mach_port_out`: A pointer to a Mach port variable. When the function returns, this parameter contains the specified workgroup’s Mach port reference.

<a id="return-value"></a>

## Return Value

A value of `0` on success, or a nonzero error code if an error occurred.

<a id="Discussion"></a>

## Discussion

This function returns the send right for the workgroup’s Mach port in the kernel. Pass this port to other processes and use it to construct a reference to the same workgroup in those processes, which lets those processes coordinate their threads with the threads of the workgroup in the `wg` parameter.

## See Also

### Common Utilities

- [os_workgroup_create_with_workgroup](os_workgroup_create_with_workgroup.md): Create a new workgroup that is bound to the specified workgroup.
- [os_workgroup_create_with_port](os_workgroup_create_with_port.md): Creates a new workgroup that is bound to the workgroup with the specified Mach port.
- [os_workgroup_t](os_workgroup_t.md): An opaque object representing a default workgroup in the current process.
- [os_workgroup_attr_t](os_workgroup_attr_t.md): An opaque structure for storing workgroup-related attributes.
