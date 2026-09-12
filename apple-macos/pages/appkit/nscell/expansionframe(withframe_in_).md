> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/expansionframe(withframe:in:)](https://developer.apple.com/documentation/appkit/nscell/expansionframe(withframe:in:))

# expansionFrame(withFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the expansion cell frame for the receiver.

## Declaration

```swift
func expansionFrame(withFrame cellFrame: NSRect, in view: NSView) -> NSRect
```

## Parameters

- `cellFrame`: The frame for the receiver.
- `view`: The view in which the receiver will be drawn.

<a id="return-value"></a>

## Return Value

The expansion cell frame for the receiver. If the frame is not too small, return an empty rect ([NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect)), and no expansion tool tip view will be shown.

<a id="Discussion"></a>

## Discussion

This method allows the cell to return an expansion cell frame if `cellFrame` is too small for the entire contents in the view. When the mouse is hovered over the cell in certain controls, the full cell contents are shown in a special floating tool tip view. By default, `NSCell` returns `NSZeroRect`, while some subclasses (such as `NSTextFieldCell`) will return the proper frame when required.

## See Also

### Managing Expansion Frames

- [draw(withExpansionFrame:in:)](draw%28withexpansionframe_in_%29.md): Instructs the receiver to draw in an expansion frame.

# expansionFrameWithFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the expansion cell frame for the receiver.

## Declaration

```objectivec
- (NSRect) expansionFrameWithFrame:(NSRect) cellFrame inView:(NSView *) view;
```

## Parameters

- `cellFrame`: The frame for the receiver.
- `view`: The view in which the receiver will be drawn.

<a id="return-value"></a>

## Return Value

The expansion cell frame for the receiver. If the frame is not too small, return an empty rect ([NSZeroRect](https://developer.apple.com/documentation/foundation/nszerorect)), and no expansion tool tip view will be shown.

<a id="Discussion"></a>

## Discussion

This method allows the cell to return an expansion cell frame if `cellFrame` is too small for the entire contents in the view. When the mouse is hovered over the cell in certain controls, the full cell contents are shown in a special floating tool tip view. By default, `NSCell` returns `NSZeroRect`, while some subclasses (such as `NSTextFieldCell`) will return the proper frame when required.

## See Also

### Managing Expansion Frames

- [drawWithExpansionFrame:inView:](draw%28withexpansionframe_in_%29.md): Instructs the receiver to draw in an expansion frame.
