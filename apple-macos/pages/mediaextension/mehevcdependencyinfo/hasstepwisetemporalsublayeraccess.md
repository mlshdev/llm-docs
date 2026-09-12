> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mehevcdependencyinfo/hasstepwisetemporalsublayeraccess](https://developer.apple.com/documentation/mediaextension/mehevcdependencyinfo/hasstepwisetemporalsublayeraccess)

# hasStepwiseTemporalSubLayerAccess (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.

## Declaration

```swift
var hasStepwiseTemporalSubLayerAccess: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value maps to the [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess) sample buffer attachment.

## See Also

### Inspecting the HEVC dependency attributes of a sample

- [hasTemporalSubLayerAccess](hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [syncSampleNALUnitType](syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](profilespace.md): The HEVC profile space, if available.
- [tierFlag](tierflag.md): The HEVC tier level flag, if available.
- [profileIndex](profileindex.md): The HEVC profile index, if available.
- [profileCompatibilityFlags](profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](levelindex.md): The HEVC level index, if available.

# stepwiseTemporalSubLayerAccess (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.

## Declaration

```objectivec
@property (nonatomic, getter=hasStepwiseTemporalSubLayerAccess) BOOL stepwiseTemporalSubLayerAccess;
```

<a id="Discussion"></a>

## Discussion

This value maps to the [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess) sample buffer attachment.

## See Also

### Inspecting the HEVC dependency attributes of a sample

- [temporalSubLayerAccess](hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [syncSampleNALUnitType](syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](profilespace.md): The HEVC profile space, if available.
- [tierFlag](tierflag.md): The HEVC tier level flag, if available.
- [profileIndex](profileindex.md): The HEVC profile index, if available.
- [profileCompatibilityFlags](profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](levelindex.md): The HEVC level index, if available.
