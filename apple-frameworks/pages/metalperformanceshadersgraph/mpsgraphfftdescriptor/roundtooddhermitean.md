> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor/roundtooddhermitean](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor/roundtooddhermitean)

# roundToOddHermitean (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter which controls how graph rounds the output tensor size for a Hermitean-to-real Fourier transform.

## Declaration

```swift
var roundToOddHermitean: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If set to `YES` then MPSGraph rounds the last output dimension of the result tensor in [HermiteanToRealFFT(\_:axesTensor:descriptor:name:)](../mpsgraph/hermiteantorealfft%28__axestensor_descriptor_name_%29.md) to an odd value. Has no effect in the other Fourier transform operations. Default value: `NO`.

# roundToOddHermitean (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A parameter which controls how graph rounds the output tensor size for a Hermitean-to-real Fourier transform.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL roundToOddHermitean;
```

<a id="discussion"></a>

## Discussion

If set to `YES` then MPSGraph rounds the last output dimension of the result tensor in [HermiteanToRealFFTWithTensor:axesTensor:descriptor:name:](../mpsgraph/hermiteantorealfft%28__axestensor_descriptor_name_%29.md) to an odd value. Has no effect in the other Fourier transform operations. Default value: `NO`.
