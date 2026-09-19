> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/cursorshowhandler

# cursorShowHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the cursor’s visibility.

## Declaration

```swift
var cursorShowHandler: PGDisplayCursorShowHandler? { get set }
```

## See Also

### Managing Cursor Events

- [PGDisplayCursorShowHandler](../pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.

# cursorShowHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the cursor’s visibility.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) PGDisplayCursorShowHandler cursorShowHandler;
```

## See Also

### Managing Cursor Events

- [cursorGlyphHandler](cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [PGDisplayCursorGlyphHandler](../pgdisplaycursorglyphhandler.md): The block signature for a routine that handles changes to the cursor’s appearance.
- [PGDisplayCursorShowHandler](../pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.
