> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel/makekernels(source:)](https://developer.apple.com/documentation/coreimage/cikernel/makekernels(source:))

# makeKernels(source:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.14) · tvOS  (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns and array of  `CIKernel` objects.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
class func makeKernels(source string: String) -> [CIKernel]?
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains one or more routines, each of which is marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

An array of  `CIKernel` objects. The array contains one `CIKernel` objects for each kernel routine in the supplied string. Each object in the array can be of class [CIKernel](../cikernel.md), [CIColorKernel](../cicolorkernel.md), or [CIWarpKernel](../ciwarpkernel.md) depending on the corresponding routine specified in the Core Image Kernel Language source code string.

<a id="Discussion"></a>

## Discussion

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## See Also

### Deprecated

- [init(source:)](init%28source_%29.md): Deprecated. Creates a single kernel object.

# kernelsWithString: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.14) · tvOS  (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns and array of  `CIKernel` objects.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (NSArray<CIKernel *> *) kernelsWithString:(NSString *) string;
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains one or more routines, each of which is marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

An array of  `CIKernel` objects. The array contains one `CIKernel` objects for each kernel routine in the supplied string. Each object in the array can be of class [CIKernel](../cikernel.md), [CIColorKernel](../cicolorkernel.md), or [CIWarpKernel](../ciwarpkernel.md) depending on the corresponding routine specified in the Core Image Kernel Language source code string.

<a id="Discussion"></a>

## Discussion

The Core Image Kernel Language is a dialect of the OpenGL Shading Language. See [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397) and [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185) for more details.

## See Also

### Deprecated

- [kernelWithString:](init%28source_%29.md): Deprecated. Creates a single kernel object.
