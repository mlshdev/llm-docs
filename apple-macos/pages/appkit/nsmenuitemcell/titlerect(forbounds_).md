> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/titlerect(forbounds:)](https://developer.apple.com/documentation/appkit/nsmenuitemcell/titlerect(forbounds:))

# titleRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s title should be drawn.

## Declaration

```swift
func titleRect(forBounds cellFrame: NSRect) -> NSRect
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the text of the title.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRect(forBounds:)](keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [stateImageRect(forBounds:)](stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.

# titleRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s title should be drawn.

## Declaration

```objectivec
- (NSRect) titleRectForBounds:(NSRect) cellFrame;
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the text of the title.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRectForBounds:](keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [stateImageRectForBounds:](stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.
