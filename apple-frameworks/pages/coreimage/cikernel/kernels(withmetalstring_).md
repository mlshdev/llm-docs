> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel/kernels(withmetalstring:)](https://developer.apple.com/documentation/coreimage/cikernel/kernels(withmetalstring:))

# kernels(withMetalString:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Load kernels from a Metal language string.

## Declaration

```swift
class func kernels(withMetalString source: String) throws -> [CIKernel]
```

## Parameters

- `source`: A string containing the progam in Metal language.

<a id="return-value"></a>

## Return Value

An array of [CIKernel](../cikernel.md) objects.

## See Also

### Creating a Kernel Using Metal Shading Language

- [init(functionName:fromMetalLibraryData:)](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [init(functionName:fromMetalLibraryData:outputPixelFormat:)](init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernelNames(fromMetalLibraryData:)](kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.

# kernelsWithMetalString:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Load kernels from a Metal language string.

## Declaration

```objectivec
+ (NSArray<CIKernel *> *) kernelsWithMetalString:(NSString *) source error:(NSError **) error;
```

## Parameters

- `source`: A string containing the progam in Metal language.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An array of [CIKernel](../cikernel.md) objects. On failure, this method returns `nil`.

## See Also

### Creating a Kernel Using Metal Shading Language

- [kernelWithFunctionName:fromMetalLibraryData:error:](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [kernelWithFunctionName:fromMetalLibraryData:outputPixelFormat:error:](init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernelNamesFromMetalLibraryData:](kernelnames%28frommetallibrarydata_%29.md): Return an array of strings containing the names of all of the kernels contained in the Metal library.
