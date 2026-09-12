> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbuttoncell/init(textcell:pullsdown:)](https://developer.apple.com/documentation/appkit/nspopupbuttoncell/init(textcell:pullsdown:))

# init(textCell:pullsDown:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an `NSPopUpButtonCell` object initialized with the specified title.

## Declaration

```swift
init(textCell stringValue: String, pullsDown pullDown: Bool)
```

## Parameters

- `stringValue`: The title of the first menu. You may specify an empty string if you do not want to add an initial menu item.
- `pullDown`: [true](https://developer.apple.com/documentation/swift/true) if you want the receiver to display a pull-down menu; otherwise, [false](https://developer.apple.com/documentation/swift/false) if you want it to display a pop-up menu.

<a id="return-value"></a>

## Return Value

An initialized `NSPopUpButtonCell` object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

This menu item is assigned the default pop-up button action that displays the menu. To set the action and target, use the setAction: and setTarget: methods of the item’s corresponding [NSMenuItem](../nsmenuitem.md) object.

This method is the designated initializer of the class.

## See Also

### Related Documentation

- [init(frame:pullsDown:)](../nspopupbutton/init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.

# initTextCell:pullsDown: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an `NSPopUpButtonCell` object initialized with the specified title.

## Declaration

```objectivec
- (instancetype) initTextCell:(NSString *) stringValue pullsDown:(BOOL) pullDown;
```

## Parameters

- `stringValue`: The title of the first menu. You may specify an empty string if you do not want to add an initial menu item.
- `pullDown`: [true](https://developer.apple.com/documentation/swift/true) if you want the receiver to display a pull-down menu; otherwise, [false](https://developer.apple.com/documentation/swift/false) if you want it to display a pop-up menu.

<a id="return-value"></a>

## Return Value

An initialized `NSPopUpButtonCell` object, or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

This menu item is assigned the default pop-up button action that displays the menu. To set the action and target, use the setAction: and setTarget: methods of the item’s corresponding [NSMenuItem](../nsmenuitem.md) object.

This method is the designated initializer of the class.

## See Also

### Related Documentation

- [initWithFrame:pullsDown:](../nspopupbutton/init%28frame_pullsdown_%29.md): Returns an `NSPopUpButton` object initialized to the specified dimensions.
