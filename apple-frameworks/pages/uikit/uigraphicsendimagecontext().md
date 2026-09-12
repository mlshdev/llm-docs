> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsendimagecontext()](https://developer.apple.com/documentation/uikit/uigraphicsendimagecontext())

# UIGraphicsEndImageContext() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Removes the current bitmap-based graphics context from the top of the stack.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```swift
func UIGraphicsEndImageContext()
```

<a id="Discussion"></a>

## Discussion

You use this function to clean up the drawing environment put in place by the [UIGraphicsBeginImageContext(\_:)](uigraphicsbeginimagecontext%28__%29.md) function and to remove the corresponding bitmap-based graphics context from the top of the stack. If the current context was not created using the [UIGraphicsBeginImageContext(\_:)](uigraphicsbeginimagecontext%28__%29.md) function, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIApplicationMain(\_:\_:\_:\_:)](uiapplicationmain%28________%29-9jjn8.md): Deprecated. Creates the application object and the application delegate and sets up the event cycle.
- [UIGraphicsBeginImageContext(\_:)](uigraphicsbeginimagecontext%28__%29.md): Deprecated. Creates a bitmap-based graphics context and makes it the current context.
- [UIGraphicsGetImageFromCurrentImageContext()](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.

# UIGraphicsEndImageContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Removes the current bitmap-based graphics context from the top of the stack.

> Use [UIGraphicsImageRenderer](uigraphicsimagerenderer.md) instead.

## Declaration

```objectivec
extern void UIGraphicsEndImageContext();
```

<a id="Discussion"></a>

## Discussion

You use this function to clean up the drawing environment put in place by the [UIGraphicsBeginImageContext](uigraphicsbeginimagecontext%28__%29.md) function and to remove the corresponding bitmap-based graphics context from the top of the stack. If the current context was not created using the [UIGraphicsBeginImageContext](uigraphicsbeginimagecontext%28__%29.md) function, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIGraphicsBeginImageContext](uigraphicsbeginimagecontext%28__%29.md): Deprecated. Creates a bitmap-based graphics context and makes it the current context.
- [UIGraphicsGetImageFromCurrentImageContext](uigraphicsgetimagefromcurrentimagecontext%28%29.md): Deprecated. Returns an image from the contents of the current bitmap-based graphics context.
