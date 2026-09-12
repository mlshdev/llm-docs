> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/device](https://developer.apple.com/documentation/metalkit/mtktextureloader/device)

# device (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device object that the texture loader uses to create textures.

## Declaration

```swift
var device: any MTLDevice { get }
```

## See Also

### Creating a Texture Loader

- [init(device:)](init%28device_%29.md): Initializes a new texture loader object.

# device (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The device object that the texture loader uses to create textures.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) id<MTLDevice> device;
```

## See Also

### Creating a Texture Loader

- [initWithDevice:](init%28device_%29.md): Initializes a new texture loader object.
