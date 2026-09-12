> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/systemdependency/after(_:)](https://developer.apple.com/documentation/realitykit/systemdependency/after(_:))

# SystemDependency.after(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An update order that requests RealityKit update this system after it updates another specified system.

## Declaration

```swift
case after(any System.Type)
```

## Parameters

- `System`: A system that this system updates after.

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

## See Also

### Update order

- [SystemDependency.before(\_:)](before%28__%29.md): An update order that requests RealityKit update this system before it updates another specified system.
