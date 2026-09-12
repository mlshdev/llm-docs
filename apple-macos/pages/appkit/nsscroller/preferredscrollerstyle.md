> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/preferredscrollerstyle](https://developer.apple.com/documentation/appkit/nsscroller/preferredscrollerstyle)

# preferredScrollerStyle (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns the style of scrollers that applications should use wherever possible.

## Declaration

```swift
class var preferredScrollerStyle: NSScroller.Style { get }
```

<a id="return-value"></a>

## Return Value

The style of scrollers that applications should use wherever possible.

<a id="Discussion"></a>

## Discussion

The preferred scroller style is determined by the Appearance preference panel’s “Show scroll bars” setting for the current user, and—when the user’s preference is set to “Automatically based on input device”—by the set of built-in and connected pointing devices and the user’s scroll capability preference settings for them. The preferred scroller style may therefore change over time, and applications should be prepared to adapt their user interfaces to the new scroller style if needed.

In most cases, updating to a new scroller style is automatic: When the preferred scroller style changes, AppKit notifies all [NSScrollView](../nsscrollview.md) instances, setting the [scrollerStyle](scrollerstyle.md) property of each with the new style, which causes each scroll view to automatically re-tile (update its layout) to adapt to the new scroller style. Some `NSScrollView` instances may refuse the new scroller style setting if they cannot accommodate it for compatibility reasons (the presence of accessory views or legacy scroller subclasses prevent use of overlay scrollers), but most instances will switch to the specified new preferred scroller style.

If you need to be notified of changes to the preferred scroller style, you can register to receive [preferredScrollerStyleDidChangeNotification](preferredscrollerstyledidchangenotification.md) notifications.

## See Also

### Managing Presentation Style

- [scrollerStyle](scrollerstyle.md): The scroller style for this scroller.
- [knobStyle](knobstyle-swift.property.md): The scroller’s knob style.

# preferredScrollerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Returns the style of scrollers that applications should use wherever possible.

## Declaration

```objectivec
@property (class, readonly) NSScrollerStyle preferredScrollerStyle;
```

<a id="return-value"></a>

## Return Value

The style of scrollers that applications should use wherever possible.

<a id="Discussion"></a>

## Discussion

The preferred scroller style is determined by the Appearance preference panel’s “Show scroll bars” setting for the current user, and—when the user’s preference is set to “Automatically based on input device”—by the set of built-in and connected pointing devices and the user’s scroll capability preference settings for them. The preferred scroller style may therefore change over time, and applications should be prepared to adapt their user interfaces to the new scroller style if needed.

In most cases, updating to a new scroller style is automatic: When the preferred scroller style changes, AppKit notifies all [NSScrollView](../nsscrollview.md) instances, setting the [scrollerStyle](scrollerstyle.md) property of each with the new style, which causes each scroll view to automatically re-tile (update its layout) to adapt to the new scroller style. Some `NSScrollView` instances may refuse the new scroller style setting if they cannot accommodate it for compatibility reasons (the presence of accessory views or legacy scroller subclasses prevent use of overlay scrollers), but most instances will switch to the specified new preferred scroller style.

If you need to be notified of changes to the preferred scroller style, you can register to receive [NSPreferredScrollerStyleDidChangeNotification](preferredscrollerstyledidchangenotification.md) notifications.

## See Also

### Managing Presentation Style

- [scrollerStyle](scrollerstyle.md): The scroller style for this scroller.
- [knobStyle](knobstyle-swift.property.md): The scroller’s knob style.
