> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/drawstatusbarbackground(in:withhighlight:)](https://developer.apple.com/documentation/appkit/nsstatusitem/drawstatusbarbackground(in:withhighlight:))

# drawStatusBarBackground(in:withHighlight:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

> Custom views should not be set on a status item. Use the [button](button.md) property instead.

## Declaration

```swift
func drawStatusBarBackground(in rect: NSRect, withHighlight highlight: Bool)
```

## Parameters

- `rect`: A rectangle defining the area of a custom status-bar item.
- `highlight`: [true](https://developer.apple.com/documentation/swift/true) to draw the background pattern in the standard highlight pattern, [false](https://developer.apple.com/documentation/swift/false) to not highlight the pattern.

<a id="Discussion"></a>

## Discussion

You can use this method to help a custom status-bar item emulate the behavior of a standard item.

## See Also

### Deprecated

- [isEnabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendAction(on:)](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpMenu(\_:)](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.

# drawStatusBarBackgroundInRect:withHighlight: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

> Custom views should not be set on a status item. Use the [button](button.md) property instead.

## Declaration

```objectivec
- (void) drawStatusBarBackgroundInRect:(NSRect) rect withHighlight:(BOOL) highlight;
```

## Parameters

- `rect`: A rectangle defining the area of a custom status-bar item.
- `highlight`: [true](https://developer.apple.com/documentation/swift/true) to draw the background pattern in the standard highlight pattern, [false](https://developer.apple.com/documentation/swift/false) to not highlight the pattern.

<a id="Discussion"></a>

## Discussion

You can use this method to help a custom status-bar item emulate the behavior of a standard item.

## See Also

### Deprecated

- [enabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendActionOn:](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpStatusItemMenu:](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
