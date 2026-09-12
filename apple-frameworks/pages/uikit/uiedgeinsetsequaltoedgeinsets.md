> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiedgeinsetsequaltoedgeinsets](https://developer.apple.com/documentation/uikit/uiedgeinsetsequaltoedgeinsets)

# UIEdgeInsetsEqualToEdgeInsets

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a Boolean value indicating whether the two edge insets are the same.

## Declaration

```objectivec
static BOOL UIEdgeInsetsEqualToEdgeInsets(UIEdgeInsets insets1, UIEdgeInsets insets2);
```

## Parameters

- `insets1`: An edge inset to compare with `insets2`.
- `insets2`: An edge inset to compare with `insets1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the edge insets are the same; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [UIEdgeInsetsMake](uiedgeinsets/init%28top_left_bottom_right_%29-1s1t9.md): Creates an edge insets structure with the specified edges.
