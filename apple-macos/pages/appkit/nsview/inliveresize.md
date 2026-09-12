> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/inliveresize](https://developer.apple.com/documentation/appkit/nsview/inliveresize)

# inLiveResize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is being rendered as part of a live resizing operation.

## Declaration

```swift
var inLiveResize: Bool { get }
```

<a id="Discussion"></a>

## Discussion

AppKit sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when a live resizing operation involving the view is underway. Use this property to determine when to optimize your view’s drawing behavior. Typically, you access this property from your [draw(\_:)](draw%28__%29.md) method and use the value to change the fidelity of the content you draw, or to draw your content more efficiently.

## See Also

### Managing Live Resize

- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize(\_:count:)](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize()](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize()](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

# inLiveResize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the view is being rendered as part of a live resizing operation.

## Declaration

```objectivec
@property (readonly) BOOL inLiveResize;
```

<a id="Discussion"></a>

## Discussion

AppKit sets the value of this property to [true](https://developer.apple.com/documentation/swift/true) when a live resizing operation involving the view is underway. Use this property to determine when to optimize your view’s drawing behavior. Typically, you access this property from your [drawRect:](draw%28__%29.md) method and use the value to change the fidelity of the content you draw, or to draw your content more efficiently.

## See Also

### Managing Live Resize

- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize:count:](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.
