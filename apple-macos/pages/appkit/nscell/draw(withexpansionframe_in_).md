> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/draw(withexpansionframe:in:)](https://developer.apple.com/documentation/appkit/nscell/draw(withexpansionframe:in:))

# draw(withExpansionFrame:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Instructs the receiver to draw in an expansion frame.

## Declaration

```swift
func draw(withExpansionFrame cellFrame: NSRect, in view: NSView)
```

## Parameters

- `cellFrame`: The frame in which to draw.
- `view`: The view in which to draw. This view may be different from the original view that the cell appeared in.

<a id="Discussion"></a>

## Discussion

This method allows the cell to perform custom expansion tool tip drawing. By default, `NSCell` simply calls [draw(withFrame:in:)](draw%28withframe_in_%29.md).

## See Also

### Managing Expansion Frames

- [expansionFrame(withFrame:in:)](expansionframe%28withframe_in_%29.md): Returns the expansion cell frame for the receiver.

# drawWithExpansionFrame:inView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Instructs the receiver to draw in an expansion frame.

## Declaration

```objectivec
- (void) drawWithExpansionFrame:(NSRect) cellFrame inView:(NSView *) view;
```

## Parameters

- `cellFrame`: The frame in which to draw.
- `view`: The view in which to draw. This view may be different from the original view that the cell appeared in.

<a id="Discussion"></a>

## Discussion

This method allows the cell to perform custom expansion tool tip drawing. By default, `NSCell` simply calls [drawWithFrame:inView:](draw%28withframe_in_%29.md).

## See Also

### Managing Expansion Frames

- [expansionFrameWithFrame:inView:](expansionframe%28withframe_in_%29.md): Returns the expansion cell frame for the receiver.
