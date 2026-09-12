> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514833-ioconnecttrap3](https://developer.apple.com/documentation/iokit/1514833-ioconnecttrap3)

# IOConnectTrap3(\_:\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IOConnectTrap3(_ connect: io_connect_t, _ index: UInt32, _ p1: UInt, _ p2: UInt, _ p3: UInt) -> kern_return_t
```

# IOConnectTrap3 (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t IOConnectTrap3(io_connect_t connect, uint32_t index, uintptr_t p1, uintptr_t p2, uintptr_t p3);
```
