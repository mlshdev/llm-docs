> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(mtldevice:)-swey](https://developer.apple.com/documentation/coreimage/cicontext/init(mtldevice:)-swey)

# init(mtlDevice:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context using the specified Metal device.

## Declaration

```swift
init(mtlDevice device: any MTLDevice)
```

## Parameters

- `device`: The Metal device object to use for rendering.

<a id="return-value"></a>

## Return Value

A Core Image context.

<a id="Discussion"></a>

## Discussion

Use this method to choose a specific Metal device for rendering when a system contains multiple Metal devices. To create a Metal-based context using the system’s default Metal device, use the [contextWithOptions:](contextwithoptions_.md) method.

## See Also

### Creating a Context for GPU-Based Rendering

- [init(mtlDevice:options:)](init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [init(mtlCommandQueue:)](init%28mtlcommandqueue_%29-7dtqk.md)
- [init(mtlCommandQueue:options:)](init%28mtlcommandqueue_options_%29-6i3me.md)

# contextWithMTLDevice: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context using the specified Metal device.

## Declaration

```objectivec
+ (CIContext *) contextWithMTLDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device object to use for rendering.

<a id="return-value"></a>

## Return Value

A Core Image context.

<a id="Discussion"></a>

## Discussion

Use this method to choose a specific Metal device for rendering when a system contains multiple Metal devices. To create a Metal-based context using the system’s default Metal device, use the [contextWithOptions:](contextwithoptions_.md) method.

## See Also

### Creating a Context for GPU-Based Rendering

- [contextWithMTLDevice:options:](init%28mtldevice_options_%29-26usb.md): Creates a Core Image context using the specified Metal device and options.
- [contextWithMTLCommandQueue:](init%28mtlcommandqueue_%29-7dtqk.md)
- [contextWithMTLCommandQueue:options:](init%28mtlcommandqueue_options_%29-6i3me.md)
