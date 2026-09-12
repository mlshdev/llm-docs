> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclipview/copiesonscroll](https://developer.apple.com/documentation/appkit/nsclipview/copiesonscroll)

# copiesOnScroll (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

A Boolean value that indicates if the clip view copies rendered images while scrolling.

> Setting this property has no effect.  NSClipView will always minimize the area of the document view that is invalidated.  To force invalidation of the document view, use -\[NSView setNeedsDisplayInRect:\].

## Declaration

```swift
var copiesOnScroll: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the clip view copies its existing rendered image while scrolling (only drawing exposed portions of its document view); when it is [false](https://developer.apple.com/documentation/swift/false), the view forces its contents to be redrawn each time.

# copiesOnScroll (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 11.0)

A Boolean value that indicates if the clip view copies rendered images while scrolling.

> Setting this property has no effect.  NSClipView will always minimize the area of the document view that is invalidated.  To force invalidation of the document view, use -\[NSView setNeedsDisplayInRect:\].

## Declaration

```objectivec
@property BOOL copiesOnScroll;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the clip view copies its existing rendered image while scrolling (only drawing exposed portions of its document view); when it is [false](https://developer.apple.com/documentation/swift/false), the view forces its contents to be redrawn each time.
