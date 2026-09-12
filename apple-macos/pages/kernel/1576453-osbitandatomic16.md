> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576453-osbitandatomic16](https://developer.apple.com/documentation/kernel/1576453-osbitandatomic16)

# OSBitAndAtomic16

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

16-bit logical and operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.

## Declaration

```objectivec
UInt16 OSBitAndAtomic16(UInt32 mask, volatile UInt16 *address);
```

## Parameters

- `mask`: The mask to logically and with the value.
- `address`: The 2-byte aligned address of the value to update atomically.

<a id="return_value"></a>

## Return Value

The value before the bitwise operation.

<a id="discussion"></a>

## Discussion

The OSBitAndAtomic16 function logically ands the bits of the specified mask into the value at the specified address and returns the original value.

This function guarantees atomicity only with main system memory. It is specifically unsuitable for use on noncacheable memory such as that in devices; this function cannot guarantee atomicity, for example, on memory mapped from a PCI device. Additionally, this function incorporates a memory barrier on systems with weakly-ordered memory architectures.

## See Also

### Boolean Operations

- [OSBitAndAtomic](1576481-osbitandatomic.md): 32-bit logical and operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitAndAtomic8](1576487-osbitandatomic8.md): 8-bit logical and operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitOrAtomic](1576467-osbitoratomic.md): 32-bit logical or operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitOrAtomic8](1576478-osbitoratomic8.md): 8-bit logical or operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitOrAtomic16](1576466-osbitoratomic16.md): 16-bit logical or operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitXorAtomic](1576476-osbitxoratomic.md): 32-bit logical xor operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitXorAtomic8](1576459-osbitxoratomic8.md): 8-bit logical xor operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSBitXorAtomic16](1576464-osbitxoratomic16.md): 16-bit logical xor operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
