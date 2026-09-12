> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shapestyle/primary](https://developer.apple.com/documentation/swiftui/shapestyle/primary)

# primary

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A shape style that maps to the first level of the current content style.

## Declaration

```swift
@export(implementation) static var primary: HierarchicalShapeStyle { get }
```

<a id="discussion"></a>

## Discussion

This hierarchical style maps to the first level of the current foreground style, or to the first level of the default foreground style if you haven’t set a foreground style in the view’s environment. You typically set a foreground style by supplying a non-hierarchical style to the [foregroundStyle(\_:)](../view/foregroundstyle%28__%29.md) modifier.

For information about how to use shape styles, see [ShapeStyle](../shapestyle.md).

## See Also

### Hierarchical styles

- [secondary](secondary-swift.property.md): Returns the second level of this shape style.
- [tertiary](tertiary-swift.property.md): Returns the third level of this shape style.
- [quaternary](quaternary-swift.property.md): Returns the fourth level of this shape style.
- [quinary](quinary-swift.property.md): Returns the fifth level of this shape style.
- [secondary](secondary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the second level of the current content style.
- [tertiary](tertiary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the third level of the current content style.
- [quaternary](quaternary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the fourth level of the current content style.
- [quinary](quinary-swift.type.property.md): Conforms when `Self` is `HierarchicalShapeStyle`. A shape style that maps to the fifth level of the current content style.
