> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutattributes/zindex](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutattributes/zindex)

# zIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The element’s position on the z axis.

## Declaration

```swift
var zIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the front-to-back ordering of items during layout. Items with higher index values appear on top of those with lower values. Items with the same value have an undetermined order.

The default value of this property is `0`.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [isHidden](ishidden.md): A Boolean value indicating whether the element is hidden.

# zIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The element’s position on the z axis.

## Declaration

```objectivec
@property NSInteger zIndex;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the front-to-back ordering of items during layout. Items with higher index values appear on top of those with lower values. Items with the same value have an undetermined order.

The default value of this property is `0`.

## See Also

### Accessing the Layout Attributes

- [frame](frame.md): The frame rectangle of the element.
- [size](size.md): The size of the element.
- [alpha](alpha.md): The transparency of the element.
- [hidden](ishidden.md): A Boolean value indicating whether the element is hidden.
