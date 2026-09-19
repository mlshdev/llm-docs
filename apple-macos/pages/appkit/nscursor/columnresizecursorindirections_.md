> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscursor/columnresizecursorindirections:

# columnResizeCursorInDirections:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Returns the cursor for resizing a column (vertical divider) in the specified directions.

## Declaration

```objectivec
+ (NSCursor *) columnResizeCursorInDirections:(NSHorizontalDirections) directions;
```

## Parameters

- `directions`: The direction in which a column can be resized.
