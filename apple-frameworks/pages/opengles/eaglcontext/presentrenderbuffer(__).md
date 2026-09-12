> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/presentrenderbuffer(_:)](https://developer.apple.com/documentation/opengles/eaglcontext/presentrenderbuffer(_:))

# presentRenderbuffer(\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Displays a renderbuffer’s contents on screen.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func presentRenderbuffer(_ target: Int) -> Bool
```

## Parameters

- `target`: The OpenGL ES binding point for a currently bound renderbuffer. The value of this parameter must be `GL_RENDERBUFFER` (or `GL_RENDERBUFFER_OES` in an OpenGL ES 1.1 context).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The renderbuffer to be displayed must have been allocated storage using the [renderbufferStorage(\_:from:)](renderbufferstorage%28__from_%29.md) method. The exact semantics for how and when the renderbuffer contents are displayed is controlled by the drawable object.

> **Important**

>  The contents of the renderbuffer may be altered after the renderbuffer is presented to the screen. After presenting the renderbuffer, your application must  *completely* redraw the contents of the renderbuffer before presenting it again. To preserve the contents of the renderbuffer you may set the [kEAGLDrawablePropertyRetainedBacking](../keagldrawablepropertyretainedbacking.md) key of the `drawableProperties` dictionary to [true](https://developer.apple.com/documentation/swift/true). Setting the key to [true](https://developer.apple.com/documentation/swift/true) may result in reduced graphics performance and increased memory usage. Therefore, choose this setting only when you need the renderbuffer’s contents to remain unchanged.

## See Also

### Related Documentation

- [renderbufferStorage(\_:from:)](renderbufferstorage%28__from_%29.md): Deprecated. Binds a drawable object’s storage to an OpenGL ES renderbuffer object.

# presentRenderbuffer: (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Displays a renderbuffer’s contents on screen.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) presentRenderbuffer:(NSUInteger) target;
```

## Parameters

- `target`: The OpenGL ES binding point for a currently bound renderbuffer. The value of this parameter must be `GL_RENDERBUFFER` (or `GL_RENDERBUFFER_OES` in an OpenGL ES 1.1 context).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The renderbuffer to be displayed must have been allocated storage using the [renderbufferStorage:fromDrawable:](renderbufferstorage%28__from_%29.md) method. The exact semantics for how and when the renderbuffer contents are displayed is controlled by the drawable object.

> **Important**

>  The contents of the renderbuffer may be altered after the renderbuffer is presented to the screen. After presenting the renderbuffer, your application must  *completely* redraw the contents of the renderbuffer before presenting it again. To preserve the contents of the renderbuffer you may set the [kEAGLDrawablePropertyRetainedBacking](../keagldrawablepropertyretainedbacking.md) key of the `drawableProperties` dictionary to [true](https://developer.apple.com/documentation/swift/true). Setting the key to [true](https://developer.apple.com/documentation/swift/true) may result in reduced graphics performance and increased memory usage. Therefore, choose this setting only when you need the renderbuffer’s contents to remain unchanged.

## See Also

### Related Documentation

- [renderbufferStorage:fromDrawable:](renderbufferstorage%28__from_%29.md): Deprecated. Binds a drawable object’s storage to an OpenGL ES renderbuffer object.
