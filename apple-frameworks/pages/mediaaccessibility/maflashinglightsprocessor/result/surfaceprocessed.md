> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/result/surfaceprocessed](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/result/surfaceprocessed)

# surfaceProcessed

**Framework:** Media Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the flashing lights processor successfully processed the input surface.

## Declaration

```swift
var surfaceProcessed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [false](https://developer.apple.com/documentation/swift/false) if the flashing lights processor can’t process the surface, which can occur for unsupported hardware or unsupported color spaces.

## See Also

### Interpreting results from video processing

- [intensityLevel](intensitylevel.md): The intensity of flashing lights in the input surface.
- [mitigationLevel](mitigationlevel.md): The amount of mitigation in the output surface.
