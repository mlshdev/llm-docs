> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaycursorglyphhandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaycursorglyphhandler)

# PGDisplayCursorGlyphHandler

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+

The block signature for a routine that handles changes to the cursor’s appearance.

## Declaration

```objectivec
typedef void (^)(NSBitmapImageRep *, PGDisplayCoord_t) PGDisplayCursorGlyphHandler;
```

## Parameters

- `glyph`: The image to assign to the cursor.
- `hotSpot   `: The point to set as the cursor’s hot spot.

## See Also

### Managing Cursor Events

- [cursorGlyphHandler](pgdisplaydescriptor/cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](pgdisplaydescriptor/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [PGDisplayCursorShowHandler](pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.
