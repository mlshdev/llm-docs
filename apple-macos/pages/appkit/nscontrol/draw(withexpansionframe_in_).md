> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/draw(withexpansionframe:in:)](https://developer.apple.com/documentation/appkit/nscontrol/draw(withexpansionframe:in:))

# draw(withExpansionFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs custom expansion tool tip drawing.

## Declaration

```swift
func draw(withExpansionFrame contentFrame: NSRect, in view: NSView)
```

## Parameters

- `contentFrame`: The frame in which to draw.
- `view`: The view in which to draw.

<a id="Discussion"></a>

## Discussion

Note that the view may be different from the original view in which the text appeared.

## See Also

### Managing Expansion Tool Tips

- [allowsExpansionToolTips](allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.
- [expansionFrame(withFrame:)](expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.

# drawWithExpansionFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Performs custom expansion tool tip drawing.

## Declaration

```objectivec
- (void) drawWithExpansionFrame:(NSRect) contentFrame inView:(NSView *) view;
```

## Parameters

- `contentFrame`: The frame in which to draw.
- `view`: The view in which to draw.

<a id="Discussion"></a>

## Discussion

Note that the view may be different from the original view in which the text appeared.

## See Also

### Managing Expansion Tool Tips

- [allowsExpansionToolTips](allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.
- [expansionFrameWithFrame:](expansionframe%28withframe_%29.md): The frame in which a tool tip can be displayed, if needed.
