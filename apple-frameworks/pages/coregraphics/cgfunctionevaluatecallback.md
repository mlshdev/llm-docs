> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunctionevaluatecallback](https://developer.apple.com/documentation/coregraphics/cgfunctionevaluatecallback)

# CGFunctionEvaluateCallback (Swift)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom operations on the supplied input data to produce output data.

## Declaration

```swift
typealias CGFunctionEvaluateCallback = (UnsafeMutableRawPointer?, UnsafePointer<CGFloat>, UnsafeMutablePointer<CGFloat>) -> Void
```

## Parameters

- `info`: The `info` parameter passed to [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- `inData`: An array of floats. The size of the array is that specified by the `domainDimension` parameter passed to the [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md) function.
- `outData`: An array of floats. The size of the array is that specified by the `rangeDimension` parameter passed to the [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md) function.

<a id="Discussion"></a>

## Discussion

The callback you write is responsible for implementing thecalculation of output values from the supplied input values. Forexample, if you want to implement a simple “squaring” functionof one input argument to one output argument, your evaluation functionmight be:

```objc
void evaluateSquare(void *info, const float *inData, float *outData)
{
    outData[0] = inData[0] * inData[0];
}
```

## See Also

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.

# CGFunctionEvaluateCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Performs custom operations on the supplied input data to produce output data.

## Declaration

```objectivec
typedef void (*)(void *, const double *, double *) CGFunctionEvaluateCallback;
```

## Parameters

- `info`: The `info` parameter passed to [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- `inData`: An array of floats. The size of the array is that specified by the `domainDimension` parameter passed to the [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md) function.
- `outData`: An array of floats. The size of the array is that specified by the `rangeDimension` parameter passed to the [CGFunctionCreate](cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md) function.

<a id="Discussion"></a>

## Discussion

The callback you write is responsible for implementing thecalculation of output values from the supplied input values. Forexample, if you want to implement a simple “squaring” functionof one input argument to one output argument, your evaluation functionmight be:

```objc
void evaluateSquare(void *info, const float *inData, float *outData)
{
    outData[0] = inData[0] * inData[0];
}
```

## See Also

### Callbacks

- [CGFunctionCallbacks](cgfunctioncallbacks.md): A structure that contains callbacks needed by a `CGFunctionRef` object.
- [CGFunctionReleaseInfoCallback](cgfunctionreleaseinfocallback.md): Performs custom clean-up tasks when Core Graphics deallocates a `CGFunctionRef` object.
