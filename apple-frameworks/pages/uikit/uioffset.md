> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uioffset](https://developer.apple.com/documentation/uikit/uioffset)

# UIOffset (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

A structure that specifies an amount to offset a position.

## Declaration

```swift
struct UIOffset
```

<a id="overview"></a>

## Overview

The components are positive for right or down, negative for left or up.

See also [Initializing offsets](uioffset.md#Initializing-offsets) and [zero](uioffset/zero.md).

## Topics

### Initializing offsets

- [init(horizontal:vertical:)](uioffset/init%28horizontal_vertical_%29-9wl8x.md): Creates an offset structure from the given components.
- [init()](uioffset/init%28%29.md): Creates an offset structure.

### Getting the offset values

- [horizontal](uioffset/horizontal.md): The amount of horizontal offset from a position.
- [vertical](uioffset/vertical.md): The amount of vertical offset from a position.

### Comparing offsets

- [UIOffsetEqualToOffset(\_:\_:)](uioffsetequaltooffset%28____%29.md): Deprecated. Returns a Boolean value that indicates whether two offsets are equal.

### Converting to and from strings

- [string(for:)](../foundation/nscoder/string%28for_%29-454dj.md): Returns a string formatted to contain the data from an offset structure.
- [uiOffset(for:)](../foundation/nscoder/uioffset%28for_%29.md): Returns a UIKit offset structure corresponding to the data in a given string.

### Getting the empty offset value

- [zero](uioffset/zero.md): An offset structure with no offset in the horizontal and vertical directions.

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

- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.

# UIOffset (Objective-C)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

A structure that specifies an amount to offset a position.

## Declaration

```objectivec
typedef struct UIOffset { ... } UIOffset;
```

<a id="overview"></a>

## Overview

The components are positive for right or down, negative for left or up.

See also [Initializing offsets](uioffset.md#Initializing-offsets) and [UIOffsetZero](uioffset/zero.md).

## Topics

### Initializing offsets

- [UIOffsetMake](uioffset/init%28horizontal_vertical_%29-2bvnj.md): Returns an offset structure from the given components.

### Getting the offset values

- [horizontal](uioffset/horizontal.md): The amount of horizontal offset from a position.
- [vertical](uioffset/vertical.md): The amount of vertical offset from a position.

### Comparing offsets

- [UIOffsetEqualToOffset](uioffsetequaltooffset.md): Returns a Boolean value that indicates whether two offsets are equal.

### Converting to and from strings

- [NSStringFromUIOffset](nsstringfromuioffset.md): Returns a string formatted to contain the data from an offset structure.
- [UIOffsetFromString](uioffsetfromstring.md): Returns a UIKit offset structure corresponding to the data in a given string.

### Getting the empty offset value

- [UIOffsetZero](uioffset/zero.md): An offset structure with no offset in the horizontal and vertical directions.

## See Also

### Related types

- [UIAxis](uiaxis.md): A structure that specifies the layout axes.
- [UIEdgeInsets](uiedgeinsets.md): The inset distances for views.
- [NSDirectionalEdgeInsets](nsdirectionaledgeinsets.md): The inset distances for views, taking the user interface layout direction into account.
- [NSDirectionalRectEdge](nsdirectionalrectedge.md): Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
- [NSRectAlignment](nsrectalignment.md): Constants that specify alignment to an edge or a set of edges depending on the user interface layout direction.
- [UIKit macros](uikit-macros.md): Macros that UIKit defines.
