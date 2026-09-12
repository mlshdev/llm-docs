> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cikernel/kernelnames(frommetallibrarydata:)](https://developer.apple.com/documentation/coreimage/cikernel/kernelnames(frommetallibrarydata:))

# kernelNames(fromMetalLibraryData:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Return an array of strings containing the names of all of the kernels contained in the Metal library.

## Declaration

```swift
class func kernelNames(fromMetalLibraryData data: Data) -> [String]
```

## Parameters

- `data`: Contents of the Metal library.

<a id="return-value"></a>

## Return Value

An Array of strings containing the names of the kernels.

## See Also

### Creating a Kernel Using Metal Shading Language

- [init(functionName:fromMetalLibraryData:)](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [init(functionName:fromMetalLibraryData:outputPixelFormat:)](init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernels(withMetalString:)](kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.

# kernelNamesFromMetalLibraryData: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Return an array of strings containing the names of all of the kernels contained in the Metal library.

## Declaration

```objectivec
+ (NSArray<NSString *> *) kernelNamesFromMetalLibraryData:(NSData *) data;
```

## Parameters

- `data`: Contents of the Metal library.

<a id="return-value"></a>

## Return Value

An Array of strings containing the names of the kernels.

## See Also

### Creating a Kernel Using Metal Shading Language

- [kernelWithFunctionName:fromMetalLibraryData:error:](init%28functionname_frommetallibrarydata_%29.md): Creates a single kernel object using a Metal Shading Language (MSL) kernel function.
- [kernelWithFunctionName:fromMetalLibraryData:outputPixelFormat:error:](init%28functionname_frommetallibrarydata_outputpixelformat_%29.md): Creates a single kernel object using a Metal Shading Language kernel function with optional pixel format.
- [kernelsWithMetalString:error:](kernels%28withmetalstring_%29.md): Load kernels from a Metal language string.
