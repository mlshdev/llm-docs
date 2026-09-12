> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/comparefunction](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/comparefunction)

# compareFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sampler comparison function used when performing a sample compare operation on a depth texture.

## Declaration

```swift
var compareFunction: MTLCompareFunction { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCompareFunction.never](../mtlcomparefunction/never.md).

The [MTLFeatureSet.iOS_GPUFamily3_v1](../mtlfeatureset/ios_gpufamily3_v1.md) and [MTLFeatureSet.iOS_GPUFamily1_v1](../mtlfeatureset/ios_gpufamily1_v1.md) feature sets allow you to define a framework-side sampler comparison function for an [MTLSamplerState](../mtlsamplerstate.md) instance. All feature sets support shader-side sampler comparison functions, as described in the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Declaring the depth comparison mode

- [MTLCompareFunction](../mtlcomparefunction.md): Options used to specify how a sample compare operation should be performed on a depth texture.

# compareFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sampler comparison function used when performing a sample compare operation on a depth texture.

## Declaration

```objectivec
@property (nonatomic) MTLCompareFunction compareFunction;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLCompareFunctionNever](../mtlcomparefunction/never.md).

The [MTLFeatureSet_iOS_GPUFamily3_v1](../mtlfeatureset/ios_gpufamily3_v1.md) and [MTLFeatureSet_iOS_GPUFamily1_v1](../mtlfeatureset/ios_gpufamily1_v1.md) feature sets allow you to define a framework-side sampler comparison function for an [MTLSamplerState](../mtlsamplerstate.md) instance. All feature sets support shader-side sampler comparison functions, as described in the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Declaring the depth comparison mode

- [MTLCompareFunction](../mtlcomparefunction.md): Options used to specify how a sample compare operation should be performed on a depth texture.
