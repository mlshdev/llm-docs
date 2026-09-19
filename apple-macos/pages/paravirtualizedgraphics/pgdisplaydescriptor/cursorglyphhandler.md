> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/cursorglyphhandler

# cursorGlyphHandler

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+

A handler that the framework calls to change the cursor’s appearance.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGDisplayCursorGlyphHandler cursorGlyphHandler;
```

## See Also

### Managing Cursor Events

- [cursorShowHandler](cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [PGDisplayCursorGlyphHandler](../pgdisplaycursorglyphhandler.md): The block signature for a routine that handles changes to the cursor’s appearance.
- [PGDisplayCursorShowHandler](../pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.
