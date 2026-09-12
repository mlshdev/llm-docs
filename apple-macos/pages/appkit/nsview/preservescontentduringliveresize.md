> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/preservescontentduringliveresize](https://developer.apple.com/documentation/appkit/nsview/preservescontentduringliveresize)

# preservesContentDuringLiveResize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.

## Declaration

```swift
var preservesContentDuringLiveResize: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If your view supports content preservation, override this property and return [true](https://developer.apple.com/documentation/swift/true). Content preservation lets your view decide what to redraw during a live resize operation. If your view supports this feature, you should also provide a custom implementation of the [setFrameSize(\_:)](setframesize%28__%29.md) method that invalidates the portions of your view that actually need to be redrawn.

For information on how to implement this feature in your views, see [Cocoa Performance Guidelines](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaPerformance/CocoaPerformance.html#//apple_ref/doc/uid/TP40001448).

## See Also

### Related Documentation

- [setFrameSize(\_:)](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [getRectsExposedDuringLiveResize(\_:count:)](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize()](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize()](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

# preservesContentDuringLiveResize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.

## Declaration

```objectivec
@property (readonly) BOOL preservesContentDuringLiveResize;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false). If your view supports content preservation, override this property and return [true](https://developer.apple.com/documentation/swift/true). Content preservation lets your view decide what to redraw during a live resize operation. If your view supports this feature, you should also provide a custom implementation of the [setFrameSize:](setframesize%28__%29.md) method that invalidates the portions of your view that actually need to be redrawn.

For information on how to implement this feature in your views, see [Cocoa Performance Guidelines](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaPerformance/CocoaPerformance.html#//apple_ref/doc/uid/TP40001448).

## See Also

### Related Documentation

- [setFrameSize:](setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [getRectsExposedDuringLiveResize:count:](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.
