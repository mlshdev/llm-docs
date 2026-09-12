> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutorientationprovider/layoutorientation](https://developer.apple.com/documentation/appkit/nstextlayoutorientationprovider/layoutorientation)

# layoutOrientation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default layout orientation.

## Declaration

```swift
var layoutOrientation: NSLayoutManager.TextLayoutOrientation { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the default layout orientation for text in the object that adopts the protocol. If the text contains an explicit [verticalGlyphForm](https://developer.apple.com/documentation/foundation/nsattributedstring/key/verticalglyphform) attribute, that attribute overrides the value in this property. When rendering, TextKit assumes the coordinate system is appropriately rotated.

## See Also

### Getting layout orientation

- [NSLayoutManager.TextLayoutOrientation](../nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

# layoutOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default layout orientation.

## Declaration

```objectivec
@property (readonly) NSTextLayoutOrientation layoutOrientation;
```

<a id="Discussion"></a>

## Discussion

This property contains the default layout orientation for text in the object that adopts the protocol. If the text contains an explicit [verticalGlyphForm](https://developer.apple.com/documentation/foundation/nsattributedstring/key/verticalglyphform) attribute, that attribute overrides the value in this property. When rendering, TextKit assumes the coordinate system is appropriately rotated.

## See Also

### Getting layout orientation

- [NSTextLayoutOrientation](../nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.
