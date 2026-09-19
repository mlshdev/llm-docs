> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/configuration/memoryowner

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
