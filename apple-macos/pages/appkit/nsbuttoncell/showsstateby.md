> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/showsstateby](https://developer.apple.com/documentation/appkit/nsbuttoncell/showsstateby)

# showsStateBy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The flags that indicate how the button cell shows its alternate state.

## Declaration

```swift
var showsStateBy: NSCell.StyleMask { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the logical `OR` of one or more of the cell masks described in the “Constants” section of [NSCell](../nscell.md).

If both `NSChangeGrayCellMask` and `NSChangeBackgroundCellMask` are specified, both are recorded, but the actual behavior depends on the button cell’s image. If the button has no image, or if the image has no alpha (transparency) data, `NSChangeGrayCellMask` is used. If the image exists and has alpha data, `NSChangeBackgroundCellMask` is used; this arrangement allows the color swap of the background to show through the image’s transparent pixels.

## See Also

### Displaying the Cell

- [highlightsBy](highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

# showsStateBy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The flags that indicate how the button cell shows its alternate state.

## Declaration

```objectivec
@property NSCellStyleMask showsStateBy;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the logical `OR` of one or more of the cell masks described in the “Constants” section of [NSCell](../nscell.md).

If both `NSChangeGrayCellMask` and `NSChangeBackgroundCellMask` are specified, both are recorded, but the actual behavior depends on the button cell’s image. If the button has no image, or if the image has no alpha (transparency) data, `NSChangeGrayCellMask` is used. If the image exists and has alpha data, `NSChangeBackgroundCellMask` is used; this arrangement allows the color swap of the background to show through the image’s transparent pixels.

## See Also

### Displaying the Cell

- [highlightsBy](highlightsby.md): A set of flags that indicate how the button highlights when it receives a mouse-down event (that is, when the button is pressed).
- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.
