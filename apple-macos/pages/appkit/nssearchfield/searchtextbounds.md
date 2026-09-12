> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfield/searchtextbounds](https://developer.apple.com/documentation/appkit/nssearchfield/searchtextbounds)

# searchTextBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the search text within the bounds of the search field.

## Declaration

```swift
var searchTextBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `searchTextBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [cancelButtonBounds](cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchButtonBounds](searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.

# searchTextBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the search text within the bounds of the search field.

## Declaration

```objectivec
@property (readonly) NSRect searchTextBounds;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `searchTextBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [cancelButtonBounds](cancelbuttonbounds.md): The rectangle for the cancel button within the bounds of the search field.
- [searchButtonBounds](searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.
