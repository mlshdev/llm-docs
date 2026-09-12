> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anchor](https://developer.apple.com/documentation/swiftui/anchor)

# Anchor

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An opaque value derived from an anchor source and a particular view.

## Declaration

```swift
@frozen struct Anchor<Value>
```

<a id="overview"></a>

## Overview

You can convert the anchor to a `Value` in the coordinate space of a target view by using a [GeometryProxy](geometryproxy.md) to specify the target view.

## Topics

### Getting the anchor’s source

- [Anchor.Source](anchor/source.md): A type-erased geometry value that produces an anchored value of a given type.

## Relationships

### Conforms To

- [CoordinateSpaceValue3D](https://developer.apple.com/documentation/spatial/coordinatespacevalue3d)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing geometric constructs

- [Axis](axis.md): The horizontal or vertical dimension in a 2D coordinate system.
- [Angle](angle.md): A geometric angle whose value you access in either radians or degrees.
- [UnitPoint](unitpoint.md): A normalized 2D point in a view’s coordinate space.
- [UnitPoint3D](unitpoint3d.md): A normalized 3D point in a view’s coordinate space.
- [DepthAlignmentID](depthalignmentid.md)
- [Alignment3D](alignment3d.md): An alignment in all three axes.
- [GeometryProxyCoordinateSpace3D](geometryproxycoordinatespace3d.md): A representation of a `GeometryProxy3D` which can be used for `CoordinateSpace3D` based conversions.
