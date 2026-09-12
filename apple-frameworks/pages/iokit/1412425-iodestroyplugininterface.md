> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1412425-iodestroyplugininterface](https://developer.apple.com/documentation/iokit/1412425-iodestroyplugininterface)

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
