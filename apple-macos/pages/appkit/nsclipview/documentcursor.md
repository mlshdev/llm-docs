> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsclipview/documentcursor

# documentCursor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cursor object used when the pointer lies over the view.

## Declaration

```swift
var documentCursor: NSCursor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, unless you specify a value in the xib file associated with the clip view (or scroll view). Note that the clip view’s document view may specify a cursor for its enclosing scroll view by setting [enclosingScrollView](../nsview/enclosingscrollview.md).

# documentCursor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cursor object used when the pointer lies over the view.

## Declaration

```objectivec
@property (strong, nullable) NSCursor * documentCursor;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, unless you specify a value in the xib file associated with the clip view (or scroll view). Note that the clip view’s document view may specify a cursor for its enclosing scroll view by setting [enclosingScrollView](../nsview/enclosingscrollview.md).
