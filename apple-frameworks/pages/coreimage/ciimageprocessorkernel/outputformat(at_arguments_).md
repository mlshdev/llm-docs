> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessorkernel/outputformat(at:arguments:)](https://developer.apple.com/documentation/coreimage/ciimageprocessorkernel/outputformat(at:arguments:))

# outputFormat(at:arguments:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Override this class method if your processor has more than one output and you want your processor’s output to be in a specific supported `CIPixelFormat`.

## Declaration

```swift
class func outputFormat(at outputIndex: Int32, arguments: [String : Any]?) -> CIFormat
```

## Parameters

- `outputIndex`: The index that tells you which processor output for which to return the desired `CIPixelFormat`
- `arguments`: The arguments dictionary that was passed to [apply(withExtent:inputs:arguments:)](apply%28withextent_inputs_arguments_%29.md).

<a id="return-value"></a>

## Return Value

 Return the desired `CIPixelFormat`

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the outputFormat is `0`, then the output will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.

# outputFormatAtIndex:arguments: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Override this class method if your processor has more than one output and you want your processor’s output to be in a specific supported `CIPixelFormat`.

## Declaration

```objectivec
+ (CIFormat) outputFormatAtIndex:(int) outputIndex arguments:(NSDictionary<NSString *,id> *) arguments;
```

## Parameters

- `outputIndex`: The index that tells you which processor output for which to return the desired `CIPixelFormat`
- `arguments`: The arguments dictionary that was passed to [applyWithExtent:inputs:arguments:error:](apply%28withextent_inputs_arguments_%29.md).

<a id="return-value"></a>

## Return Value

 Return the desired `CIPixelFormat`

<a id="discussion"></a>

## Discussion

The format must be one of `kCIFormatBGRA8`, `kCIFormatRGBAh`, `kCIFormatRGBAf` or `kCIFormatR8`. On iOS 12 and macOS 10.14, the formats `kCIFormatRh` and `kCIFormatRf` are also supported.

If the outputFormat is `0`, then the output will be a supported format that best matches the rendering context’s `/CIContext/workingFormat`.
