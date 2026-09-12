> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/performascurrentdrawingappearance(_:)](https://developer.apple.com/documentation/appkit/nsappearance/performascurrentdrawingappearance(_:))

# performAsCurrentDrawingAppearance(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Sets the appearance to be the active drawing appearance and perform the specified block.

## Declaration

```swift
func performAsCurrentDrawingAppearance(_ block: () -> Void)
```

## Parameters

- `block`: The block to invoke after setting the appearance to be the current drawing appearance.

<a id="Discussion"></a>

## Discussion

This method saves and restores the previous current appearance.

## See Also

### Getting and Setting the Current Appearance

- [currentDrawing()](currentdrawing%28%29.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [current](current.md): Deprecated. Returns the appearance object that’s active on the current thread.

# performAsCurrentDrawingAppearance: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Sets the appearance to be the active drawing appearance and perform the specified block.

## Declaration

```objectivec
- (void) performAsCurrentDrawingAppearance:(void (^)()) block;
```

## Parameters

- `block`: The block to invoke after setting the appearance to be the current drawing appearance.

<a id="Discussion"></a>

## Discussion

This method saves and restores the previous current appearance.

## See Also

### Getting and Setting the Current Appearance

- [currentDrawingAppearance](currentdrawingappearance.md): The appearance that the system uses for color and asset resolution, and that’s active for drawing, usually from locking focus on a view.
- [currentAppearance](current.md): Deprecated. Returns the appearance object that’s active on the current thread.
