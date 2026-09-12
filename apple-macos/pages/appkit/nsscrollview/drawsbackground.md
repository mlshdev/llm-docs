> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/drawsbackground](https://developer.apple.com/documentation/appkit/nsscrollview/drawsbackground)

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view draws its background.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view cell fills the background with its background color.

If the scroll view encloses an `NSClipView`, setting this property to [false](https://developer.apple.com/documentation/swift/false) also sets the `NSClipView` property [copiesOnScroll](../nsclipview/copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting `drawsBackground` directly on the `NSClipView` instead is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## See Also

### Related Documentation

- [drawsBackground](../nsclipview/drawsbackground.md): A Boolean value that indicates if the clip view draws its background color.
- [copiesOnScroll](../nsclipview/copiesonscroll.md): Deprecated. A Boolean value that indicates if the clip view copies rendered images while scrolling.

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The color of the content view’s background.
- [borderType](bordertype.md): A value that specifies the appearance of the scroll view’s border.
- [documentCursor](documentcursor.md): The content view’s document cursor.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view draws its background.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view cell fills the background with its background color.

If the scroll view encloses an `NSClipView`, setting this property to [false](https://developer.apple.com/documentation/swift/false) also sets the `NSClipView` property [copiesOnScroll](../nsclipview/copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting `drawsBackground` directly on the `NSClipView` instead is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## See Also

### Related Documentation

- [drawsBackground](../nsclipview/drawsbackground.md): A Boolean value that indicates if the clip view draws its background color.
- [copiesOnScroll](../nsclipview/copiesonscroll.md): Deprecated. A Boolean value that indicates if the clip view copies rendered images while scrolling.

### Managing Graphics Attributes

- [backgroundColor](backgroundcolor.md): The color of the content view’s background.
- [borderType](bordertype.md): A value that specifies the appearance of the scroll view’s border.
- [documentCursor](documentcursor.md): The content view’s document cursor.
