> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anchor/source](https://developer.apple.com/documentation/swiftui/anchor/source)

# Anchor.Source

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erased geometry value that produces an anchored value of a given type.

## Declaration

```swift
@frozen struct Source
```

<a id="overview"></a>

## Overview

SwiftUI passes anchored geometry values around the view tree via preference keys. It then converts them back into the local coordinate space using a [GeometryProxy](../geometryproxy.md) value.

## Topics

### Getting point anchor sources

- [point(\_:)](source/point%28__%29.md): Conforms when `Value` is `CGPoint`.
- [unitPoint(\_:)](source/unitpoint%28__%29.md): Conforms when `Value` is `CGPoint`.

### Getting rectangle anchor sources

- [rect(\_:)](source/rect%28__%29.md): Conforms when `Value` is `CGRect`. Returns an anchor source rect defined by `r` in the current view.
- [bounds](source/bounds.md): Conforms when `Value` is `CGRect`. An anchor source rect defined as the entire bounding rect of the current view.

### Getting top anchor sources

- [topLeading](source/topleading.md): Conforms when `Value` is `CGPoint`.
- [top](source/top.md): Conforms when `Value` is `CGPoint`.
- [topTrailing](source/toptrailing.md): Conforms when `Value` is `CGPoint`.

### Getting middle anchor sources

- [leading](source/leading.md): Conforms when `Value` is `CGPoint`.
- [center](source/center-869al.md): Conforms when `Value` is `CGPoint`.
- [trailing](source/trailing.md): Conforms when `Value` is `CGPoint`.

### Getting bottom anchor sources

- [bottomTrailing](source/bottomtrailing.md): Conforms when `Value` is `CGPoint`.
- [bottom](source/bottom.md): Conforms when `Value` is `CGPoint`.
- [bottomLeading](source/bottomleading.md): Conforms when `Value` is `CGPoint`.

### Creating an anchor source

- [init(\_:)](source/init%28__%29.md)

### Type Properties

- [bounds3D](source/bounds3d.md): Conforms when `Value` is `Rect3D`. An anchor source rect defined as the entire bounding rect of the current element.
- [center](source/center-6w6ww.md): Deprecated. Conforms when `Value` is `Point3D`.
- [center3D](source/center3d.md): Conforms when `Value` is `Point3D`.

### Type Methods

- [point3D(\_:)](source/point3d%28__%29.md): Conforms when `Value` is `Point3D`.
- [rect3D(\_:)](source/rect3d%28__%29.md): Conforms when `Value` is `Rect3D`. Returns an anchor source rect defined by `r` in the current element.
- [unitPoint3D(\_:)](source/unitpoint3d%28__%29.md): Conforms when `Value` is `Point3D`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
