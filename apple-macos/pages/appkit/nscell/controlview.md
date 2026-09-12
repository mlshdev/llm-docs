> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/controlview](https://developer.apple.com/documentation/appkit/nscell/controlview)

# controlView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view associated with the cell.

## Declaration

```swift
unowned(unsafe) var controlView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the view associated with the cell. This view is normally an [NSControl](../nscontrol.md) object. The default value of this property is `nil`.

## See Also

### Drawing and Highlighting

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColor(withFrame:in:)](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [isHighlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.

# controlView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view associated with the cell.

## Declaration

```objectivec
@property (assign, nullable) NSView * controlView;
```

<a id="Discussion"></a>

## Discussion

This property contains the view associated with the cell. This view is normally an [NSControl](../nscontrol.md) object. The default value of this property is `nil`.

## See Also

### Drawing and Highlighting

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColorWithFrame:inView:](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
- [highlighted](ishighlighted.md): A Boolean value indicating whether the cell has a highlighted appearance.
