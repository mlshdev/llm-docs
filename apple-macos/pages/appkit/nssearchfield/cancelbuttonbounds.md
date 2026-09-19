> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssearchfield/cancelbuttonbounds

# cancelButtonBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the cancel button within the bounds of the search field.

## Declaration

```swift
var cancelButtonBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `cancelButtonBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [searchButtonBounds](searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.
- [searchTextBounds](searchtextbounds.md): The rectangle for the search text within the bounds of the search field.

# cancelButtonBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The rectangle for the cancel button within the bounds of the search field.

## Declaration

```objectivec
@property (readonly) NSRect cancelButtonBounds;
```

<a id="Discussion"></a>

## Discussion

Subclasses can override `cancelButtonBounds` for custom layout purposes.

## See Also

### Getting Search Field Metrics

- [searchButtonBounds](searchbuttonbounds.md): The rectangle for the search button within the bounds of the search field.
- [searchTextBounds](searchtextbounds.md): The rectangle for the search text within the bounds of the search field.
