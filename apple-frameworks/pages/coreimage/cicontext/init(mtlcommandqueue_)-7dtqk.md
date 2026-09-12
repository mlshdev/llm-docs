> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(mtlcommandqueue:)-7dtqk](https://developer.apple.com/documentation/coreimage/cicontext/init(mtlcommandqueue:)-7dtqk)

# init(mtlCommandQueue:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init(mtlCommandQueue commandQueue: any MTLCommandQueue)
```

## See Also

### Creating a Context for GPU-Based Rendering

- [init(mtlDevice:)](init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [init(mtlDevice:options:)](init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [init(mtlCommandQueue:options:)](init%28mtlcommandqueue_options_%29-6i3me.md)

# contextWithMTLCommandQueue: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (CIContext *) contextWithMTLCommandQueue:(id<MTLCommandQueue>) commandQueue;
```

## See Also

### Creating a Context for GPU-Based Rendering

- [contextWithMTLDevice:](init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [contextWithMTLDevice:options:](init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [contextWithMTLCommandQueue:options:](init%28mtlcommandqueue_options_%29-6i3me.md)
