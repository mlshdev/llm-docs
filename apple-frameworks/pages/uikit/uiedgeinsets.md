> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiedgeinsets](https://developer.apple.com/documentation/uikit/uiedgeinsets)

# UIEdgeInsets (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The inset distances for views.

## Declaration

```swift
struct UIEdgeInsets
```

<a id="overview"></a>

## Overview

Edge inset values are applied to a rectangle to shrink or expand the area represented by that rectangle. Typically, edge insets are used during view layout to modify the view’s frame. Positive values cause the frame to be inset (or shrunk) by the specified amount. Negative values cause the frame to be outset (or expanded) by the specified amount.

See also [init(top:left:bottom:right:)](uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) and [zero](uiedgeinsets/zero.md).

## Topics

### Creating edge insets

- [init(top:left:bottom:right:)](uiedgeinsets/init%28top_left_bottom_right_%29-6ff7.md): Creates an edge insets structure with the specified edges.
- [init()](uiedgeinsets/init%28%29.md): Initializes the edge insets structure to default values.

### Getting the edge values

- [bottom](uiedgeinsets/bottom.md): The bottom edge inset value.
- [left](uiedgeinsets/left.md): The left edge inset value.
- [right](uiedgeinsets/right.md): The right edge inset value.
- [top](uiedgeinsets/top.md): The top edge inset value.

### Managing edge insets

- [inset(by:)](../corefoundation/cgrect/inset%28by_%29.md)

### Converting to and from strings

- [string(for:)](../foundation/nscoder/string%28for_%29-26b4z.md): Returns a string formatted to contain the data from an edge insets structure.
- [uiEdgeInsets(for:)](../foundation/nscoder/uiedgeinsets%28for_%29.md): Returns a UIKit edge insets structure based on the data in the specified string.

### Getting the empty edge insets

- [zero](uiedgeinsets/zero.md): An edge insets struct whose top, left, bottom, and right fields are all set to `0`.

### Comparing edge insets

- [UIEdgeInsetsEqualToEdgeInsets(\_:\_:)](uiedgeinsetsequaltoedgeinsets%28____%29.md): Deprecated. Returns a Boolean value indicating whether the two edge insets are the same.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.

# UIEdgeInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

The inset distances for views.

## Declaration

```objectivec
typedef struct UIEdgeInsets { ... } UIEdgeInsets;
```

<a id="overview"></a>

## Overview

Edge inset values are applied to a rectangle to shrink or expand the area represented by that rectangle. Typically, edge insets are used during view layout to modify the view’s frame. Positive values cause the frame to be inset (or shrunk) by the specified amount. Negative values cause the frame to be outset (or expanded) by the specified amount.

See also [UIEdgeInsetsMake](uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md) and [UIEdgeInsetsZero](uiedgeinsets/zero.md).

## Topics

### Creating edge insets

- [UIEdgeInsetsMake](uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md): Creates an edge insets structure with the specified edges.

### Getting the edge values

- [bottom](uiedgeinsets/bottom.md): The bottom edge inset value.
- [left](uiedgeinsets/left.md): The left edge inset value.
- [right](uiedgeinsets/right.md): The right edge inset value.
- [top](uiedgeinsets/top.md): The top edge inset value.

### Managing edge insets

- [UIEdgeInsetsInsetRect](uiedgeinsetsinsetrect.md): Adjusts a rectangle by the given edge insets.

### Converting to and from strings

- [NSStringFromUIEdgeInsets](nsstringfromuiedgeinsets.md): Returns a string formatted to contain the data from an edge insets structure.
- [UIEdgeInsetsFromString](uiedgeinsetsfromstring.md): Returns a UIKit edge insets structure based on the data in the specified string.

### Getting the empty edge insets

- [UIEdgeInsetsZero](uiedgeinsets/zero.md): An edge insets struct whose top, left, bottom, and right fields are all set to `0`.

### Comparing edge insets

- [UIEdgeInsetsEqualToEdgeInsets](uiedgeinsetsequaltoedgeinsets.md): Returns a Boolean value indicating whether the two edge insets are the same.

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.
