> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdirectionaledgeinsets](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets)

# NSDirectionalEdgeInsets (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.15+

The inset distances for views, taking the user interface layout direction into account.

## Declaration

```swift
struct NSDirectionalEdgeInsets
```

## Topics

### Creating directional edge insets

- [init()](nsdirectionaledgeinsets/init%28%29.md): Creates a directional edge insets structure that contains default values.
- [init(top:leading:bottom:trailing:)](nsdirectionaledgeinsets/init%28top_leading_bottom_trailing_%29.md): Creates a directional edge insets structure that contains the specified values.

### Getting the edge values

- [bottom](nsdirectionaledgeinsets/bottom.md): The bottom edge inset value.
- [leading](nsdirectionaledgeinsets/leading.md): The leading edge inset value.
- [top](nsdirectionaledgeinsets/top.md): The top edge inset value.
- [trailing](nsdirectionaledgeinsets/trailing.md): The trailing edge inset value.

### Converting to and from strings

- [string(for:)](https://developer.apple.com/documentation/foundation/nscoder/string%28for:%29-hp8b): Returns a string formatted to contain the data from a directional edge insets structure.
- [nsDirectionalEdgeInsets(for:)](https://developer.apple.com/documentation/foundation/nscoder/nsdirectionaledgeinsets%28for:%29): Returns a directional edge insets structure based on data in the specified string.

### Getting the empty edge insets

- [NSDirectionalEdgeInsetsZero](nsdirectionaledgeinsetszero.md): A directional edge insets structure whose top, leading, bottom, and trailing fields all have a value of `0`.

### Initializers

- [init(\_:)](nsdirectionaledgeinsets/init%28__%29.md): Create edge insets from the equivalent EdgeInsets.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related types

- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md)

# NSDirectionalEdgeInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The inset distances for views, taking the user interface layout direction into account.

## Declaration

```objectivec
typedef struct NSDirectionalEdgeInsets { ... } NSDirectionalEdgeInsets;
```

## Topics

### Creating directional edge insets

- [NSDirectionalEdgeInsetsMake](nsdirectionaledgeinsetsmake.md)

### Getting the edge values

- [bottom](nsdirectionaledgeinsets/bottom.md): The bottom edge inset value.
- [leading](nsdirectionaledgeinsets/leading.md): The leading edge inset value.
- [top](nsdirectionaledgeinsets/top.md): The top edge inset value.
- [trailing](nsdirectionaledgeinsets/trailing.md): The trailing edge inset value.

### Getting the empty edge insets

- [NSDirectionalEdgeInsetsZero](nsdirectionaledgeinsetszero.md): A directional edge insets structure whose top, leading, bottom, and trailing fields all have a value of `0`.

## See Also

### Related types

- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md)
