> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514665-iocatalogueterminate](https://developer.apple.com/documentation/iokit/1514665-iocatalogueterminate)

# IOCatalogueTerminate(\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IOCatalogueTerminate(_ mainPort: mach_port_t, _ flag: UInt32, _ description: UnsafeMutablePointer<CChar>!) -> kern_return_t
```

# IOCatalogueTerminate (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t IOCatalogueTerminate(mach_port_t mainPort, uint32_t flag, io_name_t description);
```
