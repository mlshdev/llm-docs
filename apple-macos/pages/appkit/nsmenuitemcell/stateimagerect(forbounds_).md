> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/stateimagerect(forbounds:)](https://developer.apple.com/documentation/appkit/nsmenuitemcell/stateimagerect(forbounds:))

# stateImageRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s state image should be drawn.

## Declaration

```swift
func stateImageRect(forBounds cellFrame: NSRect) -> NSRect
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the menu item’s state image.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRect(forBounds:)](keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.

# stateImageRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s state image should be drawn.

## Declaration

```objectivec
- (NSRect) stateImageRectForBounds:(NSRect) cellFrame;
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the menu item’s state image.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [keyEquivalentRectForBounds:](keyequivalentrect%28forbounds_%29.md): Returns the rectangle into which the menu item’s key equivalent should be drawn.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.
