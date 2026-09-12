> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576456-ostestandset](https://developer.apple.com/documentation/kernel/1576456-ostestandset)

# OSTestAndSet

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+

Bit test and set operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.

## Declaration

```objectivec
Boolean OSTestAndSet(UInt32 bit, volatile UInt8 *startAddress);
```

## Parameters

- `bit`: The bit number in the range 0 through 7.
- `startAddress`: The address of the byte to update atomically.

<a id="return_value"></a>

## Return Value

true if the bit was already set, false otherwise.

<a id="discussion"></a>

## Discussion

This function guarantees atomicity only with main system memory. It is specifically unsuitable for use on noncacheable memory such as that in devices; this function cannot guarantee atomicity, for example, on memory mapped from a PCI device. Additionally, this function incorporates a memory barrier on systems with weakly-ordered memory architectures.

The OSTestAndSet function sets a single bit in a byte at a specified address. It returns true if the bit was already set, false otherwise.

## See Also

### Test Operations

- [OSTestAndClear](1576463-ostestandclear.md): Bit test and clear operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
