> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576480-osincrementatomic64](https://developer.apple.com/documentation/kernel/1576480-osincrementatomic64)

# OSIncrementAtomic64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

64-bit increment.

## Declaration

```objectivec
SInt64 OSIncrementAtomic64(volatile SInt64 *address);
```

<a id="discussion"></a>

## Discussion

See OSIncrementAtomic.

## See Also

### Increment

- [OSIncrementAtomic](1576460-osincrementatomic.md): 32-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSIncrementAtomic8](1576477-osincrementatomic8.md): 8-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSIncrementAtomic16](1576484-osincrementatomic16.md): 16-bit increment operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
