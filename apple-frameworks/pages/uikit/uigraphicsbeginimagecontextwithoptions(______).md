> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsbeginimagecontextwithoptions(_:_:_:)](https://developer.apple.com/documentation/uikit/uigraphicsbeginimagecontextwithoptions(_:_:_:))

# UIGraphicsBeginImageContextWithOptions(\_:\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a bitmap-based graphics context with the specified options.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```swift
func UIGraphicsBeginImageContextWithOptions(_ size: CGSize, _ opaque: Bool, _ scale: CGFloat)
```

## Parameters

- `size`: The size (measured in points) of the new bitmap context. This represents the size of the image returned by the [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function. To get the size of the bitmap in pixels, you must multiply the width and height values by the value in the `scale` parameter.
- `opaque`: A Boolean flag indicating whether the bitmap is opaque. If you know the bitmap is fully opaque, specify [true](https://developer.apple.com/documentation/swift/true) to ignore the alpha channel and optimize the bitmap’s storage. Specifying [false](https://developer.apple.com/documentation/swift/false) means that the bitmap must include an alpha channel to handle any partially transparent pixels.
- `scale`: The scale factor to apply to the bitmap. If you specify a value of `0.0`, the scale factor is set to the scale factor of the device’s main screen.

<a id="Discussion"></a>

## Discussion

You use this function to configure the drawing environment for rendering into a bitmap. The format for the bitmap is a ARGB 32-bit integer pixel format using host-byte order. If the opaque parameter is [true](https://developer.apple.com/documentation/swift/true), the alpha channel is ignored and the bitmap is treated as fully opaque ([CGImageAlphaInfo.noneSkipFirst](../coregraphics/cgimagealphainfo/noneskipfirst.md) | [kCGBitmapByteOrder32Host](../coregraphics/kcgbitmapbyteorder32host.md)). Otherwise, each pixel uses a premultipled ARGB format ([CGImageAlphaInfo.premultipliedFirst](../coregraphics/cgimagealphainfo/premultipliedfirst.md) | [kCGBitmapByteOrder32Host](../coregraphics/kcgbitmapbyteorder32host.md)).

The environment also uses the default coordinate system for UIKit views, where the origin is in the upper-left corner and the positive axes extend down and to the right of the origin. The supplied scale factor is also applied to the coordinate system and resulting images. The drawing environment is pushed onto the graphics context stack immediately.

While the context created by this function is the current context, you can call the [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function to retrieve an image object based on the current contents of the context. When you are done modifying the context, you must call the [UIGraphicsEndImageContext()](uigraphicsendimagecontext%28%29.md) function to clean up the bitmap drawing environment and remove the graphics context from the top of the context stack. You should not use the [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md) function to remove this type of context from the stack.

In most other respects, the graphics context created by this function behaves like any other graphics context. You can change the context by pushing and popping other graphics contexts. You can also get the bitmap context using the [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md) function.

This function may be called from any thread of your app.

## See Also

### Related Documentation

- [UIGraphicsEndImageContext()](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.
- [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.

### Graphics context primitives

- [UIGraphicsGetCurrentContext()](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext(\_:)](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext()](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIRectClip(\_:)](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.

# UIGraphicsBeginImageContextWithOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a bitmap-based graphics context with the specified options.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```objectivec
extern void UIGraphicsBeginImageContextWithOptions(CGSize size, BOOL opaque, CGFloat scale);
```

## Parameters

- `size`: The size (measured in points) of the new bitmap context. This represents the size of the image returned by the [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function. To get the size of the bitmap in pixels, you must multiply the width and height values by the value in the `scale` parameter.
- `opaque`: A Boolean flag indicating whether the bitmap is opaque. If you know the bitmap is fully opaque, specify [true](https://developer.apple.com/documentation/swift/true) to ignore the alpha channel and optimize the bitmap’s storage. Specifying [false](https://developer.apple.com/documentation/swift/false) means that the bitmap must include an alpha channel to handle any partially transparent pixels.
- `scale`: The scale factor to apply to the bitmap. If you specify a value of `0.0`, the scale factor is set to the scale factor of the device’s main screen.

<a id="Discussion"></a>

## Discussion

You use this function to configure the drawing environment for rendering into a bitmap. The format for the bitmap is a ARGB 32-bit integer pixel format using host-byte order. If the opaque parameter is [true](https://developer.apple.com/documentation/swift/true), the alpha channel is ignored and the bitmap is treated as fully opaque ([kCGImageAlphaNoneSkipFirst](../coregraphics/cgimagealphainfo/noneskipfirst.md) | [kCGBitmapByteOrder32Host](../coregraphics/kcgbitmapbyteorder32host.md)). Otherwise, each pixel uses a premultipled ARGB format ([kCGImageAlphaPremultipliedFirst](../coregraphics/cgimagealphainfo/premultipliedfirst.md) | [kCGBitmapByteOrder32Host](../coregraphics/kcgbitmapbyteorder32host.md)).

The environment also uses the default coordinate system for UIKit views, where the origin is in the upper-left corner and the positive axes extend down and to the right of the origin. The supplied scale factor is also applied to the coordinate system and resulting images. The drawing environment is pushed onto the graphics context stack immediately.

While the context created by this function is the current context, you can call the [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function to retrieve an image object based on the current contents of the context. When you are done modifying the context, you must call the [UIGraphicsEndImageContext](uigraphicsendimagecontext%28%29.md) function to clean up the bitmap drawing environment and remove the graphics context from the top of the context stack. You should not use the [UIGraphicsPopContext](uigraphicspopcontext%28%29.md) function to remove this type of context from the stack.

In most other respects, the graphics context created by this function behaves like any other graphics context. You can change the context by pushing and popping other graphics contexts. You can also get the bitmap context using the [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md) function.

This function may be called from any thread of your app.

## See Also

### Related Documentation

- [UIGraphicsEndImageContext](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.
- [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.

### Graphics context primitives

- [UIGraphicsGetCurrentContext](uigraphicsgetcurrentcontext%28%29.md): Returns the current graphics context.
- [UIGraphicsPushContext](uigraphicspushcontext%28__%29.md): Makes the specified graphics context the current context.
- [UIGraphicsPopContext](uigraphicspopcontext%28%29.md): Removes the current graphics context from the top of the stack, restoring the previous context.
- [UIRectClip](uirectclip%28__%29.md): Modifies the current clipping path by intersecting it with the specified rectangle.
