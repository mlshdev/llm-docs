> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/doubleaction](https://developer.apple.com/documentation/appkit/nsstatusitem/doubleaction)

# doubleAction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The selector that is sent to the status item’s target when the status item is double-clicked.

> Use the [button](button.md) property.

## Declaration

```swift
var doubleAction: Selector? { get set }
```

## See Also

### Deprecated

- [isEnabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [sendAction(on:)](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpMenu(\_:)](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackground(in:withHighlight:)](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

# doubleAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The selector that is sent to the status item’s target when the status item is double-clicked.

> Use the [button](button.md) property.

## Declaration

```objectivec
@property (nullable) SEL doubleAction;
```

## See Also

### Deprecated

- [enabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [sendActionOn:](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpStatusItemMenu:](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackgroundInRect:withHighlight:](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.
