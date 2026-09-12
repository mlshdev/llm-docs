> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/usesepsonresolutionmismatch](https://developer.apple.com/documentation/appkit/nsimage/usesepsonresolutionmismatch)

# usesEPSOnResolutionMismatch (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.

## Declaration

```swift
var usesEPSOnResolutionMismatch: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Representation Selection Criteria for Images

- [prefersColorMatch](preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.
- [matchesOnMultipleResolution](matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.

# usesEPSOnResolutionMismatch (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether EPS representations are preferred when no other representations match the resolution of the device.

## Declaration

```objectivec
@property BOOL usesEPSOnResolutionMismatch;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting the Representation Selection Criteria for Images

- [prefersColorMatch](preferscolormatch.md): A Boolean value that indicates whether the image prefers to choose image representations using color-matching or resolution-matching.
- [matchesOnMultipleResolution](matchesonmultipleresolution.md): A Boolean value that indicates whether image representations whose resolution is an integral multiple of the device resolution are a match.
