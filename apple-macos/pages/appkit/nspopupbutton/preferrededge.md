> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/preferrededge](https://developer.apple.com/documentation/appkit/nspopupbutton/preferrededge)

# preferredEdge (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The edge of the button on which to display the menu when screen space is constrained.

## Declaration

```swift
var preferredEdge: NSRectEdge { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values include [NSMinXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminxedge), [NSMinYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminyedge), [NSMaxXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxxedge), or [NSMaxYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxyedge). For pull-down menus, the default behavior is to position the menu under the button. The bottom edge corresponds to the value `NSMaxYEdge` for flipped views or `NSMinYEdge` for unflipped views. For most pop-up menus, the `NSPopUpButton` object attempts to show the selected item directly over the button.

# preferredEdge (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The edge of the button on which to display the menu when screen space is constrained.

## Declaration

```objectivec
@property NSRectEdge preferredEdge;
```

<a id="Discussion"></a>

## Discussion

Possible values include [NSMinXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminxedge), [NSMinYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsminyedge), [NSMaxXEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxxedge), or [NSMaxYEdge](https://developer.apple.com/documentation/foundation/nsrectedge/nsmaxyedge). For pull-down menus, the default behavior is to position the menu under the button. The bottom edge corresponds to the value `NSMaxYEdge` for flipped views or `NSMinYEdge` for unflipped views. For most pop-up menus, the `NSPopUpButton` object attempts to show the selected item directly over the button.
