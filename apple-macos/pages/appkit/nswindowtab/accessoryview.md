> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowtab/accessoryview](https://developer.apple.com/documentation/appkit/nswindowtab/accessoryview)

# accessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An optional accessory view for the tab.

## Declaration

```swift
var accessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

You can customize the window tab by adding an accessory view that displays alongside the tab’s title.

The [translatesAutoresizingMaskIntoConstraints](../nsview/translatesautoresizingmaskintoconstraints.md) property is automatically set to [false](https://developer.apple.com/documentation/swift/false) on the view. Constraints can be created and activated to specify the view’s width and height values. A constraint is automatically added to vertically center the view, and to right align the view within the tab.

# accessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

An optional accessory view for the tab.

## Declaration

```objectivec
@property (strong, nullable) NSView * accessoryView;
```

<a id="Discussion"></a>

## Discussion

You can customize the window tab by adding an accessory view that displays alongside the tab’s title.

The [translatesAutoresizingMaskIntoConstraints](../nsview/translatesautoresizingmaskintoconstraints.md) property is automatically set to [false](https://developer.apple.com/documentation/swift/false) on the view. Constraints can be created and activated to specify the view’s width and height values. A constraint is automatically added to vertically center the view, and to right align the view within the tab.
