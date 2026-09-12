> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/allowsexpansiontooltips](https://developer.apple.com/documentation/appkit/nscontrol/allowsexpansiontooltips)

# allowsExpansionToolTips (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.

## Declaration

```swift
var allowsExpansionToolTips: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the expansion tool tip will expand; [false](https://developer.apple.com/documentation/swift/false) means the tool tip won’t expand. The default value is [false](https://developer.apple.com/documentation/swift/false).

Expansion tooltips are shown when the cell cannot show the full content and the user hovers the pointer over the control. This is controlled by the [NSCell](../nscell.md) class method [expansionFrame(withFrame:in:)](../nscell/expansionframe%28withframe_in_%29.md) and is drawn by [draw(withExpansionFrame:in:)](../nscell/draw%28withexpansionframe_in_%29.md). This value is encoded along with the control.

In general, it is recommended to turn this on for [NSTextField](../nstextfield.md) instances in a view-based [NSTableView](../nstableview.md).

## See Also

### Managing Expansion Tool Tips

- [draw(withExpansionFrame:in:)](draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [expansionFrame(withFrame:)](expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.

# allowsExpansionToolTips (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.

## Declaration

```objectivec
@property BOOL allowsExpansionToolTips;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the expansion tool tip will expand; [false](https://developer.apple.com/documentation/swift/false) means the tool tip won’t expand. The default value is [false](https://developer.apple.com/documentation/swift/false).

Expansion tooltips are shown when the cell cannot show the full content and the user hovers the pointer over the control. This is controlled by the [NSCell](../nscell.md) class method [expansionFrameWithFrame:inView:](../nscell/expansionframe%28withframe_in_%29.md) and is drawn by [drawWithExpansionFrame:inView:](../nscell/draw%28withexpansionframe_in_%29.md). This value is encoded along with the control.

In general, it is recommended to turn this on for [NSTextField](../nstextfield.md) instances in a view-based [NSTableView](../nstableview.md).

## See Also

### Managing Expansion Tool Tips

- [drawWithExpansionFrame:inView:](draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [expansionFrameWithFrame:](expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.
