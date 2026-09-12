> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/configuration](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/configuration)

# LowLevelRenderContextStandalone.Configuration

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration for creating a standalone render context backed by a Metal device.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(device:)](configuration/init%28device_%29.md): Creates a configuration using the given device.

### Configuring the renderer

- [device](configuration/device.md): The Metal device to use for all rendering operations.
- [memoryOwner](configuration/memoryowner.md): An optional task identity token used to associate GPU memory allocations with a specific process for memory accounting purposes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a render context

- [init(configuration:resources:)](init%28configuration_resources_%29.md): Creates a standalone render context using resources prepared ahead of time.
- [init(configuration:)](init%28configuration_%29.md): Creates a standalone render context, asynchronously preparing required resources.
- [LowLevelRenderContextStandalone.Resources](resources.md): Resources needed for a render context
