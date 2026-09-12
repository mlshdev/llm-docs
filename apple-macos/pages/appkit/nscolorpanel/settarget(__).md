> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/settarget(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/settarget(_:))

# setTarget(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the target of the receiver.

## Declaration

```swift
func setTarget(_ target: Any?)
```

## Parameters

- `target`: The target of the receiver. When you select a color in the color panel `NSColorPanel` sends its action to its target, provided that neither the action nor the target is `nil`. The target is `nil` by default.

## See Also

### Related Documentation

- [NSColorPanel](../nscolorpanel.md): A standard user interface for selecting color in an app.

### Configuring the color panel

- [accessoryView](accessoryview.md): The accessory view.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setAction(\_:)](setaction%28__%29.md): Sets the color panel’s action message.
- [showsAlpha](showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.

# setTarget: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the target of the receiver.

## Declaration

```objectivec
- (void) setTarget:(id) target;
```

## Parameters

- `target`: The target of the receiver. When you select a color in the color panel `NSColorPanel` sends its action to its target, provided that neither the action nor the target is `nil`. The target is `nil` by default.

## See Also

### Related Documentation

- [NSColorPanel](../nscolorpanel.md): A standard user interface for selecting color in an app.

### Configuring the color panel

- [accessoryView](accessoryview.md): The accessory view.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setAction:](setaction%28__%29.md): Sets the color panel’s action message.
- [showsAlpha](showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.
