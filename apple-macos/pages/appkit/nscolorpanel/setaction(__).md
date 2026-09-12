> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpanel/setaction(_:)](https://developer.apple.com/documentation/appkit/nscolorpanel/setaction(_:))

# setAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the color panel’s action message.

## Declaration

```swift
func setAction(_ selector: Selector?)
```

## Parameters

- `selector`: The action message.

<a id="discussion"></a>

## Discussion

When you select a color in the color panel `NSColorPanel` sends its action to its target, provided that neither the action nor the target is `nil`. The action is `NULL` by default.

## See Also

### Configuring the color panel

- [accessoryView](accessoryview.md): The accessory view.
- [isContinuous](iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setTarget(\_:)](settarget%28__%29.md): Sets the target of the receiver.
- [showsAlpha](showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.

# setAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the color panel’s action message.

## Declaration

```objectivec
- (void) setAction:(SEL) selector;
```

## Parameters

- `selector`: The action message.

<a id="discussion"></a>

## Discussion

When you select a color in the color panel `NSColorPanel` sends its action to its target, provided that neither the action nor the target is `nil`. The action is `NULL` by default.

## See Also

### Configuring the color panel

- [accessoryView](accessoryview.md): The accessory view.
- [continuous](iscontinuous.md): A Boolean value indicating whether the receiver continuously sends the action message to the target.
- [setTarget:](settarget%28__%29.md): Sets the target of the receiver.
- [showsAlpha](showsalpha.md): A Boolean value that indicates whether the receiver shows alpha values and an opacity slider.
