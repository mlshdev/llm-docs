> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/ishidden](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/ishidden)

# isHidden (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the element is hidden.

## Declaration

```swift
var isHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). As an optimization, the collection view might not create the corresponding view when the value of this property is [true](https://developer.apple.com/documentation/swift/true). Because there might not be a view, hidden elements do not participate in hit testing for the collection view.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [zIndex](zindex.md): The element’s position on the z axis.

# hidden (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value indicating whether the element is hidden.

## Declaration

```objectivec
@property (getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). As an optimization, the collection view might not create the corresponding view when the value of this property is [true](https://developer.apple.com/documentation/swift/true). Because there might not be a view, hidden elements do not participate in hit testing for the collection view.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [zIndex](zindex.md): The element’s position on the z axis.
