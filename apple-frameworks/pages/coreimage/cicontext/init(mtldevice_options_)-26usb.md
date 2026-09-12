> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/init(mtldevice:options:)-26usb](https://developer.apple.com/documentation/coreimage/cicontext/init(mtldevice:options:)-26usb)

# init(mtlDevice:options:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context using the specified Metal device and options.

## Declaration

```swift
init(mtlDevice device: any MTLDevice, options: [CIContextOption : Any]? = nil)
```

## Parameters

- `device`: The Metal device object to use for rendering.
- `options`: A dictionary that contains options for creating a [CIContext](../cicontext.md) object. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="return-value"></a>

## Return Value

A Core Image context.

<a id="Discussion"></a>

## Discussion

Use this method to choose a specific Metal device for rendering when a system contains multiple Metal devices. To create a Metal-based context using the system’s default Metal device, use the [contextWithOptions:](contextwithoptions_.md) method.

## See Also

### Creating a Context for GPU-Based Rendering

- [init(mtlDevice:)](init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [init(mtlCommandQueue:)](init%28mtlcommandqueue_%29-7dtqk.md)
- [init(mtlCommandQueue:options:)](init%28mtlcommandqueue_options_%29-6i3me.md)

# contextWithMTLDevice:options: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a Core Image context using the specified Metal device and options.

## Declaration

```objectivec
+ (CIContext *) contextWithMTLDevice:(id<MTLDevice>) device options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `device`: The Metal device object to use for rendering.
- `options`: A dictionary that contains options for creating a [CIContext](../cicontext.md) object. You can pass any of the keys defined in [CIContextOption](../cicontextoption.md) along with the appropriate value.

<a id="return-value"></a>

## Return Value

A Core Image context.

<a id="Discussion"></a>

## Discussion

Use this method to choose a specific Metal device for rendering when a system contains multiple Metal devices. To create a Metal-based context using the system’s default Metal device, use the [contextWithOptions:](contextwithoptions_.md) method.

## See Also

### Creating a Context for GPU-Based Rendering

- [contextWithMTLDevice:](init%28mtldevice_%29-swey.md): Creates a Core Image context using the specified Metal device.
- [contextWithMTLCommandQueue:](init%28mtlcommandqueue_%29-7dtqk.md)
- [contextWithMTLCommandQueue:options:](init%28mtlcommandqueue_options_%29-6i3me.md)
