> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/resetsearchbuttoncell()](https://developer.apple.com/documentation/appkit/nssearchfieldcell/resetsearchbuttoncell())

# resetSearchButtonCell() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the search button cell to its default attributes.

## Declaration

```swift
func resetSearchButtonCell()
```

<a id="Discussion"></a>

## Discussion

This method resets the target, action, regular image, and pressed image for the search button cell. By default, when users click the search button or press the Return key, the action defined for the receiver is sent to its designated target. This method gives you a way to customize the search button for specific situations and then reset the button defaults without having to undo changes individually.

## See Also

### Managing buttons

- [searchButtonCell](searchbuttoncell.md): The button cell used to display the search-button image.
- [cancelButtonCell](cancelbuttoncell.md): The button cell used to display the cancel-button image.
- [resetCancelButtonCell()](resetcancelbuttoncell%28%29.md): Resets the cancel button cell to its default attributes.

# resetSearchButtonCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the search button cell to its default attributes.

## Declaration

```objectivec
- (void) resetSearchButtonCell;
```

<a id="Discussion"></a>

## Discussion

This method resets the target, action, regular image, and pressed image for the search button cell. By default, when users click the search button or press the Return key, the action defined for the receiver is sent to its designated target. This method gives you a way to customize the search button for specific situations and then reset the button defaults without having to undo changes individually.

## See Also

### Managing buttons

- [searchButtonCell](searchbuttoncell.md): The button cell used to display the search-button image.
- [cancelButtonCell](cancelbuttoncell.md): The button cell used to display the cancel-button image.
- [resetCancelButtonCell](resetcancelbuttoncell%28%29.md): Resets the cancel button cell to its default attributes.
