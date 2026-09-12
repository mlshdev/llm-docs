> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewdelegate/glkview(_:drawin:)](https://developer.apple.com/documentation/glkit/glkviewdelegate/glkview(_:drawin:))

# glkView(\_:drawIn:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Draws the view’s contents.

## Declaration

```swift
func glkView(_ view: GLKView, drawIn rect: CGRect)
```

## Parameters

- `view`: The view requesting that its contents be redrawn.
- `rect`: A rectangle that describes the area that needs to be updated.

<a id="Discussion"></a>

## Discussion

The semantics of this method are identical to those of the [draw(\_:)](../../uikit/uiview/draw%28__%29.md) method; the [GLKView](../glkview.md) object makes its OpenGL ES context the current context and binds its framebuffer as the target for OpenGL ES rendering commands. Your delegate method should then draw the view’s contents.

# glkView:drawInRect: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

Draws the view’s contents.

## Declaration

```objectivec
- (void) glkView:(GLKView *) view drawInRect:(CGRect) rect;
```

## Parameters

- `view`: The view requesting that its contents be redrawn.
- `rect`: A rectangle that describes the area that needs to be updated.

<a id="Discussion"></a>

## Discussion

The semantics of this method are identical to those of the [drawRect:](../../uikit/uiview/draw%28__%29.md) method; the [GLKView](../glkview.md) object makes its OpenGL ES context the current context and binds its framebuffer as the target for OpenGL ES rendering commands. Your delegate method should then draw the view’s contents.
