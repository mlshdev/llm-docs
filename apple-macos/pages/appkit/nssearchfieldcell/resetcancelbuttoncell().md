> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/resetcancelbuttoncell()](https://developer.apple.com/documentation/appkit/nssearchfieldcell/resetcancelbuttoncell())

# resetCancelButtonCell() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the cancel button cell to its default attributes.

## Declaration

```swift
func resetCancelButtonCell()
```

<a id="Discussion"></a>

## Discussion

This method resets the target, action, regular image, and pressed image for the cancel button cell. By default, when users click the cancel button, the `delete:` action message is sent up the responder chain to the first `NSText` object that can handle it. This method gives you a way to customize the cancel button for specific situations and then reset the button defaults without having to undo changes individually.

## See Also

### Managing buttons

- [searchButtonCell](searchbuttoncell.md): The button cell used to display the search-button image.
- [resetSearchButtonCell()](resetsearchbuttoncell%28%29.md): Resets the search button cell to its default attributes.
- [cancelButtonCell](cancelbuttoncell.md): The button cell used to display the cancel-button image.

# resetCancelButtonCell (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resets the cancel button cell to its default attributes.

## Declaration

```objectivec
- (void) resetCancelButtonCell;
```

<a id="Discussion"></a>

## Discussion

This method resets the target, action, regular image, and pressed image for the cancel button cell. By default, when users click the cancel button, the `delete:` action message is sent up the responder chain to the first `NSText` object that can handle it. This method gives you a way to customize the cancel button for specific situations and then reset the button defaults without having to undo changes individually.

## See Also

### Managing buttons

- [searchButtonCell](searchbuttoncell.md): The button cell used to display the search-button image.
- [resetSearchButtonCell](resetsearchbuttoncell%28%29.md): Resets the search button cell to its default attributes.
- [cancelButtonCell](cancelbuttoncell.md): The button cell used to display the cancel-button image.
