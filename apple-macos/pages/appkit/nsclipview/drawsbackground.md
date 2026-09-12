> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/drawsbackground](https://developer.apple.com/documentation/appkit/nsclipview/drawsbackground)

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the clip view draws its background color.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If your [NSClipView](../nsclipview.md) is enclosed in an [NSScrollView](../nsscrollview.md), you should set the [drawsBackground](drawsbackground.md) property on the [NSScrollView](../nsscrollview.md). Setting this property to [false](https://developer.apple.com/documentation/swift/false) on an [NSScrollView](../nsscrollview.md) has the added effect of setting the [NSClipView](../nsclipview.md) property [copiesOnScroll](copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting the [drawsBackground](drawsbackground.md) property on the [NSClipView](../nsclipview.md) is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## See Also

### Working with Background Color

- [backgroundColor](backgroundcolor.md): The color of the clip view’s background.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the clip view draws its background color.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

If your [NSClipView](../nsclipview.md) is enclosed in an [NSScrollView](../nsscrollview.md), you should set the [drawsBackground](drawsbackground.md) property on the [NSScrollView](../nsscrollview.md). Setting this property to [false](https://developer.apple.com/documentation/swift/false) on an [NSScrollView](../nsscrollview.md) has the added effect of setting the [NSClipView](../nsclipview.md) property [copiesOnScroll](copiesonscroll.md) to [false](https://developer.apple.com/documentation/swift/false). The side effect of setting the [drawsBackground](drawsbackground.md) property on the [NSClipView](../nsclipview.md) is the appearance of “trails” (vestiges of previous drawing) in the document view as it is scrolled.

## See Also

### Working with Background Color

- [backgroundColor](backgroundcolor.md): The color of the clip view’s background.
