> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegateprovider/devicequeue](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegateprovider/devicequeue)

# deviceQueue (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The queue the framework uses to synchronize operations for this device.

## Declaration

```swift
var deviceQueue: dispatch_queue_t { get }
```

# deviceQueue (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The queue the framework uses to synchronize operations for this device.

## Declaration

```objectivec
@property (readonly) dispatch_queue_t deviceQueue;
```
