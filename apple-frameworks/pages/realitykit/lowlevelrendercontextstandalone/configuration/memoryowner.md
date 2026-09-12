> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/configuration/memoryowner](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/configuration/memoryowner)

# memoryOwner

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An optional task identity token used to associate GPU memory allocations with a specific process for memory accounting purposes.

## Declaration

```swift
var memoryOwner: task_id_token_t? { get set }
```

## See Also

### Configuring the renderer

- [device](device.md): The Metal device to use for all rendering operations.
