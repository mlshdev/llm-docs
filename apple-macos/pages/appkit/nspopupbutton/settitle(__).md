> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/settitle(_:)](https://developer.apple.com/documentation/appkit/nspopupbutton/settitle(_:))

# setTitle(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

## Declaration

```swift
func setTitle(_ string: String)
```

## Parameters

- `string`: The string to display.

<a id="Discussion"></a>

## Discussion

If the receiver displays a pop-up menu, this method changes the current item to be the item with the specified title, adding a new item by that name if one does not already exist. If the receiver displays a pull-down list, this method sets its title to the specified string.

# setTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the string displayed in the receiver when the user isn’t pressing the mouse button.

## Declaration

```objectivec
- (void) setTitle:(NSString *) string;
```

## Parameters

- `string`: The string to display.

<a id="Discussion"></a>

## Discussion

If the receiver displays a pop-up menu, this method changes the current item to be the item with the specified title, adding a new item by that name if one does not already exist. If the receiver displays a pull-down list, this method sets its title to the specified string.
