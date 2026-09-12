> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkview/delegate](https://developer.apple.com/documentation/glkit/glkview/delegate)

# delegate (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The view’s delegate.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: (any GLKViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A delegate is optional. If a delegate is provided, it is called instead of calling a [draw(\_:)](../../uikit/uiview/draw%28__%29.md) method whenever the view’s contents need to be drawn. You should either subclass the view to override the `draw` method, or provide a delegate, but not both.

# delegate (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The view’s delegate.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<GLKViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A delegate is optional. If a delegate is provided, it is called instead of calling a [drawRect:](../../uikit/uiview/draw%28__%29.md) method whenever the view’s contents need to be drawn. You should either subclass the view to override the `draw` method, or provide a delegate, but not both.
