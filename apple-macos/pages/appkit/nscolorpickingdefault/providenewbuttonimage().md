> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingdefault/providenewbuttonimage()](https://developer.apple.com/documentation/appkit/nscolorpickingdefault/providenewbuttonimage())

# provideNewButtonImage() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Provides the image of the button used to select the receiver in the color panel.

## Declaration

```swift
@MainActor func provideNewButtonImage() -> NSImage
```

<a id="return-value"></a>

## Return Value

The image for the mode button the user uses to select this picker in the color panel; that is, the color picker’s representation in the  `NSMatrix` of the `NSColorPanel`.

<a id="discussion"></a>

## Discussion

This image is the same one the color panel uses as an argument when sending the [insertNewButtonImage(\_:in:)](insertnewbuttonimage%28__in_%29.md) message.

## See Also

### Configuring Color Pickers

- [setMode(\_:)](setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage(\_:in:)](insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [minContentSize()](mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip()](buttontooltip%28%29.md): Provides the toolbar button help tag.

# provideNewButtonImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Provides the image of the button used to select the receiver in the color panel.

## Declaration

```objectivec
- (NSImage *) provideNewButtonImage;
```

<a id="return-value"></a>

## Return Value

The image for the mode button the user uses to select this picker in the color panel; that is, the color picker’s representation in the  `NSMatrix` of the `NSColorPanel`.

<a id="discussion"></a>

## Discussion

This image is the same one the color panel uses as an argument when sending the [insertNewButtonImage:in:](insertnewbuttonimage%28__in_%29.md) message.

## See Also

### Configuring Color Pickers

- [setMode:](setmode%28__%29.md): Specifies the receiver’s mode.
- [insertNewButtonImage:in:](insertnewbuttonimage%28__in_%29.md): Sets the image of a given button cell.
- [minContentSize](mincontentsize%28%29.md): Indicates the receiver’s minimum content size.
- [buttonToolTip](buttontooltip%28%29.md): Provides the toolbar button help tag.
