> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/generatestaticmesh(from:)](https://developer.apple.com/documentation/realitykit/shaperesource/generatestaticmesh(from:))

# generateStaticMesh(from:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a static collision mesh from a mesh resource.

## Declaration

```swift
@MainActor @preconcurrency static func generateStaticMesh(from mesh: MeshResource) async throws -> ShapeResource
```

## Parameters

- `mesh`: The mesh resource for generating the collision shape.

<a id="discussion"></a>

## Discussion

You can use only the physics body mode [PhysicsBodyMode.static](../physicsbodymode/static.md) and the collision component mode [CollisionComponent.Mode.default](../collisioncomponent/mode-swift.enum/default.md) with this shape.

The code example below assumes calling this method from a synchronous block:

```swift
// Use a low-priority task because generating collision meshes can take a while.
let myShapeTask = Task(priority: .low) {
    let meshResource = await MeshResource(
        shape: .generateBox(size: [5, 5, 5])
    )

    guard let shape = try? await ShapeResource.generateStaticMesh(
        from: meshResource
    ) else { return }

    // You can use the `ShapeResource` to make a
    // `CollisionComponent`, and add that to an entity.
    // Run this from the main thread.
    await MainActor.run {
        let entity = Entity()
        let collision = CollisionComponent(shapes: [shape])
        entity.components.set(collision)

        // Note that you can't set `mode` to `.dynamic`.
        // This only supports `.static`.
        let physicsBody = PhysicsBodyComponent(
            massProperties: .default,
            material: nil,
            mode: .static
        )
        entity.components.set(physicsBody)
        // ...
    }
}
```
