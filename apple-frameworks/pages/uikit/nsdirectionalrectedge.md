> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionalrectedge](https://developer.apple.com/documentation/uikit/nsdirectionalrectedge)

# NSDirectionalRectEdge (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that specify an edge or a set of edges, taking the user interface layout direction into account.

## Declaration

```swift
struct NSDirectionalRectEdge
```

## Topics

### Constants

- [top](nsdirectionalrectedge/top.md): The top edge.
- [leading](nsdirectionalrectedge/leading.md): The leading edge.
- [bottom](nsdirectionalrectedge/bottom.md): The bottom edge.
- [trailing](nsdirectionalrectedge/trailing.md): The trailing edge.
- [all](nsdirectionalrectedge/all.md): All edges.

### Initializers

- [init(rawValue:)](nsdirectionalrectedge/init%28rawvalue_%29.md): Creates an edge with the specified raw value.

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
- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.

# NSDirectionalRectEdge (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that specify an edge or a set of edges, taking the user interface layout direction into account.

## Declaration

```objectivec
enum NSDirectionalRectEdge : NSUInteger;
```

## Topics

### Constants

- [NSDirectionalRectEdgeNone](nsdirectionalrectedge/nsdirectionalrectedgenone.md): No specified edge.
- [NSDirectionalRectEdgeTop](nsdirectionalrectedge/top.md): The top edge.
- [NSDirectionalRectEdgeLeading](nsdirectionalrectedge/leading.md): The leading edge.
- [NSDirectionalRectEdgeBottom](nsdirectionalrectedge/bottom.md): The bottom edge.
- [NSDirectionalRectEdgeTrailing](nsdirectionalrectedge/trailing.md): The trailing edge.
- [NSDirectionalRectEdgeAll](nsdirectionalrectedge/all.md): All edges.

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.
