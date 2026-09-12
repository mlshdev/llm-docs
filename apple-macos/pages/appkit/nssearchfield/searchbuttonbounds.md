> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/searchbuttonbounds](https://developer.apple.com/documentation/appkit/nssearchfield/searchbuttonbounds)

# searchButtonBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the search button within the bounds of the search field.

## Declaration

```swift
var searchButtonBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `searchButtonBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [cancelButtonBounds](cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchTextBounds](searchtextbounds.md): The rectangle for the search text within the bounds of the search field.

# searchButtonBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the search button within the bounds of the search field.

## Declaration

```objectivec
@property (readonly) NSRect searchButtonBounds;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `searchButtonBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [cancelButtonBounds](cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchTextBounds](searchtextbounds.md): The rectangle for the search text within the bounds of the search field.
