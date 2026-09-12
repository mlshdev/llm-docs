> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/image](https://developer.apple.com/documentation/appkit/nsstatusitem/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The image that is displayed at the status item’s position in the status bar.

> Use the [button](button.md) property.

## Declaration

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If a title is also set, the image appears to the left of the title.

## See Also

### Deprecated

- [isEnabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendAction(on:)](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpMenu(\_:)](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackground(in:withHighlight:)](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The image that is displayed at the status item’s position in the status bar.

> Use the [button](button.md) property.

## Declaration

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

If a title is also set, the image appears to the left of the title.

## See Also

### Deprecated

- [enabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [sendActionOn:](sendaction%28on_%29.md): Deprecated. Sets the conditions on which the status item sends action messages to its target.
- [popUpStatusItemMenu:](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackgroundInRect:withHighlight:](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.
