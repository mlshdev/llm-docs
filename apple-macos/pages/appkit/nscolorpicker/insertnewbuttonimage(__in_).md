> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/insertnewbuttonimage(_:in:)](https://developer.apple.com/documentation/appkit/nscolorpicker/insertnewbuttonimage(_:in:))

# insertNewButtonImage(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image used for the specified button cell.

## Declaration

```swift
@MainActor func insertNewButtonImage(_ newButtonImage: NSImage, in buttonCell: NSButtonCell)
```

## Parameters

- `newButtonImage`: The image used for the specified button cell.
- `buttonCell`: The button cell for which to set the image.

<a id="Discussion"></a>

## Discussion

Called by the color panel to insert a new image into the specified cell by invoking `NSButtonCell`’s setImage: method. Override this method to customize `newButtonImage` before insertion in `buttonCell`.

## See Also

### Adding Button Images

- [provideNewButtonImage](providenewbuttonimage.md): The button image used by the color picker.

# insertNewButtonImage:in: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image used for the specified button cell.

## Declaration

```objectivec
- (void) insertNewButtonImage:(NSImage *) newButtonImage in:(NSButtonCell *) buttonCell;
```

## Parameters

- `newButtonImage`: The image used for the specified button cell.
- `buttonCell`: The button cell for which to set the image.

<a id="Discussion"></a>

## Discussion

Called by the color panel to insert a new image into the specified cell by invoking `NSButtonCell`’s setImage: method. Override this method to customize `newButtonImage` before insertion in `buttonCell`.

## See Also

### Adding Button Images

- [provideNewButtonImage](providenewbuttonimage.md): The button image used by the color picker.
