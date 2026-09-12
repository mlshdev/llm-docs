> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1576485-oscompareandswap64](https://developer.apple.com/documentation/kernel/1576485-oscompareandswap64)

# OSCompareAndSwap64

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.5+

64-bit compare and swap operation.

## Declaration

```objectivec
Boolean OSCompareAndSwap64(UInt64 oldValue, UInt64 newValue, volatile UInt64 *address);
```

<a id="discussion"></a>

## Discussion

See OSCompareAndSwap.

## See Also

### Compare and Swap

- [OSCompareAndSwap](1576450-oscompareandswap.md): Compare and swap operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
- [OSCompareAndSwapPtr](1576461-oscompareandswapptr.md): Compare and swap operation, performed atomically with respect to all devices that participate in the coherency architecture of the platform.
