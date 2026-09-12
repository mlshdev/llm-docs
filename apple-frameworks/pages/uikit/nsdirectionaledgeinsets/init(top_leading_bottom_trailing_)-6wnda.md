> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:)-6wnda](https://developer.apple.com/documentation/uikit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:)-6wnda)

# init(top:leading:bottom:trailing:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a directional edge insets structure that contains the specified values.

## Declaration

```swift
init(top: CGFloat, leading: CGFloat, bottom: CGFloat, trailing: CGFloat)
```

## Parameters

- `top`: The inset on the top of an object.
- `leading`: The inset on the leading edge of an object. In a left-to-right system, the left edge is the leading edge. In a right-to-left system, the right edge is the leading edge.
- `bottom`: The inset on the bottom of an object.
- `trailing`: The inset on the trailing edge of an object. In a left-to-right system, the right edge is the trailing edge. In a right-to-left system, the left edge is the trailing edge.

<a id="return-value"></a>

## Return Value

An initialized inset structure.

## See Also

### Creating directional edge insets

- [init()](init%28%29.md): Creates a directional edge insets structure that contains default values.
- [init(\_:)](init%28__%29.md): Creates a directional edge insets structure from a SwiftUI edge insets structure.
