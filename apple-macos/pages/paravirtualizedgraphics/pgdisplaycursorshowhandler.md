> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaycursorshowhandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaycursorshowhandler)

# PGDisplayCursorShowHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles changes to the cursor’s visibility.

## Declaration

```swift
typealias PGDisplayCursorShowHandler = (Bool) -> Void
```

## Parameters

- `show`: A Boolean value that indicates whether to show the cursor.

## See Also

### Managing Cursor Events

- [cursorShowHandler](pgdisplaydescriptor/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.

# PGDisplayCursorShowHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The block signature for a routine that handles changes to the cursor’s visibility.

## Declaration

```objectivec
typedef void (^)(_Bool) PGDisplayCursorShowHandler;
```

## Parameters

- `show`: A Boolean value that indicates whether to show the cursor.

## See Also

### Managing Cursor Events

- [cursorGlyphHandler](pgdisplaydescriptor/cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](pgdisplaydescriptor/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [PGDisplayCursorGlyphHandler](pgdisplaycursorglyphhandler.md): The block signature for a routine that handles changes to the cursor’s appearance.
