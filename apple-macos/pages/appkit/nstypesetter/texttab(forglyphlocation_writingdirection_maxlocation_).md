> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/texttab(forglyphlocation:writingdirection:maxlocation:)](https://developer.apple.com/documentation/appkit/nstypesetter/texttab(forglyphlocation:writingdirection:maxlocation:))

# textTab(forGlyphLocation:writingDirection:maxLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text tab next closest to a given glyph location within the given parameters.

## Declaration

```swift
func textTab(forGlyphLocation glyphLocation: CGFloat, writingDirection direction: NSWritingDirection, maxLocation: CGFloat) -> NSTextTab?
```

## Parameters

- `glyphLocation`: The location at which to start searching.
- `direction`: The direction in which to search.
- `maxLocation`: The maximum location for the search.

<a id="return-value"></a>

## Return Value

The text tab next closest to `glyphLocation`, indexing in `direction` but not beyond `maxLocation`.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method whenever it finds a tab character. To determine the width to advance the next glyph, the typesetter examines the [NSParagraphStyle](../nsparagraphstyle.md) object’s tab array and the default tab interval.

# textTabForGlyphLocation:writingDirection:maxLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text tab next closest to a given glyph location within the given parameters.

## Declaration

```objectivec
- (NSTextTab *) textTabForGlyphLocation:(CGFloat) glyphLocation writingDirection:(NSWritingDirection) direction maxLocation:(CGFloat) maxLocation;
```

## Parameters

- `glyphLocation`: The location at which to start searching.
- `direction`: The direction in which to search.
- `maxLocation`: The maximum location for the search.

<a id="return-value"></a>

## Return Value

The text tab next closest to `glyphLocation`, indexing in `direction` but not beyond `maxLocation`.

<a id="Discussion"></a>

## Discussion

The typesetter calls this method whenever it finds a tab character. To determine the width to advance the next glyph, the typesetter examines the [NSParagraphStyle](../nsparagraphstyle.md) object’s tab array and the default tab interval.
