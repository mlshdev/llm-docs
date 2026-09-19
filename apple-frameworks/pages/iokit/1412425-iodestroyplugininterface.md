> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1412425-iodestroyplugininterface

# IODestroyPlugInInterface(\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
func IODestroyPlugInInterface(_ interface: UnsafeMutablePointer<UnsafeMutablePointer<IOCFPlugInInterface>?>!) -> kern_return_t
```

# IODestroyPlugInInterface (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
kern_return_t IODestroyPlugInInterface(IOCFPlugInInterface **interface);
```
