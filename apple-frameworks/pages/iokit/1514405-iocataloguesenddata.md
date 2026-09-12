> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514405-iocataloguesenddata](https://developer.apple.com/documentation/iokit/1514405-iocataloguesenddata)

# IOCatalogueSendData(\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IOCatalogueSendData(_ mainPort: mach_port_t, _ flag: UInt32, _ buffer: UnsafePointer<CChar>!, _ size: UInt32) -> kern_return_t
```

# IOCatalogueSendData (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t IOCatalogueSendData(mach_port_t mainPort, uint32_t flag, const char *buffer, uint32_t size);
```
