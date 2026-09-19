> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciimage/samplinglinear()

# samplingLinear() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Create an image by changing the receiver’s sample mode to bilinear interpolation.

## Declaration

```swift
func samplingLinear() -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance with a bilinear sampling.

## See Also

### Sampling the Image

- [samplingNearest()](samplingnearest%28%29.md): Create an image by changing the receiver’s sample mode to nearest neighbor.

# imageBySamplingLinear (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Create an image by changing the receiver’s sample mode to bilinear interpolation.

## Declaration

```objectivec
- (CIImage *) imageBySamplingLinear;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance with a bilinear sampling.

## See Also

### Sampling the Image

- [imageBySamplingNearest](samplingnearest%28%29.md): Create an image by changing the receiver’s sample mode to nearest neighbor.
