> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfieldcell/cancelbuttonrect(forbounds:)](https://developer.apple.com/documentation/appkit/nssearchfieldcell/cancelbuttonrect(forbounds:))

# cancelButtonRect(forBounds:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the cancel button cell.

## Declaration

```swift
func cancelButtonRect(forBounds rect: NSRect) -> NSRect
```

## Parameters

- `rect`: The current bounding rectangle for the cancel button.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the cancel button. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the cancel button cell. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchTextRect(forBounds:)](searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [searchButtonRect(forBounds:)](searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.

# cancelButtonRectForBounds: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies the bounding rectangle for the cancel button cell.

## Declaration

```objectivec
- (NSRect) cancelButtonRectForBounds:(NSRect) rect;
```

## Parameters

- `rect`: The current bounding rectangle for the cancel button.

<a id="return-value"></a>

## Return Value

The updated bounding rectangle to use for the cancel button. The default value is the value passed into the `rect` parameter.

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to return a new bounding rectangle for the cancel button cell. You might use this method to provide a custom layout for the search field control.

## See Also

### Custom layout

- [searchTextRectForBounds:](searchtextrect%28forbounds_%29.md): Modifies the bounding rectangle for the search-text field cell.
- [searchButtonRectForBounds:](searchbuttonrect%28forbounds_%29.md): Modifies the bounding rectangle for the search button cell.
