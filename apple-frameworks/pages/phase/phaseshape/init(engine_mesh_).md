> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseshape/init(engine:mesh:)

# init(engine:mesh:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that the given geometric data shapes.

## Declaration

```swift
init(engine: PHASEEngine, mesh: MDLMesh)
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `mesh`: A collection of points that connect to form a shape.

## See Also

### Creating a Shape

- [init(engine:mesh:materials:)](init%28engine_mesh_materials_%29.md): Creates an object of a specific material that the given geometric data shapes.

# initWithEngine:mesh: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object that the given geometric data shapes.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine mesh:(MDLMesh *) mesh;
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `mesh`: A collection of points that connect to form a shape.

## See Also

### Creating a Shape

- [initWithEngine:mesh:materials:](init%28engine_mesh_materials_%29.md): Creates an object of a specific material that the given geometric data shapes.
