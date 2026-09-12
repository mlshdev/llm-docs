> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/namespace](https://developer.apple.com/documentation/swiftui/namespace)

# Namespace

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A dynamic property type that allows access to a namespace defined by the persistent identity of the object containing the property (e.g. a view).

## Declaration

```swift
@frozen @propertyWrapper struct Namespace
```

## Mentioned In

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md)

## Topics

### Creating a namespace

- [init()](namespace/init%28%29.md)

### Getting the namespace

- [wrappedValue](namespace/wrappedvalue.md)
- [Namespace.ID](namespace/id.md): A namespace defined by the persistent identity of an `@Namespace` dynamic property.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DynamicProperty](dynamicproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Synchronizing geometries

- [matchedGeometryEffect(id:in:properties:anchor:isSource:)](view/matchedgeometryeffect%28id_in_properties_anchor_issource_%29.md): Defines a group of views with synchronized geometry using an identifier and namespace that you provide.
- [MatchedGeometryProperties](matchedgeometryproperties.md): A set of view properties that may be synchronized between views using the `View.matchedGeometryEffect()` function.
- [GeometryEffect](geometryeffect.md): An effect that changes the visual appearance of a view, largely without changing its ancestors or descendants.
- [geometryGroup()](view/geometrygroup%28%29.md): Isolates the geometry (e.g. position and size) of the view from its parent view.
