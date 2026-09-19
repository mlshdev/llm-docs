> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiedgeinsets/init(top:left:bottom:right:)-6ff7

# init(top:left:bottom:right:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Creates an edge insets structure with the specified edges.

## Declaration

```swift
init(top: CGFloat, left: CGFloat, bottom: CGFloat, right: CGFloat)
```

## Parameters

- `top`: The inset on the top of an object.
- `left`: The inset on the left of an object.
- `bottom`: The inset on the bottom of an object.
- `right`: The inset on the right of an object.

<a id="return-value"></a>

## Return Value

An initialized inset structure.

<a id="Discussion"></a>

## Discussion

An inset is a margin around a rectangle. Positive values represent margins closer to the center of the rectangle, while negative values represent margins further from the center.

## See Also

### Creating edge insets

- [init()](init%28%29.md): Initializes the edge insets structure to default values.
