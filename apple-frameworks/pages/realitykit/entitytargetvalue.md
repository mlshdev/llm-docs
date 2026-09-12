> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitytargetvalue](https://developer.apple.com/documentation/realitykit/entitytargetvalue)

# EntityTargetValue

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+

A value containing an original gesture value along with a targeted entity.

## Declaration

```swift
@dynamicMemberLookup struct EntityTargetValue<Value>
```

<a id="overview"></a>

## Overview

Spatial data from a [location](https://developer.apple.com/documentation/swiftui/draggesture/value/location) returned by a gesture can be converted to and from the entity using functions defined in [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md).

For example, here’s how to convert [location](https://developer.apple.com/documentation/swiftui/draggesture/value/location) from a [DragGesture](https://developer.apple.com/documentation/swiftui/draggesture) to the parent of an [Entity](entity.md):

```swift
DragGesture(coordinateSpace: .global).targetedToEntity().updating($state) { state, value, _ in
    let location = value.convert(
        value.location, from: .global, to: value.entity.parent
    )
    ...
}
```

## Topics

### Accessing gesture info

- [entity](entitytargetvalue/entity.md): The targeted entity.
- [gestureValue](entitytargetvalue/gesturevalue.md): The gesture value updated by the gesture.
- [subscript(dynamicMember:)](entitytargetvalue/subscript%28dynamicmember_%29.md)

### Instance Methods

- [unproject(\_:from:to:)](entitytargetvalue/unproject%28__from_to_%29.md): Unproject `point` from a 2D coordinate space into 3D world coordinates.
- [unproject(\_:to:)](entitytargetvalue/unproject%28__to_%29.md): Unproject a 2D point from the gesture value into 3D world coordinates.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md)
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md)

## See Also

### Direct and indirect gestures

- [Transforming RealityKit entities using gestures](transforming-realitykit-entities-with-gestures.md): Build a RealityKit component to support standard visionOS gestures on any entity.
- [InputTargetComponent](inputtargetcomponent.md): A component that gives an entity the ability to receive system input.
- [ManipulationComponent](manipulationcomponent.md): A component that adds fluid and immersive interactive behaviors and effects.
- [GestureComponent](gesturecomponent.md): A component attaching a UI gesture to an entity.
