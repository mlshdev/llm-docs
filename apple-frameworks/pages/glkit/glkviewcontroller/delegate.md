> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkviewcontroller/delegate](https://developer.apple.com/documentation/glkit/glkviewcontroller/delegate)

# delegate (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The view controller’s delegate.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: (any GLKViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate is optional.

# delegate (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The view controller’s delegate.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<GLKViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate is optional.
