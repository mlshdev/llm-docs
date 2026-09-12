> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionaledgeinsetsequaltodirectionaledgeinsets](https://developer.apple.com/documentation/uikit/nsdirectionaledgeinsetsequaltodirectionaledgeinsets)

# NSDirectionalEdgeInsetsEqualToDirectionalEdgeInsets

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Compares two directional edge insets to determine if they’re the same.

## Declaration

```objectivec
static BOOL NSDirectionalEdgeInsetsEqualToDirectionalEdgeInsets(NSDirectionalEdgeInsets insets1, NSDirectionalEdgeInsets insets2);
```

## Parameters

- `insets1`: An edge inset to compare with insets2.
- `insets2`: An edge inset to compare with insets1.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the edge insets are the same; otherwise, [false](https://developer.apple.com/documentation/swift/false).
