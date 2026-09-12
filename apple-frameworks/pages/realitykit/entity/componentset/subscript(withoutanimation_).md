> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset/subscript(withoutanimation:)](https://developer.apple.com/documentation/realitykit/entity/componentset/subscript(withoutanimation:))

# subscript(withoutAnimation:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Gets or sets the component of the specified type, without considering implicit animations.

## Declaration

```swift
@MainActor @preconcurrency subscript<T>(withoutAnimation withoutAnimation: T.Type) -> T? where T : Component { get set }
```

<a id="overview"></a>

## Overview

This is only useful in specialized circumstances, such as in a tight loop, where you are certain there are no animations active.

## See Also

### Accessing animatable components

- [subscript(componentType:)](subscript%28componenttype_%29-3miek.md)
- [subscript(\_:\_:)](subscript%28____%29-b2gl.md)
