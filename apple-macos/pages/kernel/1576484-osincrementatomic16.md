> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576484-osincrementatomic16](https://developer.apple.com/documentation/kernel/1576484-osincrementatomic16)

# OSIncrementAtomic16

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

16-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.

## Declaration

```objectivec
SInt16 OSIncrementAtomic16(volatile SInt16 *address);
```

## Parameters

- `address`: The 2-byte aligned address of the value to update atomically.

<a id="return_value"></a>

## Return Value

The value before the increment.

<a id="discussion"></a>

## Discussion

The OSIncrementAtomic16 function increments the value at the specified address by one and returns the original value.

This function guarantees atomicity only with main system memory. It is specifically unsuitable for use on noncacheable memory such as that in devices; this function cannot guarantee atomicity, for example, on memory mapped from a PCI device. Previous incarnations of this function incorporated a memory barrier on systems with weakly-ordered memory architectures, but current versions contain no barriers.

## See Also

### Increment

- [OSIncrementAtomic](1576460-osincrementatomic.md): 32-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSIncrementAtomic8](1576477-osincrementatomic8.md): 8-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSIncrementAtomic64](1576480-osincrementatomic64.md): 64-bit increment.
