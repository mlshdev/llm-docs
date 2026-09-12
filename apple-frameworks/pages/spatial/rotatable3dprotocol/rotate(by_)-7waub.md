> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotatable3dprotocol/rotate(by:)-7waub](https://developer.apple.com/documentation/spatial/rotatable3dprotocol/rotate(by:)-7waub)

# rotate(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Rotates the entity rotated by the specified rotation around the origin.

## Declaration

```swift
mutating func rotate(by rotation: Self.Rotation)
```

## Parameters

- `rotation`: The rotation.

## Default Implementations

### Rotatable3DProtocol Implementations

- [rotate(by:)](rotate%28by_%29-744m4.md): Conforms when `Scalar` is `Float`. Rotates the entity by the specified quaternion around the origin.
- [rotate(by:)](rotate%28by_%29-86z9d.md): Conforms when `Scalar` is `Float`. Rotates the entity by the specified rotation around the origin.
