> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576452-osaddatomic](https://developer.apple.com/documentation/kernel/1576452-osaddatomic)

# OSAddAtomic

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

32-bit add operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.

## Declaration

```objectivec
SInt32 OSAddAtomic(SInt32 amount, volatile SInt32 *address);
```

## Parameters

- `amount`: The amount to add.
- `address`: The 4-byte aligned address of the value to update atomically.

<a id="return_value"></a>

## Return Value

The value before the addition

<a id="discussion"></a>

## Discussion

The OSAddAtomic function adds the specified amount to the value at the specified address and returns the original value.

This function guarantees atomicity only with main system memory. It is specifically unsuitable for use on noncacheable memory such as that in devices; this function cannot guarantee atomicity, for example, on memory mapped from a PCI device. Previous incarnations of this function incorporated a memory barrier on systems with weakly-ordered memory architectures, but current versions contain no barriers.

## See Also

### Additions

- [OSAddAtomic8](1576483-osaddatomic8.md): 8-bit add operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSAddAtomic16](1576475-osaddatomic16.md): 16-bit add operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSAddAtomic64](1576451-osaddatomic64.md): 64-bit atomic add operation.
