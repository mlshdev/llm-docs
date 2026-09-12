> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/title](https://developer.apple.com/documentation/appkit/nsstatusitem/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The string that is displayed at the status item’s position in the status bar.

> Use the [button](button.md) property.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If an image is also set, the title appears to the right of the image.

## See Also

### Deprecated

- [isEnabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendAction(on:)](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpMenu(\_:)](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackground(in:withHighlight:)](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The string that is displayed at the status item’s position in the status bar.

> Use the [button](button.md) property.

## Declaration

```objectivec
@property (copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

If an image is also set, the title appears to the right of the image.

## See Also

### Deprecated

- [enabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendActionOn:](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpStatusItemMenu:](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackgroundInRect:withHighlight:](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.
