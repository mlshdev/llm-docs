> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/samplingnearest()](https://developer.apple.com/documentation/coreimage/ciimage/samplingnearest())

# samplingNearest() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Create an image by changing the receiver’s sample mode to nearest neighbor.

## Declaration

```swift
func samplingNearest() -> CIImage
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance with a nearest sampling.

## See Also

### Sampling the Image

- [samplingLinear()](samplinglinear%28%29.md): Create an image by changing the receiver’s sample mode to bilinear interpolation.

# imageBySamplingNearest (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Create an image by changing the receiver’s sample mode to nearest neighbor.

## Declaration

```objectivec
- (CIImage *) imageBySamplingNearest;
```

<a id="return-value"></a>

## Return Value

 An autoreleased [CIImage](../ciimage.md) instance with a nearest sampling.

## See Also

### Sampling the Image

- [imageBySamplingLinear](samplinglinear%28%29.md): Create an image by changing the receiver’s sample mode to bilinear interpolation.
