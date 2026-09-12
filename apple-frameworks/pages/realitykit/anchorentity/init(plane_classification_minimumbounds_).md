> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorentity/init(plane:classification:minimumbounds:)](https://developer.apple.com/documentation/realitykit/anchorentity/init(plane:classification:minimumbounds:))

# init(plane:classification:minimumBounds:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates an anchor entity that targets a plane with the given characteristics.

## Declaration

```swift
@MainActor @preconcurrency convenience init(plane alignment: AnchoringComponent.Target.Alignment, classification: AnchoringComponent.Target.Classification = .any, minimumBounds: SIMD2<Float> = [0, 0])
```

## Parameters

- `alignment`: The alignment of the plane to target, like [horizontal](../anchoringcomponent/target-swift.enum/alignment/horizontal.md) or [vertical](../anchoringcomponent/target-swift.enum/alignment/vertical.md).
- `classification`: The classification of the target plane to look for, like [floor](../anchoringcomponent/target-swift.enum/classification/floor.md) or [ceiling](../anchoringcomponent/target-swift.enum/classification/ceiling.md).
- `minimumBounds`: The minimum size of the target plane.

## See Also

### Creating an anchor

- [init()](init%28%29.md): Creates a new anchor entity.
- [init(\_:)](init%28__%29-9vipc.md)
- [init(\_:)](init%28__%29-9rdwu.md): Creates an anchor entity targeting a particular kind of anchor.
- [init(\_:trackingMode:)](init%28__trackingmode_%29.md)
- [init(\_:trackingMode:physicsSimulation:)](init%28__trackingmode_physicssimulation_%29.md)
- [init(anchor:)](init%28anchor_%29.md): Creates an anchor entity that uses an existing AR anchor.
- [init(raycastResult:)](init%28raycastresult_%29.md): Creates an anchor entity using the information about a real-world surface discovered using a ray-cast query.
- [init(world:)](init%28world_%29-4snw2.md): Creates an anchor entity with a target fixed at the given position in the scene.
- [init(world:)](init%28world_%29-u9qv.md): Creates an anchor entity with a target fixed at the given position in the scene.
