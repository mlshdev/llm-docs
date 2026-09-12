> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/init(configuration:resources:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/init(configuration:resources:))

# init(configuration:resources:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a standalone render context using resources prepared ahead of time.

## Declaration

```swift
init(configuration: LowLevelRenderContextStandalone.Configuration, resources: LowLevelRenderContextStandalone.Resources) throws
```

## Parameters

- `configuration`: The configuration for the new context.
- `resources`: Prepared resources to use for this render context.

<a id="discussion"></a>

## Discussion

Prefer this overload when sharing the same resources across multiple render contexts. To create a single context without prepared resources, use [init(configuration:)](init%28configuration_%29.md) instead.

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if the context cannot be created.

## See Also

### Creating a render context

- [init(configuration:)](init%28configuration_%29.md): Creates a standalone render context, asynchronously preparing required resources.
- [LowLevelRenderContextStandalone.Configuration](configuration.md): Configuration for creating a standalone render context backed by a Metal device.
- [LowLevelRenderContextStandalone.Resources](resources.md): Resources needed for a render context
