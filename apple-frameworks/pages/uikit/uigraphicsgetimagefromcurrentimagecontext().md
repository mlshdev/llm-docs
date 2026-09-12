> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsgetimagefromcurrentimagecontext()](https://developer.apple.com/documentation/uikit/uigraphicsgetimagefromcurrentimagecontext())

# UIGraphicsGetImageFromCurrentImageContext() (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an image from the contents of the current bitmap-based graphics context.

> Use [currentImage](uigraphicsimagerenderercontext/currentimage.md) instead.

## Declaration

```swift
func UIGraphicsGetImageFromCurrentImageContext() -> UIImage?
```

<a id="return-value"></a>

## Return Value

A image object containing the contents of the current bitmap graphics context.

<a id="Discussion"></a>

## Discussion

You should call this function only when a bitmap-based graphics context is the current graphics context. If the current context is `nil` or was not created by a call to [UIGraphicsBeginImageContext(\_:)](uigraphicsbeginimagecontext%28__%29.md), this function returns `nil`.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIApplicationMain(\_:\_:\_:\_:)](uiapplicationmain%28________%29-9jjn8.md): Deprecated. Creates the application object and the application delegate and sets up the event cycle.
- [UIGraphicsBeginImageContext(\_:)](uigraphicsbeginimagecontext%28__%29.md): Deprecated. Creates a bitmap-based graphics context and makes it the current context.
- [UIGraphicsEndImageContext()](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.

# UIGraphicsGetImageFromCurrentImageContext (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an image from the contents of the current bitmap-based graphics context.

> Use [currentImage](uigraphicsimagerenderercontext/currentimage.md) instead.

## Declaration

```objectivec
extern UIImage *UIGraphicsGetImageFromCurrentImageContext();
```

<a id="return-value"></a>

## Return Value

A image object containing the contents of the current bitmap graphics context.

<a id="Discussion"></a>

## Discussion

You should call this function only when a bitmap-based graphics context is the current graphics context. If the current context is `nil` or was not created by a call to [UIGraphicsBeginImageContext](uigraphicsbeginimagecontext%28__%29.md), this function returns `nil`.

This function may be called from any thread of your app.

## See Also

### Deprecated functions

- [UIGraphicsBeginImageContext](uigraphicsbeginimagecontext%28__%29.md): Deprecated. Creates a bitmap-based graphics context and makes it the current context.
- [UIGraphicsEndImageContext](uigraphicsendimagecontext%28%29.md): Deprecated. Removes the current bitmap-based graphics context from the top of the stack.
