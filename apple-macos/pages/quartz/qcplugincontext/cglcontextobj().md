> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/cglcontextobj()](https://developer.apple.com/documentation/quartz/qcplugincontext/cglcontextobj())

# cglContextObj() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the destination CGL context to use for OpenGL rendering from within the execution method.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
func cglContextObj() -> CGLContextObj!
```

<a id="return-value"></a>

## Return Value

The destination CGL context.

<a id="Discussion"></a>

## Discussion

To send commands to the OpenGL context:

- Use CGL macros instead of changing the current OpenGL context.
- Save and restore all OpenGL states except those defines by `GL_CURRENT_BIT` (vertex position, color, texture, and so on)

The following code shows how you’d use the method `CGLContextObj`:

```objc
// Set up using CGL macros.
#import <OpenGL/CGLMacro.h>
 
- (BOOL) execute:(id<QCPlugInContext>)context
              atTime:(NSTimeInterval)time
             withArguments:(NSDictionary *)arguments
{
    // Set the CGL context to a local variable.
    CGLContextObj cgl_ctx = [context CGLContextObj];
    if(cgl_ctx == NULL)
    return NO;
 
    // Save and set OpenGL states.
    // Put your OpenGL code here.
    // Restore the OpenGL states.
    return YES;
}
```

You can retrieve the corresponding OpenGL pixel format by calling the function `CGLGetPixelFormat(_:)`.

# CGLContextObj (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the destination CGL context to use for OpenGL rendering from within the execution method.

> Quartz Composer OpenGL API deprecated. (Define QC_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGLContextObj) CGLContextObj;
```

<a id="return-value"></a>

## Return Value

The destination CGL context.

<a id="Discussion"></a>

## Discussion

To send commands to the OpenGL context:

- Use CGL macros instead of changing the current OpenGL context.
- Save and restore all OpenGL states except those defines by `GL_CURRENT_BIT` (vertex position, color, texture, and so on)

The following code shows how you’d use the method `CGLContextObj`:

```objc
// Set up using CGL macros.
#import <OpenGL/CGLMacro.h>
 
- (BOOL) execute:(id<QCPlugInContext>)context
              atTime:(NSTimeInterval)time
             withArguments:(NSDictionary *)arguments
{
    // Set the CGL context to a local variable.
    CGLContextObj cgl_ctx = [context CGLContextObj];
    if(cgl_ctx == NULL)
    return NO;
 
    // Save and set OpenGL states.
    // Put your OpenGL code here.
    // Restore the OpenGL states.
    return YES;
}
```

You can retrieve the corresponding OpenGL pixel format by calling the function `CGLGetPixelFormat(_:)`.
