> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514233-iocataloguegetdata

# IOCatalogueGetData(\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func IOCatalogueGetData(_ mainPort: mach_port_t, _ flag: UInt32, _ buffer: UnsafeMutablePointer<UnsafeMutablePointer<CChar>?>!, _ size: UnsafeMutablePointer<UInt32>!) -> kern_return_t
```

# IOCatalogueGetData (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t IOCatalogueGetData(mach_port_t mainPort, uint32_t flag, char **buffer, uint32_t *size);
```
