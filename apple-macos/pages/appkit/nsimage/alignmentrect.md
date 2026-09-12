> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/alignmentrect](https://developer.apple.com/documentation/appkit/nsimage/alignmentrect)

# alignmentRect (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A rectangle that you can use to position the image during layout.

## Declaration

```swift
var alignmentRect: NSRect { get set }
```

<a id="Discussion"></a>

## Discussion

Alignment rectangles specify baselines that you can use to position the content of an image more accurately. These baselines are merely hints that your own code can use to determine positioning. The `NSImage` class does not use this rectangle during drawing; however, instances of [NSCell](../nscell.md) typically use this information when laying out images within their boundaries.

For example, if you have a 20 x 20 pixel icon that includes a glow effect, you might set the alignment rectangle to `{{2, 2}, {16, 16}}` to indicate the position of the underlying icon without the glow effect. This property defaults to a rectangle with an origin of `{0, 0}` and a size that matches the size of the image.

# alignmentRect (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A rectangle that you can use to position the image during layout.

## Declaration

```objectivec
@property NSRect alignmentRect;
```

<a id="Discussion"></a>

## Discussion

Alignment rectangles specify baselines that you can use to position the content of an image more accurately. These baselines are merely hints that your own code can use to determine positioning. The `NSImage` class does not use this rectangle during drawing; however, instances of [NSCell](../nscell.md) typically use this information when laying out images within their boundaries.

For example, if you have a 20 x 20 pixel icon that includes a glow effect, you might set the alignment rectangle to `{{2, 2}, {16, 16}}` to indicate the position of the underlying icon without the glow effect. This property defaults to a rectangle with an origin of `{0, 0}` and a size that matches the size of the image.
