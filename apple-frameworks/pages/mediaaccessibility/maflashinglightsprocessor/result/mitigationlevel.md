> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/maflashinglightsprocessor/result/mitigationlevel](https://developer.apple.com/documentation/mediaaccessibility/maflashinglightsprocessor/result/mitigationlevel)

# mitigationLevel

**Framework:** Media Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The amount of mitigation in the output surface.

## Declaration

```swift
var mitigationLevel: Float { get }
```

<a id="Discussion"></a>

## Discussion

The result is a value between `0` and `100`, where `100` is the highest level of mitigation that can apply to the output surface, indicating the output is completely dark.

## See Also

### Interpreting results from video processing

- [surfaceProcessed](surfaceprocessed.md): A Boolean value that indicates whether the flashing lights processor successfully processed the input surface.
- [intensityLevel](intensitylevel.md): The intensity of flashing lights in the input surface.
