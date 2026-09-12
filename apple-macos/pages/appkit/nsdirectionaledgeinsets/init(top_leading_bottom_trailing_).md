> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:)](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/init(top:leading:bottom:trailing:))

# init(top:leading:bottom:trailing:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

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
