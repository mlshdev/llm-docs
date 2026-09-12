> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiedgeinsetsinsetrect](https://developer.apple.com/documentation/uikit/uiedgeinsetsinsetrect)

# UIEdgeInsetsInsetRect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Adjusts a rectangle by the given edge insets.

## Declaration

```objectivec
static CGRect UIEdgeInsetsInsetRect(CGRect rect, UIEdgeInsets insets);
```

## Parameters

- `rect`: The rectangle to be adjusted.
- `insets`: The edge insets to be applied to the adjustment.

<a id="return-value"></a>

## Return Value

A rectangle that is adjusted by the `UIEdgeInsets` structure passed in insets.

<a id="Discussion"></a>

## Discussion

This inline function increments the origin of `rect` and decrements the size of `rect` by applying the appropriate member values of the `UIEdgeInsets` structure.

## See Also

### Related Documentation

- [UIEdgeInsetsMake](uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md): Creates an edge insets structure with the specified edges.
