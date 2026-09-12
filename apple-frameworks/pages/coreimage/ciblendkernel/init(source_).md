> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblendkernel/init(source:)](https://developer.apple.com/documentation/coreimage/ciblendkernel/init(source:))

# init(source:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 12.0) · iPadOS 8.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.14) · tvOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a custom blend kernel from a program string.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```swift
convenience init?(source string: String)
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains a single routine marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

A new blend kernel object, or nil if the specified source code does not contain a valid blend kernel routine.

<a id="Discussion"></a>

## Discussion

This method is similar to the [init(source:)](../cikernel/init%28source_%29.md) method of the superclass [CIKernel](../cikernel.md), but creates only blend kernels. Use this method when you want to ensure that the type of kernel object returned (if any) is always [CIBlendKernel](../ciblendkernel.md).

# kernelWithString: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.14) · tvOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a custom blend kernel from a program string.

> Core Image Kernel Language API deprecated. (Define CI_SILENCE_GL_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (instancetype) kernelWithString:(NSString *) string;
```

## Parameters

- `string`: A program in the Core Image Kernel Language that contains a single routine marked using the `kernel` keyword.

<a id="return-value"></a>

## Return Value

A new blend kernel object, or nil if the specified source code does not contain a valid blend kernel routine.

<a id="Discussion"></a>

## Discussion

This method is similar to the [kernelWithString:](../cikernel/init%28source_%29.md) method of the superclass [CIKernel](../cikernel.md), but creates only blend kernels. Use this method when you want to ensure that the type of kernel object returned (if any) is always [CIBlendKernel](../ciblendkernel.md).
