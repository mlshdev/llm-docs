> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/highlight(_:withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/highlight(_:withframe:in:))

# highlight(\_:withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Redraws the receiver with the specified highlight setting.

## Declaration

```swift
func highlight(_ flag: Bool, withFrame cellFrame: NSRect, in controlView: NSView)
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the cell is redrawn with a highlight; otherwise, if [false](https://developer.apple.com/documentation/swift/false), the highlight is removed.
- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

Note that the `NSCell` highlighting does not appear when highlighted cells are printed (although instances of `NSTextFieldCell`, `NSButtonCell`, and others can print themselves highlighted). Generally, you cannot depend on highlighting being printed because implementations of this method may choose (or not choose) to use transparency.

## See Also

### Drawing and Highlighting

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColor(withFrame:in:)](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

# highlight:withFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Redraws the receiver with the specified highlight setting.

## Declaration

```objectivec
- (void) highlight:(BOOL) flag withFrame:(NSRect) cellFrame inView:(NSView *) controlView;
```

## Parameters

- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the cell is redrawn with a highlight; otherwise, if [false](https://developer.apple.com/documentation/swift/false), the highlight is removed.
- `cellFrame`: The bounding rectangle of the receiver.
- `controlView`: The control that manages the cell.

<a id="Discussion"></a>

## Discussion

Note that the `NSCell` highlighting does not appear when highlighted cells are printed (although instances of `NSTextFieldCell`, `NSButtonCell`, and others can print themselves highlighted). Generally, you cannot depend on highlighting being printed because implementations of this method may choose (or not choose) to use transparency.

## See Also

### Drawing and Highlighting

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColorWithFrame:inView:](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
