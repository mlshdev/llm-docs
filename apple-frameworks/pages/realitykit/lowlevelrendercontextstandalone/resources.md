> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/resources](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/resources)

# LowLevelRenderContextStandalone.Resources

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Resources needed for a render context

## Declaration

```swift
struct Resources
```

## Topics

### Creating render resources

- [init(device:)](resources/init%28device_%29.md): Asynchronously prepare resources for the given device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a render context

- [init(configuration:resources:)](init%28configuration_resources_%29.md): Creates a standalone render context using resources prepared ahead of time.
- [init(configuration:)](init%28configuration_%29.md): Creates a standalone render context, asynchronously preparing required resources.
- [LowLevelRenderContextStandalone.Configuration](configuration.md): Configuration for creating a standalone render context backed by a Metal device.
