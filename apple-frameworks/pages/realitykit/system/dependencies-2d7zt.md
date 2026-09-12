> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/system/dependencies-2d7zt](https://developer.apple.com/documentation/realitykit/system/dependencies-2d7zt)

# dependencies

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A default implementation of the dependencies array.

## Declaration

```swift
static var dependencies: [SystemDependency] { get }
```

<a id="discussion"></a>

## Discussion

RealityKit provides a default implementation of this property which returns an empty array. If a class that conforms to [System](../system.md) has no dependencies, it doesn’t need to implement this property.
