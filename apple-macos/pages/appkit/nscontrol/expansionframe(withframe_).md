> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/expansionframe(withframe:)](https://developer.apple.com/documentation/appkit/nscontrol/expansionframe(withframe:))

# expansionFrame(withFrame:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The frame in which a tool tip can be displayed, if needed.

## Declaration

```swift
func expansionFrame(withFrame contentFrame: NSRect) -> NSRect
```

## Parameters

- `contentFrame`: The frame of the control.

<a id="return-value"></a>

## Return Value

The frame in which the tool tip should be displayed, or [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) by default.

<a id="Discussion"></a>

## Discussion

This method lets the control  return an expansion tool tip frame if `contentFrame` is too small for the entire contents in the view. When the pointer hovers over the text in certain controls, the full contents will be shown in a special floating tool tip view. If the frame is big enough to display the contents, return an empty rect from this method and no expansion tool tip view will be shown. Note that some subclasses, such as [NSTextField](../nstextfield.md), return the proper frame when required.

## See Also

### Managing Expansion Tool Tips

- [draw(withExpansionFrame:in:)](draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [allowsExpansionToolTips](allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.

# expansionFrameWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

The frame in which a tool tip can be displayed, if needed.

## Declaration

```objectivec
- (NSRect) expansionFrameWithFrame:(NSRect) contentFrame;
```

## Parameters

- `contentFrame`: The frame of the control.

<a id="return-value"></a>

## Return Value

The frame in which the tool tip should be displayed, or [NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect) by default.

<a id="Discussion"></a>

## Discussion

This method lets the control  return an expansion tool tip frame if `contentFrame` is too small for the entire contents in the view. When the pointer hovers over the text in certain controls, the full contents will be shown in a special floating tool tip view. If the frame is big enough to display the contents, return an empty rect from this method and no expansion tool tip view will be shown. Note that some subclasses, such as [NSTextField](../nstextfield.md), return the proper frame when required.

## See Also

### Managing Expansion Tool Tips

- [drawWithExpansionFrame:inView:](draw%28withexpansionframe_in_%29.md): Performs custom expansion tool tip drawing.
- [allowsExpansionToolTips](allowsexpansiontooltips.md): A Boolean value that indicates whether expansion tool tips are shown when the control is hovered over.
