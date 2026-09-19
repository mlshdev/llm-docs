> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothgrabcomponent/init(mode:)

# init(mode:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cloth grab component with the given grab mode.

## Declaration

```swift
init(mode: ClothGrabComponent.GrabMode)
```

## Parameters

- `mode`: Whether to grab using a ray or a volume.

## See Also

### Creating a grab component

- [ClothGrabComponent.GrabMode](grabmode.md): Defines whether a grab component will select particles using a ray or a volume.
