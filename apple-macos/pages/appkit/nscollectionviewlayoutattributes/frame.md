> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/frame](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/frame)

# frame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The frame rectangle of the element.

## Declaration

```swift
var frame: NSRect { get set }
```

<a id="Discussion"></a>

## Discussion

The frame rectangle is measured in points and specified in the collection view’s coordinate system. Setting the value of this property also updates the value in the [size](size.md) property.

## See Also

### Accessing the Layout Attributes

- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [isHidden](ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](zindex.md): The element’s position on the z axis.

# frame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The frame rectangle of the element.

## Declaration

```objectivec
@property NSRect frame;
```

<a id="Discussion"></a>

## Discussion

The frame rectangle is measured in points and specified in the collection view’s coordinate system. Setting the value of this property also updates the value in the [size](size.md) property.

## See Also

### Accessing the Layout Attributes

- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [hidden](ishidden.md): A Boolean value indicating whether the element is hidden.
- [zIndex](zindex.md): The element’s position on the z axis.
