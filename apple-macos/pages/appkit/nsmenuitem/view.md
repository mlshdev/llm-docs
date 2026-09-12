> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/view](https://developer.apple.com/documentation/appkit/nsmenuitem/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The content view for the menu item.

## Declaration

```swift
var view: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

A menu item with a view does not draw its title, state, font, or other standard drawing attributes, and assigns drawing responsibility entirely to the view. Keyboard equivalents and type-select continue to use the key equivalent and title as normal. For more information, see [NSMenuItem](../nsmenuitem.md).

By default, a menu item has a `nil` view.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The content view for the menu item.

## Declaration

```objectivec
@property (strong, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

A menu item with a view does not draw its title, state, font, or other standard drawing attributes, and assigns drawing responsibility entirely to the view. Keyboard equivalents and type-select continue to use the key equivalent and title as normal. For more information, see [NSMenuItem](../nsmenuitem.md).

By default, a menu item has a `nil` view.
