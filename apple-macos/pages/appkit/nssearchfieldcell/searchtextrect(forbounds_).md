> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssearchfieldcell/searchtextrect(forbounds:)

# searchTextRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the search-text field cell.

## Declaration

```swift
func searchTextRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The current bounding rectangle for the search text field.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the search text field. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the text-field cell object. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchButtonRect(forBounds:)](searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.
- [cancelButtonRect(forBounds:)](cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.

# searchTextRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the search-text field cell.

## Declaration

```objectivec
- (NSRect) searchTextRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The current bounding rectangle for the search text field.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the search text field. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the text-field cell object. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchButtonRectForBounds:](searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.
- [cancelButtonRectForBounds:](cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.
