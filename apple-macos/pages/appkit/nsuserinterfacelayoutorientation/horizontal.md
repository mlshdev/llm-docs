> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacelayoutorientation/horizontal](https://developer.apple.com/documentation/appkit/nsuserinterfacelayoutorientation/horizontal)

# NSUserInterfaceLayoutOrientation.horizontal (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.9+

The horizontal orientation.

## Declaration

```swift
case horizontal
```

<a id="Discussion"></a>

## Discussion

Use this constant in the [orientation](../nsstackview/orientation.md) property to specify a horizontal layout for the stack view. Use it to specify the horizontal user interface axis for clipping resistance and hugging priority.

The leading, center, and trailing gravity areas in a horizontal stack view are arranged left to right or right to left depending on the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property.

## See Also

### Constants

- [NSUserInterfaceLayoutOrientation.vertical](vertical.md): The vertical orientation.

# NSUserInterfaceLayoutOrientationHorizontal (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.9+

The horizontal orientation.

## Declaration

```objectivec
NSUserInterfaceLayoutOrientationHorizontal
```

<a id="Discussion"></a>

## Discussion

Use this constant in the [orientation](../nsstackview/orientation.md) property to specify a horizontal layout for the stack view. Use it to specify the horizontal user interface axis for clipping resistance and hugging priority.

The leading, center, and trailing gravity areas in a horizontal stack view are arranged left to right or right to left depending on the value of the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property.

## See Also

### Constants

- [NSUserInterfaceLayoutOrientationVertical](vertical.md): The vertical orientation.
