> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:menu:for:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:menu:for:at:))

# textView(\_:menu:for:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows delegate to control the context menu returned by the text view.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, menu: NSMenu, for event: NSEvent, at charIndex: Int) -> NSMenu?
```

## Parameters

- `view`: The text view sending the message.
- `menu`: The proposed contextual menu.
- `event`: The mouse-down event that initiated the contextual menu’s display.
- `charIndex`: The character position where the mouse button was clicked.

<a id="return-value"></a>

## Return Value

A menu to use as the contextual menu. You can return `menu` unaltered, or you can return a customized menu.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to control the context menu returned by [menu(for:)](../nsview/menu%28for_%29.md).

# textView:menu:forEvent:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Allows delegate to control the context menu returned by the text view.

## Declaration

```objectivec
- (NSMenu *) textView:(NSTextView *) view menu:(NSMenu *) menu forEvent:(NSEvent *) event atIndex:(NSUInteger) charIndex;
```

## Parameters

- `view`: The text view sending the message.
- `menu`: The proposed contextual menu.
- `event`: The mouse-down event that initiated the contextual menu’s display.
- `charIndex`: The character position where the mouse button was clicked.

<a id="return-value"></a>

## Return Value

A menu to use as the contextual menu. You can return `menu` unaltered, or you can return a customized menu.

<a id="Discussion"></a>

## Discussion

This method allows the delegate to control the context menu returned by [menuForEvent:](../nsview/menu%28for_%29.md).
