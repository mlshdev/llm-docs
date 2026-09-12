> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/init(configuration:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/init(configuration:))

# init(configuration:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a standalone render context, asynchronously preparing required resources.

## Declaration

```swift
nonisolated(nonsending) init(configuration: LowLevelRenderContextStandalone.Configuration) async throws
```

## Parameters

- `configuration`: The configuration for the new context.

<a id="discussion"></a>

## Discussion

Prefer this overload when creating a single render context. If you need to share prepared resources across multiple contexts, create a [LowLevelRenderContextStandalone.Resources](resources.md) value first and use [init(configuration:resources:)](init%28configuration_resources_%29.md) instead.

> **Throws**

> An error if resource preparation or context creation fails.

## See Also

### Creating a render context

- [init(configuration:resources:)](init%28configuration_resources_%29.md): Creates a standalone render context using resources prepared ahead of time.
- [LowLevelRenderContextStandalone.Configuration](configuration.md): Configuration for creating a standalone render context backed by a Metal device.
- [LowLevelRenderContextStandalone.Resources](resources.md): Resources needed for a render context
