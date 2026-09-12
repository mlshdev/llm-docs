> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/rectpreservedduringliveresize](https://developer.apple.com/documentation/appkit/nsview/rectpreservedduringliveresize)

# rectPreservedDuringLiveResize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle identifying the portion of your view that did not change during a live resize operation.

## Declaration

```swift
var rectPreservedDuringLiveResize: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is in the coordinate system of your view and reflects the space your view previously occupied. This rectangle may be smaller or the same size as your view’s current bounds, depending on whether the view grew or shrunk.

If your view does not support content preservation during live resizing, the rectangle will be empty. To support content preservation, override the [preservesContentDuringLiveResize](preservescontentduringliveresize.md) property in your view and have your implementation return [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The window containing your view must also support content preservation. To enable support for this feature in your window, use the [preservesContentDuringLiveResize](../nswindow/preservescontentduringliveresize.md) method of `NSWindow`.

## See Also

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize(\_:count:)](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [viewWillStartLiveResize()](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize()](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

# rectPreservedDuringLiveResize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The rectangle identifying the portion of your view that did not change during a live resize operation.

## Declaration

```objectivec
@property (readonly) NSRect rectPreservedDuringLiveResize;
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is in the coordinate system of your view and reflects the space your view previously occupied. This rectangle may be smaller or the same size as your view’s current bounds, depending on whether the view grew or shrunk.

If your view does not support content preservation during live resizing, the rectangle will be empty. To support content preservation, override the [preservesContentDuringLiveResize](preservescontentduringliveresize.md) property in your view and have your implementation return [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  The window containing your view must also support content preservation. To enable support for this feature in your window, use the [preservesContentDuringLiveResize](../nswindow/preservescontentduringliveresize.md) method of `NSWindow`.

## See Also

### Managing Live Resize

- [inLiveResize](inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize:count:](getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [viewWillStartLiveResize](viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize](viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.
