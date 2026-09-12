> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/sendaction(on:)](https://developer.apple.com/documentation/appkit/nsstatusitem/sendaction(on:))

# sendAction(on:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the conditions on which the status item sends action messages to its target.

> Use the [button](button.md) property.

## Declaration

```swift
func sendAction(on mask: NSEvent.EventTypeMask) -> Int
```

## Parameters

- `mask`: Takes one or more of the following bit masks described in `Getting Unicode Values` section of the `NSEvent` class reference: `NSLeftMouseUpMask`, `NSLeftMouseDownMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask`. Bitwise-OR multiple bit masks.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

## See Also

### Deprecated

- [isEnabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [popUpMenu(\_:)](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackground(in:withHighlight:)](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.

# sendActionOn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the conditions on which the status item sends action messages to its target.

> Use the [button](button.md) property.

## Declaration

```objectivec
- (NSInteger) sendActionOn:(NSEventMask) mask;
```

## Parameters

- `mask`: Takes one or more of the following bit masks described in `Getting Unicode Values` section of the `NSEvent` class reference: `NSLeftMouseUpMask`, `NSLeftMouseDownMask`, `NSLeftMouseDraggedMask`, and `NSPeriodicMask`. Bitwise-OR multiple bit masks.

<a id="return-value"></a>

## Return Value

A bit mask containing the previous settings. This bit mask uses the same values as specified in the `mask` parameter.

## See Also

### Deprecated

- [enabled](isenabled.md): Deprecated. A Boolean that indicates whether the status item is enabled to respond to clicks.
- [doubleAction](doubleaction.md): Deprecated. The selector that is sent to the status item’s target when the status item is double-clicked.
- [popUpStatusItemMenu:](popupmenu%28__%29.md): Deprecated. Displays a menu under a custom status bar item.
- [title](title.md): Deprecated. The string that is displayed at the status item’s position in the status bar.
- [attributedTitle](attributedtitle.md): Deprecated. The attributed string that is displayed at the status item’s position in the status bar.
- [image](image.md): Deprecated. The image that is displayed at the status item’s position in the status bar.
- [alternateImage](alternateimage.md): Deprecated. The alternate image to be displayed when a status bar item is highlighted.
- [highlightMode](highlightmode.md): Deprecated. A Boolean that indicates whether the status item is highlighted when it is clicked.
- [toolTip](tooltip.md): Deprecated. The tool tip string that is displayed when the cursor pauses over the status item.
- [drawStatusBarBackgroundInRect:withHighlight:](drawstatusbarbackground%28in_withhighlight_%29.md): Deprecated. Draws the menu background pattern for a custom status-bar item in regular or highlight pattern.
