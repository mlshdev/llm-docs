> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/glkit/glkview/init(frame:context:)

# init(frame:context:) (Swift)

**Framework:** GLKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes a new view.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init(frame: CGRect, context: EAGLContext)
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it. This method uses the frame rectangle to set the[center](../../uikit/uiview/center.md) and [bounds](../../uikit/uiview/bounds.md) properties accordingly.
- `context`: An OpenGL ES context used to store the framebuffer object.

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the object couldn’t be created.

# initWithFrame:context: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes a new view.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame context:(EAGLContext *) context;
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it. This method uses the frame rectangle to set the[center](../../uikit/uiview/center.md) and [bounds](../../uikit/uiview/bounds.md) properties accordingly.
- `context`: An OpenGL ES context used to store the framebuffer object.

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the object couldn’t be created.
