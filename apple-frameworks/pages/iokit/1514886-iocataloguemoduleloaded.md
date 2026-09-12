> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514886-iocataloguemoduleloaded](https://developer.apple.com/documentation/iokit/1514886-iocataloguemoduleloaded)

# IOCatalogueModuleLoaded(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IOCatalogueModuleLoaded(_ mainPort: mach_port_t, _ name: UnsafeMutablePointer<CChar>!) -> kern_return_t
```

# IOCatalogueModuleLoaded (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t IOCatalogueModuleLoaded(mach_port_t mainPort, io_name_t name);
```
