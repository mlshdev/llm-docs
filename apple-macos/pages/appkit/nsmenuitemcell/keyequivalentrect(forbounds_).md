> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/keyequivalentrect(forbounds:)](https://developer.apple.com/documentation/appkit/nsmenuitemcell/keyequivalentrect(forbounds:))

# keyEquivalentRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s key equivalent should be drawn.

## Declaration

```swift
func keyEquivalentRect(forBounds cellFrame: NSRect) -> NSRect
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the key equivalent.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [stateImageRect(forBounds:)](stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.
- [titleRect(forBounds:)](titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.

# keyEquivalentRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle into which the menu item’s key equivalent should be drawn.

## Declaration

```objectivec
- (NSRect) keyEquivalentRectForBounds:(NSRect) cellFrame;
```

## Parameters

- `cellFrame`: A rectangle that defines the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The returned rectangle is based on `cellFrame` but encompasses only the area to be occupied by the key equivalent.

## See Also

### Getting the Menu Item’s Drawing Rectangle

- [stateImageRectForBounds:](stateimagerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s state image should be drawn.
- [titleRectForBounds:](titlerect%28forbounds_%29.md): Returns the rectangle into which the menu item’s title should be drawn.
