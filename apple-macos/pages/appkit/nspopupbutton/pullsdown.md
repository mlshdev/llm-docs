> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/pullsdown](https://developer.apple.com/documentation/appkit/nspopupbutton/pullsdown)

# pullsDown (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the button displays a pull-down or pop-up menu.

## Declaration

```swift
var pullsDown: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button displays a pull-down menu; otherwise, it displays a pop-up menu. This property does not affect the contents of the menu; it affects only the style of the menu.

When changing the menu type to a pull-down menu, if the menu was a pop-up menu and the cell alters the state of its selected items, this method sets the state of the currently selected item to `NSStateOff` before changing the menu type.

## See Also

### Related Documentation

- [init(frame:pullsDown:)](init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.

### Setting the type of menu

- [autoenablesItems](autoenablesitems.md): A Boolean value indicating whether the button enables and disables its items every time a user event occurs.

# pullsDown (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the button displays a pull-down or pop-up menu.

## Declaration

```objectivec
@property BOOL pullsDown;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button displays a pull-down menu; otherwise, it displays a pop-up menu. This property does not affect the contents of the menu; it affects only the style of the menu.

When changing the menu type to a pull-down menu, if the menu was a pop-up menu and the cell alters the state of its selected items, this method sets the state of the currently selected item to `NSStateOff` before changing the menu type.

## See Also

### Related Documentation

- [initWithFrame:pullsDown:](init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.

### Setting the type of menu

- [autoenablesItems](autoenablesitems.md): A Boolean value indicating whether the button enables and disables its items every time a user event occurs.
