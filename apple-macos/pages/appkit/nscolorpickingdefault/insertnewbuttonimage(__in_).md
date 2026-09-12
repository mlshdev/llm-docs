> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/insertnewbuttonimage(_:in:)](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/insertnewbuttonimage(_:in:))

# insertNewButtonImage(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image of a given button cell.

## Declaration

```swift
@MainActor func insertNewButtonImage(_ newButtonImage: NSImage, in buttonCell: NSButtonCell)
```

## Parameters

- `newButtonImage`: The image to set for the button cell.
- `buttonCell`: The `NSButtonCell` object that lets the user choose the picker from the color panel—the color picker’s representation in the  `NSMatrix` of the `NSColorPanel`.

<a id="Discussion"></a>

## Discussion

This method should perform application-specific manipulation of the image before it’s inserted and displayed by the button cell.

## See Also

### Configuring Color Pickers

- [setMode(\_:)](setmode%28__%29.md): Specifies the receiver’s mode.
- [provideNewButtonImage()](providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [minContentSize()](mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip()](buttontooltip%28%29.md): Provides the toolbar button help tag.

# insertNewButtonImage:in: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image of a given button cell.

## Declaration

```objectivec
- (void) insertNewButtonImage:(NSImage *) newButtonImage in:(NSButtonCell *) buttonCell;
```

## Parameters

- `newButtonImage`: The image to set for the button cell.
- `buttonCell`: The `NSButtonCell` object that lets the user choose the picker from the color panel—the color picker’s representation in the  `NSMatrix` of the `NSColorPanel`.

<a id="Discussion"></a>

## Discussion

This method should perform application-specific manipulation of the image before it’s inserted and displayed by the button cell.

## See Also

### Configuring Color Pickers

- [setMode:](setmode%28__%29.md): Specifies the receiver’s mode.
- [provideNewButtonImage](providenewbuttonimage%28%29.md): Provides the image of the button used to select the receiver in the color panel.
- [minContentSize](mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip](buttontooltip%28%29.md): Provides the toolbar button help tag.
