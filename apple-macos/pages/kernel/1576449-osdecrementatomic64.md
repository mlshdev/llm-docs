> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576449-osdecrementatomic64](https://developer.apple.com/documentation/kernel/1576449-osdecrementatomic64)

# OSDecrementAtomic64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

64-bit decrement.

## Declaration

```objectivec
SInt64 OSDecrementAtomic64(volatile SInt64 *address);
```

<a id="discussion"></a>

## Discussion

See OSDecrementAtomic.

## See Also

### Decrement

- [OSDecrementAtomic](1576455-osdecrementatomic.md): 32-bit decrement operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSDecrementAtomic8](1576458-osdecrementatomic8.md): 8-bit decrement operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSDecrementAtomic16](1576468-osdecrementatomic16.md): 16-bit decrement operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
