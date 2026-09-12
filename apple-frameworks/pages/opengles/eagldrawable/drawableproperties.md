> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eagldrawable/drawableproperties](https://developer.apple.com/documentation/opengles/eagldrawable/drawableproperties)

# drawableProperties (Swift)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A dictionary of values that specify the desired characteristics of the drawable surface.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var drawableProperties: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The `drawableProperties` dictionary specifies the properties that are used by this object when it is attached to an OpenGL ES renderbuffer. Your application should set these properties before passing this object into the `EAGLContext` method [renderbufferStorage(\_:from:)](../eaglcontext/renderbufferstorage%28__from_%29.md). If you change the `drawableProperties` dictionary, your application must call [renderbufferStorage(\_:from:)](../eaglcontext/renderbufferstorage%28__from_%29.md) again on the context for the new values to take effect.

## See Also

### Related Documentation

- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)

# drawableProperties (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A dictionary of values that specify the desired characteristics of the drawable surface.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * drawableProperties;
```

<a id="Discussion"></a>

## Discussion

The `drawableProperties` dictionary specifies the properties that are used by this object when it is attached to an OpenGL ES renderbuffer. Your application should set these properties before passing this object into the `EAGLContext` method [renderbufferStorage:fromDrawable:](../eaglcontext/renderbufferstorage%28__from_%29.md). If you change the `drawableProperties` dictionary, your application must call [renderbufferStorage:fromDrawable:](../eaglcontext/renderbufferstorage%28__from_%29.md) again on the context for the new values to take effect.

## See Also

### Related Documentation

- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)
