> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcrenderer/render(attime:arguments:)](https://developer.apple.com/documentation/quartz/qcrenderer/render(attime:arguments:))

# render(atTime:arguments:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Renders a frame of a composition at the specified time.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func render(atTime time: TimeInterval, arguments: [AnyHashable : Any]!) -> Bool
```

## Parameters

- `time`: The time, in seconds, at which  to render a composition frame. The time must be a positive value or zero.
- `arguments`: An optional dictionary that can have any of the entries defined in [Rendering Arguments](../rendering-arguments.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful.

<a id="Discussion"></a>

## Discussion

You need to call this method each time you want to render a frame of the composition.

All OpenGL states are preserved  *except* the following:

- States defined by `GL_CURRENT_BIT`
- Textures on each unit and the environment mode
- Matrix mode

If you are using double buffers, keep in mind that the `renderAtTime:arguments:` method does not swap the front and back buffers of the OpenGL context. You must perform the swap yourself by calling the OpenGL command `flushBuffer` on the context associated with the renderer.

If you are interleaving OpenGL code with rendering of a composition, make sure that the OpenGL context is current. If you are using the [NSOpenGLContext](../../appkit/nsopenglcontext.md) class, call the [makeCurrentContext()](../../appkit/nsopenglcontext/makecurrentcontext%28%29.md) method prior to rendering. If you are using the CGL API, call the function `CGLSetCurrentContext(_:)`.

# renderAtTime:arguments: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Renders a frame of a composition at the specified time.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) renderAtTime:(NSTimeInterval) time arguments:(NSDictionary *) arguments;
```

## Parameters

- `time`: The time, in seconds, at which  to render a composition frame. The time must be a positive value or zero.
- `arguments`: An optional dictionary that can have any of the entries defined in [Rendering Arguments](../rendering-arguments.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful.

<a id="Discussion"></a>

## Discussion

You need to call this method each time you want to render a frame of the composition.

All OpenGL states are preserved  *except* the following:

- States defined by `GL_CURRENT_BIT`
- Textures on each unit and the environment mode
- Matrix mode

If you are using double buffers, keep in mind that the `renderAtTime:arguments:` method does not swap the front and back buffers of the OpenGL context. You must perform the swap yourself by calling the OpenGL command `flushBuffer` on the context associated with the renderer.

If you are interleaving OpenGL code with rendering of a composition, make sure that the OpenGL context is current. If you are using the [NSOpenGLContext](../../appkit/nsopenglcontext.md) class, call the [makeCurrentContext](../../appkit/nsopenglcontext/makecurrentcontext%28%29.md) method prior to rendering. If you are using the CGL API, call the function `CGLSetCurrentContext(_:)`.
