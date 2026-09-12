> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/alpha](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/alpha)

# alpha (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The transparency of the element.

## Declaration

```swift
var alpha: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` (fully transparent) and `1.0` (fully opaque). The default value is `1.0`.

Transparent items continue to participate in hit testing for the collection view.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [isHidden](ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](zindex.md): The element’s position on the z axis.

# alpha (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The transparency of the element.

## Declaration

```objectivec
@property CGFloat alpha;
```

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` (fully transparent) and `1.0` (fully opaque). The default value is `1.0`.

Transparent items continue to participate in hit testing for the collection view.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [hidden](ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](zindex.md): The element’s position on the z axis.
