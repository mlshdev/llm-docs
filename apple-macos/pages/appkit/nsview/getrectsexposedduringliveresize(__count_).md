> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/getrectsexposedduringliveresize(_:count:)](https://developer.apple.com/documentation/appkit/nsview/getrectsexposedduringliveresize(_:count:))

# getRectsExposedDuringLiveResize(\_:count:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a list of rectangles indicating the newly exposed areas of the view.

## Declaration

```swift
func getRectsExposedDuringLiveResize(_ exposedRects: UnsafeMutablePointer<NSRect>, count: UnsafeMutablePointer<Int>)
```

## Parameters

- `exposedRects`: On return, contains the list of rectangles. The returned rectangles are in the coordinate space of the view.
- `count`: Contains the number of rectangles in `exposedRects`; this value may be 0 and is guaranteed to be no more than 4.

<a id="Discussion"></a>

## Discussion

If your view does not support content preservation during live resizing, the entire area of your view is returned in the `exposedRects` parameter. To support content preservation, override the [preservesContentDuringLiveResize](preservescontentduringliveresize.md) property in your view and have your implementation return [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The window containing your view must also support content preservation. To enable support for this feature in your window, use the [preservesContentDuringLiveResize](../nswindow/preservescontentduringliveresize.md) method of `NSWindow`.

If the view decreased in both height and width, the list of returned rectangles will be empty. If the view increased in both height and width and its upper-left corner stayed anchored in the same position, the list of returned rectangles will contain a vertical and horizontal component indicating the exposed area.

## See Also

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize()](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize()](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

# getRectsExposedDuringLiveResize:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a list of rectangles indicating the newly exposed areas of the view.

## Declaration

```objectivec
- (void) getRectsExposedDuringLiveResize:(NSRect[4]) exposedRects count:(NSInteger *) count;
```

## Parameters

- `exposedRects`: On return, contains the list of rectangles. The returned rectangles are in the coordinate space of the view.
- `count`: Contains the number of rectangles in `exposedRects`; this value may be 0 and is guaranteed to be no more than 4.

<a id="Discussion"></a>

## Discussion

If your view does not support content preservation during live resizing, the entire area of your view is returned in the `exposedRects` parameter. To support content preservation, override the [preservesContentDuringLiveResize](preservescontentduringliveresize.md) property in your view and have your implementation return [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The window containing your view must also support content preservation. To enable support for this feature in your window, use the [preservesContentDuringLiveResize](../nswindow/preservescontentduringliveresize.md) method of `NSWindow`.

If the view decreased in both height and width, the list of returned rectangles will be empty. If the view increased in both height and width and its upper-left corner stayed anchored in the same position, the list of returned rectangles will contain a vertical and horizontal component indicating the exposed area.

## See Also

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [rectPreservedDuringLiveResize](rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.
