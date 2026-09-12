> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerminmagfilter/linear](https://developer.apple.com/documentation/metal/mtlsamplerminmagfilter/linear)

# MTLSamplerMinMagFilter.linear (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Select two pixels in each dimension and interpolate linearly between them.

## Declaration

```swift
case linear
```

<a id="discussion"></a>

## Discussion

Support for linear filtering varies by GPU and the format of the texture being sampled. For example, you can’t use linear filtering on textures with an integer format, and only some device objects support linear filtering for textures with a floating-point format. To determine whether linear filtering is available for a specific texture format, see:

- [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf)
- [Metal feature set tables (Numbers)](https://developer.apple.com/metal/metal-feature-set-tables.zip)

## See Also

### Filter options

- [MTLSamplerMinMagFilter.nearest](nearest.md): Select the single pixel nearest to the sample point.

# MTLSamplerMinMagFilterLinear (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Select two pixels in each dimension and interpolate linearly between them.

## Declaration

```objectivec
MTLSamplerMinMagFilterLinear
```

<a id="discussion"></a>

## Discussion

Support for linear filtering varies by GPU and the format of the texture being sampled. For example, you can’t use linear filtering on textures with an integer format, and only some device objects support linear filtering for textures with a floating-point format. To determine whether linear filtering is available for a specific texture format, see:

- [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf)
- [Metal feature set tables (Numbers)](https://developer.apple.com/metal/metal-feature-set-tables.zip)

## See Also

### Filter options

- [MTLSamplerMinMagFilterNearest](nearest.md): Select the single pixel nearest to the sample point.
