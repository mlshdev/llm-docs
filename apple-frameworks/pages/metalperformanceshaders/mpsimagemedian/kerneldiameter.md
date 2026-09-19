> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsimagemedian/kerneldiameter

# kernelDiameter (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The diameter, in pixels, of the filter window.

## Declaration

```swift
var kernelDiameter: Int { get }
```

<a id="Discussion"></a>

## Discussion

The median filter is applied to a `kernelDiameter * kernelDiameter` window of pixels centered on the corresponding source pixel for each destination pixel.  The kernel diameter must be an odd number.

# kernelDiameter (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The diameter, in pixels, of the filter window.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger kernelDiameter;
```

<a id="Discussion"></a>

## Discussion

The median filter is applied to a `kernelDiameter * kernelDiameter` window of pixels centered on the corresponding source pixel for each destination pixel.  The kernel diameter must be an odd number.
