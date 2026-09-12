> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontrol/menu](https://developer.apple.com/documentation/appkit/nspathcontrol/menu)

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The menu that is used for the path control’s cells.

## Declaration

```swift
var menu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

This property overrides the [NSView](../nsview.md) implementation of `menu` and forwards the message to the `NSPathControlCell`.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The menu that is used for the path control’s cells.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

This property overrides the [NSView](../nsview.md) implementation of `menu` and forwards the message to the `NSPathControlCell`.
