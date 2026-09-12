> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionaledgeinsets](https://developer.apple.com/documentation/uikit/nsdirectionaledgeinsets)

# NSDirectionalEdgeInsets (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The inset distances for views, taking the user interface layout direction into account.

## Declaration

```swift
struct NSDirectionalEdgeInsets
```

## Topics

### Creating directional edge insets

- [init(top:leading:bottom:trailing:)](nsdirectionaledgeinsets/init%28top_leading_bottom_trailing_%29-6wnda.md): Creates a directional edge insets structure that contains the specified values.
- [init()](nsdirectionaledgeinsets/init%28%29.md): Creates a directional edge insets structure that contains default values.
- [init(\_:)](nsdirectionaledgeinsets/init%28__%29.md): Creates a directional edge insets structure from a SwiftUI edge insets structure.

### Getting the edge values

- [bottom](nsdirectionaledgeinsets/bottom.md): The bottom edge inset value.
- [leading](nsdirectionaledgeinsets/leading.md): The leading edge inset value.
- [top](nsdirectionaledgeinsets/top.md): The top edge inset value.
- [trailing](nsdirectionaledgeinsets/trailing.md): The trailing edge inset value.

### Converting to and from strings

- [string(for:)](../foundation/nscoder/string%28for_%29-hp8b.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [nsDirectionalEdgeInsets(for:)](../foundation/nscoder/nsdirectionaledgeinsets%28for_%29.md): Returns a directional edge insets structure based on data in the specified string.

### Getting the empty edge insets

- [zero](nsdirectionaledgeinsets/zero.md): A directional edge insets structure whose top, leading, bottom, and trailing fields all have a value of `0`.

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
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.

# NSDirectionalEdgeInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 4.0+

The inset distances for views, taking the user interface layout direction into account.

## Declaration

```objectivec
typedef struct NSDirectionalEdgeInsets { ... } NSDirectionalEdgeInsets;
```

## Topics

### Creating directional edge insets

- [NSDirectionalEdgeInsetsMake](nsdirectionaledgeinsets/init%28top_leading_bottom_trailing_%29-1th5h.md): Creates a directional edge insets structure that contains the specified values.

### Getting the edge values

- [bottom](nsdirectionaledgeinsets/bottom.md): The bottom edge inset value.
- [leading](nsdirectionaledgeinsets/leading.md): The leading edge inset value.
- [top](nsdirectionaledgeinsets/top.md): The top edge inset value.
- [trailing](nsdirectionaledgeinsets/trailing.md): The trailing edge inset value.

### Converting to and from strings

- [NSStringFromDirectionalEdgeInsets](nsstringfromdirectionaledgeinsets.md): Returns a string formatted to contain the data from a directional edge insets structure.
- [NSDirectionalEdgeInsetsFromString](nsdirectionaledgeinsetsfromstring.md): Returns a directional edge insets structure based on data in the specified string.

### Getting the empty edge insets

- [NSDirectionalEdgeInsetsZero](nsdirectionaledgeinsets/zero.md): A directional edge insets structure whose top, leading, bottom, and trailing fields all have a value of `0`.

### Comparing directional edge insets

- [NSDirectionalEdgeInsetsEqualToDirectionalEdgeInsets](nsdirectionaledgeinsetsequaltodirectionaledgeinsets.md): Compares two directional edge insets to determine if they’re the same.

## See Also

### Related types

- [UIOffset](uioffset.md): A structure that specifies an amount to offset a position.
- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.
