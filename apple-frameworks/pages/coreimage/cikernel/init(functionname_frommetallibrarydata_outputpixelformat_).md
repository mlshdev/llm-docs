> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel/init(functionname:frommetallibrarydata:outputpixelformat:)](https://developer.apple.com/documentation/coreimage/cikernel/init(functionname:frommetallibrarydata:outputpixelformat:))

# init(functionName:fromMetalLibraryData:outputPixelFormat:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.

## Declaration

```swift
convenience init(functionName name: String, fromMetalLibraryData data: Data, outputPixelFormat format: CIFormat) throws
```

## Parameters

- `name`: The name of the function in the Metal shading language.
- `data`: A metallib file compiled with the Core Image Standard Library.
- `format`: The pixel format of the output kernel.

<a id="Discussion"></a>

## Discussion

This method allows you to use MSL as the shader language for a Core Image kernel. Since MSL based kernels are precompiled, initializing them is faster than their than Core Image Kernel Language (CIKL) counterparts and Xcode can provide error diagnostics during development rather than at runtime. MSL is a more modern language than CIKL, and you can write shader code that uses arrays, structs and matrices.

MSL based kernels still support concatenation and tiling and can work in the same filter graph as traditional CIKL kernels.

## See Also

### Creating a Kernel Using Metal Shading Language

- [init(functionName:fromMetalLibraryData:)](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [kernelNames(fromMetalLibraryData:)](kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.
- [kernels(withMetalString:)](kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.

# kernelWithFunctionName:fromMetalLibraryData:outputPixelFormat:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.

## Declaration

```objectivec
+ (instancetype) kernelWithFunctionName:(NSString *) name fromMetalLibraryData:(NSData *) data outputPixelFormat:(CIFormat) format error:(NSError **) error;
```

## Parameters

- `name`: The name of the function in the Metal shading language.
- `data`: A metallib file compiled with the Core Image Standard Library.
- `format`: The pixel format of the output kernel.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

This method allows you to use MSL as the shader language for a Core Image kernel. Since MSL based kernels are precompiled, initializing them is faster than their than Core Image Kernel Language (CIKL) counterparts and Xcode can provide error diagnostics during development rather than at runtime. MSL is a more modern language than CIKL, and you can write shader code that uses arrays, structs and matrices.

MSL based kernels still support concatenation and tiling and can work in the same filter graph as traditional CIKL kernels.

## See Also

### Creating a Kernel Using Metal Shading Language

- [kernelWithFunctionName:fromMetalLibraryData:error:](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [kernelNamesFromMetalLibraryData:](kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.
- [kernelsWithMetalString:error:](kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.
