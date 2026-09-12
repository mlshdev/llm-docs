> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsbeginimagecontext(_:)](https://developer.apple.com/documentation/uikit/uigraphicsbeginimagecontext(_:))

# UIGraphicsBeginImageContext(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a bitmap-based graphics context and makes it the current context.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```swift
func UIGraphicsBeginImageContext(_ size: CGSize)
```

## Parameters

- `size`: The size of the new bitmap context. This represents the size of the image returned by the [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function.

<a id="Discussion"></a>

## Discussion

This function is equivalent to calling the [UIGraphicsBeginImageContextWithOptions(\_:\_:\_:)](uigraphicsbeginimagecontextwithoptions%28______%29.md) function with the opaque parameter set to [false](https://developer.apple.com/documentation/swift/false) and a scale factor of `1.0`.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIApplicationMain(\_:\_:\_:\_:)](uiapplicationmain%28________%29-9jjn8.md): Deprecated. Creates the application object and the application delegate and sets up the event cycle.
- [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.
- [UIGraphicsEndImageContext()](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.

# UIGraphicsBeginImageContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a bitmap-based graphics context and makes it the current context.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```objectivec
extern void UIGraphicsBeginImageContext(CGSize size);
```

## Parameters

- `size`: The size of the new bitmap context. This represents the size of the image returned by the [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md) function.

<a id="Discussion"></a>

## Discussion

This function is equivalent to calling the [UIGraphicsBeginImageContextWithOptions](uigraphicsbeginimagecontextwithoptions%28______%29.md) function with the opaque parameter set to [false](https://developer.apple.com/documentation/swift/false) and a scale factor of `1.0`.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.
- [UIGraphicsEndImageContext](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.
