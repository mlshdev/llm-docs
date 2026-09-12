> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/alphacontroladdedorremoved(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/alphacontroladdedorremoved(_:))

# alphaControlAddedOrRemoved(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the color panel’s opacity controls have been hidden or displayed.

## Declaration

```swift
@MainActor func alphaControlAddedOrRemoved(_ sender: Any?)
```

## Parameters

- `sender`: The color panel sending the message.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the opacity slider of the `NSColorPanel` is added or removed; you never invoke this method directly.

If the color picker has its own opacity controls, it should hide or display them, depending on whether the sender’s [showsAlpha](../nscolorpanel/showsalpha.md) method returns [false](https://developer.apple.com/documentation/swift/false) or [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling Events

- [viewSizeChanged(\_:)](viewsizechanged%28__%29.md): Tells the recever when the color panel’s view size changes in a way that might affect the color picker.

# alphaControlAddedOrRemoved: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent when the color panel’s opacity controls have been hidden or displayed.

## Declaration

```objectivec
- (void) alphaControlAddedOrRemoved:(id) sender;
```

## Parameters

- `sender`: The color panel sending the message.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when the opacity slider of the `NSColorPanel` is added or removed; you never invoke this method directly.

If the color picker has its own opacity controls, it should hide or display them, depending on whether the sender’s [showsAlpha](../nscolorpanel/showsalpha.md) method returns [false](https://developer.apple.com/documentation/swift/false) or [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Handling Events

- [viewSizeChanged:](viewsizechanged%28__%29.md): Tells the recever when the color panel’s view size changes in a way that might affect the color picker.
