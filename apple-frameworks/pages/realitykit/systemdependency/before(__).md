> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/systemdependency/before(_:)](https://developer.apple.com/documentation/realitykit/systemdependency/before(_:))

# SystemDependency.before(\_:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An update order that requests RealityKit update this system before it updates another specified system.

## Declaration

```swift
case before(any System.Type)
```

## Parameters

- `System`: A system that this system updates before.

## Mentioned In

- [Implementing systems for entities in a scene](../implementing-systems-for-entities-in-a-scene.md)

## See Also

### Update order

- [SystemDependency.after(\_:)](after%28__%29.md): An update order that requests RealityKit update this system after it updates another specified system.
