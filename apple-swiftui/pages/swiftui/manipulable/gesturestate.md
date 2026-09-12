> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/manipulable/gesturestate](https://developer.apple.com/documentation/swiftui/manipulable/gesturestate)

# Manipulable.GestureState

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Describes the state of a manipulation gesture.

## Declaration

```swift
struct GestureState
```

<a id="overview"></a>

## Overview

> **See Also**

> [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](../view/manipulationgesture%28updating_coordinatespace_operations_inertia_isenabled_onchanged_%29.md)

> **See Also**

> [manipulable(using:)](../view/manipulable%28using_%29.md)

## Topics

### Initializers

- [init(transform:)](gesturestate/init%28transform_%29.md): Creates a new manipulation gesture state with the given transform.

### Instance Properties

- [isActive](gesturestate/isactive.md): The Boolean value that indicates whether a manipulation gesture is currently active.
- [transform](gesturestate/transform.md): The current 3D affine transform applied by an active manipulation gesture.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
