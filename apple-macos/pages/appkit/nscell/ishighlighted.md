> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/ishighlighted](https://developer.apple.com/documentation/appkit/nscell/ishighlighted)

# isHighlighted (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell has a highlighted appearance.

## Declaration

```swift
var isHighlighted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell draws itself with a highlighted appearance. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Assigning a new value to this property has no effect by default. Subclasses can override the property to provide a highlighting behavior. For example, the [NSButtonCell](../nsbuttoncell.md) class overrides this property, so that when the value is [true](https://developer.apple.com/documentation/swift/true) the button draws the button with a highlight appearance specified by [NSCell.Attribute.cellLightsByBackground](attribute/celllightsbybackground.md), [NSCell.Attribute.cellLightsByContents](attribute/celllightsbycontents.md), or [NSCell.Attribute.cellLightsByGray](attribute/celllightsbygray.md).

## See Also

### Drawing and Highlighting

- [draw(withFrame:in:)](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColor(withFrame:in:)](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInterior(withFrame:in:)](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight(\_:withFrame:in:)](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.

# highlighted (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell has a highlighted appearance.

## Declaration

```objectivec
@property (getter=isHighlighted) BOOL highlighted;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell draws itself with a highlighted appearance. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Assigning a new value to this property has no effect by default. Subclasses can override the property to provide a highlighting behavior. For example, the [NSButtonCell](../nsbuttoncell.md) class overrides this property, so that when the value is [true](https://developer.apple.com/documentation/swift/true) the button draws the button with a highlight appearance specified by [NSCellLightsByBackground](attribute/celllightsbybackground.md), [NSCellLightsByContents](attribute/celllightsbycontents.md), or [NSCellLightsByGray](attribute/celllightsbygray.md).

## See Also

### Drawing and Highlighting

- [drawWithFrame:inView:](draw%28withframe_in_%29.md): Draws the receiver’s border and then draws the interior of the cell.
- [highlightColorWithFrame:inView:](highlightcolor%28withframe_in_%29.md): Returns the color the receiver uses when drawing the selection highlight.
- [drawInteriorWithFrame:inView:](drawinterior%28withframe_in_%29.md): Draws the interior portion of the receiver, which includes the image or text portion but does not include the border.
- [controlView](controlview.md): The view associated with the cell.
- [highlight:withFrame:inView:](highlight%28__withframe_in_%29.md): Redraws the receiver with the specified highlight setting.
