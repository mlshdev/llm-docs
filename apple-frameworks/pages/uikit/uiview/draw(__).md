> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/draw(_:)](https://developer.apple.com/documentation/uikit/uiview/draw(_:))

# draw(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Draws the view’s image within the passed-in rectangle.

## Declaration

```swift
func draw(_ rect: CGRect)
```

## Parameters

- `rect`: The portion of the view’s bounds that needs to be updated. The first time your view is drawn, this rectangle is typically the entire visible bounds of your view. However, during subsequent drawing operations, the rectangle may specify only part of your view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses that use technologies such as Core Graphics and UIKit to draw their view’s content should override this method and implement their drawing code there. You don’t need to override this method if your view sets its content in other ways. For example, you don’t need to override this method if your view just displays a background color or if your view sets its content directly using the underlying layer object.

By the time this method is called, UIKit has configured the drawing environment appropriately for your view and you can simply call whatever drawing methods and functions you need to render your content. Specifically, UIKit creates and configures a graphics context for drawing and adjusts the transform of that context so that its origin matches the origin of your view’s bounds rectangle. You can get a reference to the graphics context using the [UIGraphicsGetCurrentContext()](../uigraphicsgetcurrentcontext%28%29.md) function, but don’t establish a strong reference to the graphics context because it can change between calls to the [draw(\_:)](draw%28__%29.md) method.

Similarly, if you draw using OpenGL ES and the [GLKView](../../glkit/glkview.md) class, GLKit configures the underlying OpenGL ES context appropriately for your view before calling this method (or the [glkView(\_:drawIn:)](../../glkit/glkviewdelegate/glkview%28__drawin_%29.md) method of your [GLKView](../../glkit/glkview.md) delegate), so you can simply issue whatever OpenGL ES commands you need to render your content. For more information about how to draw using OpenGL ES, see [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).

You should limit any drawing to the rectangle specified in the `rect` parameter. In addition, if the [isOpaque](isopaque.md) property of your view is set to [true](https://developer.apple.com/documentation/swift/true), your [draw(\_:)](draw%28__%29.md) method must totally fill the specified rectangle with opaque content.

If you subclass [UIView](../uiview.md) directly, your implementation of this method doesn’t need to call `super`. However, if you’re subclassing a different view class, you should call `super` at some point in your implementation.

This method is called when a view is first displayed or when an event occurs that invalidates a visible part of the view. You should never call this method directly yourself. To invalidate part of your view, and thus cause that portion to be redrawn, call the [setNeedsDisplay()](setneedsdisplay%28%29.md) or [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md) method instead.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Related Documentation

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.

### Observing data in views

- [updateProperties()](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.

# drawRect: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Draws the view’s image within the passed-in rectangle.

## Declaration

```objectivec
- (void) drawRect:(CGRect) rect;
```

## Parameters

- `rect`: The portion of the view’s bounds that needs to be updated. The first time your view is drawn, this rectangle is typically the entire visible bounds of your view. However, during subsequent drawing operations, the rectangle may specify only part of your view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses that use technologies such as Core Graphics and UIKit to draw their view’s content should override this method and implement their drawing code there. You don’t need to override this method if your view sets its content in other ways. For example, you don’t need to override this method if your view just displays a background color or if your view sets its content directly using the underlying layer object.

By the time this method is called, UIKit has configured the drawing environment appropriately for your view and you can simply call whatever drawing methods and functions you need to render your content. Specifically, UIKit creates and configures a graphics context for drawing and adjusts the transform of that context so that its origin matches the origin of your view’s bounds rectangle. You can get a reference to the graphics context using the [UIGraphicsGetCurrentContext](../uigraphicsgetcurrentcontext%28%29.md) function, but don’t establish a strong reference to the graphics context because it can change between calls to the [drawRect:](draw%28__%29.md) method.

Similarly, if you draw using OpenGL ES and the [GLKView](../../glkit/glkview.md) class, GLKit configures the underlying OpenGL ES context appropriately for your view before calling this method (or the [glkView:drawInRect:](../../glkit/glkviewdelegate/glkview%28__drawin_%29.md) method of your [GLKView](../../glkit/glkview.md) delegate), so you can simply issue whatever OpenGL ES commands you need to render your content. For more information about how to draw using OpenGL ES, see [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).

You should limit any drawing to the rectangle specified in the `rect` parameter. In addition, if the [opaque](isopaque.md) property of your view is set to [true](https://developer.apple.com/documentation/swift/true), your [drawRect:](draw%28__%29.md) method must totally fill the specified rectangle with opaque content.

If you subclass [UIView](../uiview.md) directly, your implementation of this method doesn’t need to call `super`. However, if you’re subclassing a different view class, you should call `super` at some point in your implementation.

This method is called when a view is first displayed or when an event occurs that invalidates a visible part of the view. You should never call this method directly yourself. To invalidate part of your view, and thus cause that portion to be redrawn, call the [setNeedsDisplay](setneedsdisplay%28%29.md) or [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md) method instead.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Related Documentation

- [contentMode](contentmode-swift.property.md): A flag used to determine how a view lays out its content when its bounds change.

### Observing data in views

- [updateProperties](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
