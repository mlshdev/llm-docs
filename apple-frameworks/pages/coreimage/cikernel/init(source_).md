> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel/init(source:)](https://developer.apple.com/documentation/coreimage/cikernel/init(source:))

# init(source:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.14) · tvOS  (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a single kernel object.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
convenience init?(source string: String)
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains a single routine marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

A new kernel object. The class of the returned object can be [CIKernel](../cikernel.md), [CIColorKernel](../cicolorkernel.md), or [CIWarpKernel](../ciwarpkernel.md) depending on the type of routine specified in the Core Image Kernel Language source code string.

<a id="Discussion"></a>

## Discussion

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
- [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397)

### Deprecated

- [makeKernels(source:)](makekernels%28source_%29.md): Deprecated. Creates and returns and array of `CIKernel` objects.

# kernelWithString: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.14) · tvOS  (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a single kernel object.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (instancetype) kernelWithString:(NSString *) string;
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains a single routine marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

A new kernel object. The class of the returned object can be [CIKernel](../cikernel.md), [CIColorKernel](../cicolorkernel.md), or [CIWarpKernel](../ciwarpkernel.md) depending on the type of routine specified in the Core Image Kernel Language source code string.

<a id="Discussion"></a>

## Discussion

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
- [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397)

### Deprecated

- [kernelsWithString:](makekernels%28source_%29.md): Deprecated. Creates and returns and array of `CIKernel` objects.
