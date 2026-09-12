> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalposeset](https://developer.apple.com/documentation/realitykit/skeletalposeset)

# SkeletalPoseSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A collection of named skeletal poses.

## Declaration

```swift
struct SkeletalPoseSet
```

## Topics

### Initializers

- [init()](skeletalposeset/init%28%29.md): Creates an empty collection.

### Instance Properties

- [count](skeletalposeset/count.md): The number of elements in the collection.
- [default](skeletalposeset/default.md): Accesses the first skeletal pose.
- [isEmpty](skeletalposeset/isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [contains(\_:)](skeletalposeset/contains%28__%29.md): Checks if the set contains a pose with the given name.
- [index(of:)](skeletalposeset/index%28of_%29.md): Returns the index where the specified pose appears in the collection.
- [set(\_:)](skeletalposeset/set%28__%29.md): Updates a pose in the set based on its name. If pose with this ID does not exist, does nothing.

### Default Implementations

- [Collection Implementations](skeletalposeset/collection-implementations.md)

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Skeletons

- [SkeletalPosesComponent](skeletalposescomponent.md): A component that exposes the collection of named animation skeletal poses.
- [SkeletalPose](skeletalpose.md): A container that holds the position and orientation of each joint in a single animation skeleton.
