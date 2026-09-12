> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorkernel/apply(extent:arguments:)](https://developer.apple.com/documentation/coreimage/cicolorkernel/apply(extent:arguments:))

# apply(extent:arguments:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new image using the kernel and specified arguments.

## Declaration

```swift
func apply(extent: CGRect, arguments args: [Any]) -> CIImage?
```

## Parameters

- `extent`: The extent of the output image.
- `args`: An array of arguments to pass to the kernel routine. The type of each object in the array must be compatible with the corresponding parameter declared in the kernel routine source code. For details, see [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397).

<a id="return-value"></a>

## Return Value

A new image object describing the result of applying the kernel.

<a id="Discussion"></a>

## Discussion

This method is analogous to the [CIFilter](../cifilter-swift.class.md) method [apply(\_:arguments:options:)](../cifilter-swift.class/apply%28__arguments_options_%29.md), but it does not require construction of a [CIFilter](../cifilter-swift.class.md) object, and it allows you to specify a callback for determining the kernel’s region of interest as a block or closure. As with the similar [CIFilter](../cifilter-swift.class.md) method, calling this method does not execute the kernel code—filters and their kernel code are evaluated only when rendering a final output image.

# applyWithExtent:arguments: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a new image using the kernel and specified arguments.

## Declaration

```objectivec
- (CIImage *) applyWithExtent:(CGRect) extent arguments:(NSArray<id> *) args;
```

## Parameters

- `extent`: The extent of the output image.
- `args`: An array of arguments to pass to the kernel routine. The type of each object in the array must be compatible with the corresponding parameter declared in the kernel routine source code. For details, see [Core Image Kernel Language Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CIKernelLangRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004397).

<a id="return-value"></a>

## Return Value

A new image object describing the result of applying the kernel.

<a id="Discussion"></a>

## Discussion

This method is analogous to the [CIFilter](../cifilter-swift.class.md) method [apply:arguments:options:](../cifilter-swift.class/apply%28__arguments_options_%29.md), but it does not require construction of a [CIFilter](../cifilter-swift.class.md) object, and it allows you to specify a callback for determining the kernel’s region of interest as a block or closure. As with the similar [CIFilter](../cifilter-swift.class.md) method, calling this method does not execute the kernel code—filters and their kernel code are evaluated only when rendering a final output image.
