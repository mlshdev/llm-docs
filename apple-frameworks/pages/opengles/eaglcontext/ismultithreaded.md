> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/ismultithreaded](https://developer.apple.com/documentation/opengles/eaglcontext/ismultithreaded)

# isMultiThreaded (Swift)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 12.0) · iPadOS 7.1+ (deprecated in 12.0) · Mac Catalyst 7.1+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that determines whether OpenGL ES defers work to another thread.

## Declaration

```swift
var isMultiThreaded: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to enable multithreading in OpenGL ES. A multithreaded OpenGL ES context automatically creates a worker thread and transfers some of its calculations to that thread. When you enable multithreading on a multicore device, internal OpenGL ES calculations performed on the CPU act in parallel with your app, improving performance.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), OpenGL ES performs any CPU-based calculations for a command on the thread it was called from.

If the current device does not support multithreaded OpenGL ES, the value of this property is always [false](https://developer.apple.com/documentation/swift/false)—attempting to set the value to [true](https://developer.apple.com/documentation/swift/true) has no effect.

> **Note**

>  Enabling multithreading has both costs and benefits to performance—you should choose a concurrency strategy that provides the most benefit to your app. For details, see [Concurrency and OpenGL ES](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/ConcurrencyandOpenGLES/ConcurrencyandOpenGLES.html#//apple_ref/doc/uid/TP40008793-CH409) in [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).

# multiThreaded (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ (deprecated in 12.0) · iPadOS 7.1+ (deprecated in 12.0) · Mac Catalyst 7.1+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that determines whether OpenGL ES defers work to another thread.

## Declaration

```objectivec
@property (nonatomic, getter=isMultiThreaded) BOOL multiThreaded;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to enable multithreading in OpenGL ES. A multithreaded OpenGL ES context automatically creates a worker thread and transfers some of its calculations to that thread. When you enable multithreading on a multicore device, internal OpenGL ES calculations performed on the CPU act in parallel with your app, improving performance.

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), OpenGL ES performs any CPU-based calculations for a command on the thread it was called from.

If the current device does not support multithreaded OpenGL ES, the value of this property is always [false](https://developer.apple.com/documentation/swift/false)—attempting to set the value to [true](https://developer.apple.com/documentation/swift/true) has no effect.

> **Note**

>  Enabling multithreading has both costs and benefits to performance—you should choose a concurrency strategy that provides the most benefit to your app. For details, see [Concurrency and OpenGL ES](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/ConcurrencyandOpenGLES/ConcurrencyandOpenGLES.html#//apple_ref/doc/uid/TP40008793-CH409) in [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793).
