> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/result/intensitylevel](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/result/intensitylevel)

# intensityLevel

**Framework:** Media Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The intensity of flashing lights in the input surface.

## Declaration

```swift
var intensityLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

The result is a value between `0` and `100`, where `100` is the highest detectable intensity for flashing lights.

## See Also

### Interpreting results from video processing

- [surfaceProcessed](surfaceprocessed.md): A Boolean value that indicates whether the flashing lights processor successfully processed the input surface.
- [mitigationLevel](mitigationlevel.md): The amount of mitigation in the output surface.
