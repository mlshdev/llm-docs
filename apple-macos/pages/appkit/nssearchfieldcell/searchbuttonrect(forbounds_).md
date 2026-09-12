> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/searchbuttonrect(forbounds:)](https://developer.apple.com/documentation/appkit/nssearchfieldcell/searchbuttonrect(forbounds:))

# searchButtonRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the search button cell.

## Declaration

```swift
func searchButtonRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The current bounding rectangle for the search button.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the search button. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the search button cell. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchTextRect(forBounds:)](searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [cancelButtonRect(forBounds:)](cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.

# searchButtonRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the search button cell.

## Declaration

```objectivec
- (NSRect) searchButtonRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The current bounding rectangle for the search button.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the search button. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the search button cell. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchTextRectForBounds:](searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [cancelButtonRectForBounds:](cancelbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the cancel button cell.
