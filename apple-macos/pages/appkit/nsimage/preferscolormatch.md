> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/preferscolormatch](https://developer.apple.com/documentation/appkit/nsimage/preferscolormatch)

# prefersColorMatch (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.

## Declaration

```swift
var prefersColorMatch: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the image attempts to match the color capabilities of the rendering device first. When it is [false](https://developer.apple.com/documentation/swift/false), the image prefers resolution-matching first. The default value is [true](https://developer.apple.com/documentation/swift/true). Both color-matching and resolution-matching may influence the choice of an image representation. You use this method to choose which technique should be used first during the selection process.

## See Also

### Setting the Representation Selection Criteria for Images

- [usesEPSOnResolutionMismatch](usesepsonresolutionmismatch.md): A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.
- [matchesOnMultipleResolution](matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.

# prefersColorMatch (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.

## Declaration

```objectivec
@property BOOL prefersColorMatch;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the image attempts to match the color capabilities of the rendering device first. When it is [false](https://developer.apple.com/documentation/swift/false), the image prefers resolution-matching first. The default value is [true](https://developer.apple.com/documentation/swift/true). Both color-matching and resolution-matching may influence the choice of an image representation. You use this method to choose which technique should be used first during the selection process.

## See Also

### Setting the Representation Selection Criteria for Images

- [usesEPSOnResolutionMismatch](usesepsonresolutionmismatch.md): A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.
- [matchesOnMultipleResolution](matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.
