> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/init(device:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/init(device:))

# init(device:) (Swift)

**Framework:** MetalKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new texture loader object.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device to create Metal textures with.

<a id="return-value"></a>

## Return Value

An initialized texture loader object.

## See Also

### Creating a Texture Loader

- [device](device.md): The device object that the texture loader uses to create textures.

# initWithDevice: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new texture loader object.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device to create Metal textures with.

<a id="return-value"></a>

## Return Value

An initialized texture loader object.

## See Also

### Creating a Texture Loader

- [device](device.md): The device object that the texture loader uses to create textures.
