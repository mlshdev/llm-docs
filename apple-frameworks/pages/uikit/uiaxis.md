> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaxis](https://developer.apple.com/documentation/uikit/uiaxis)

# UIAxis (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

A structure that specifies the layout axes.

## Declaration

```swift
struct UIAxis
```

## Topics

### Constants

- [horizontal](uiaxis/horizontal.md): A value that represents the horizontal axis.
- [vertical](uiaxis/vertical.md): A value that represents the vertical axis.
- [both](uiaxis/both.md): A value that represents both axes.

### Initializers

- [init(rawValue:)](uiaxis/init%28rawvalue_%29.md): Creates an axis with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.

# UIAxis (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

A structure that specifies the layout axes.

## Declaration

```objectivec
enum UIAxis : NSUInteger;
```

## Topics

### Constants

- [UIAxisHorizontal](uiaxis/horizontal.md): A value that represents the horizontal axis.
- [UIAxisVertical](uiaxis/vertical.md): A value that represents the vertical axis.
- [UIAxisBoth](uiaxis/both.md): A value that represents both axes.

### Initializers

- [UIAxisNeither](uiaxis/uiaxisneither.md): A value that represents neither axis.

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.
