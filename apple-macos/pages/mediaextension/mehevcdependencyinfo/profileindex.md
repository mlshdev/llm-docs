> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mehevcdependencyinfo/profileindex](https://developer.apple.com/documentation/mediaextension/mehevcdependencyinfo/profileindex)

# profileIndex (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The HEVC profile index, if available.

## Declaration

```swift
var profileIndex: Int16 { get set }
```

<a id="Discussion"></a>

## Discussion

This value maps to the [kCMHEVCTemporalLevelInfoKey_ProfileIndex](https://developer.apple.com/documentation/coremedia/kcmhevctemporallevelinfokey_profileindex) sample buffer attachment, and is `-1` if this information isn’t available.

## See Also

### Inspecting the HEVC dependency attributes of a sample

- [hasTemporalSubLayerAccess](hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [hasStepwiseTemporalSubLayerAccess](hasstepwisetemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.
- [syncSampleNALUnitType](syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](profilespace.md): The HEVC profile space, if available.
- [tierFlag](tierflag.md): The HEVC tier level flag, if available.
- [profileCompatibilityFlags](profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](levelindex.md): The HEVC level index, if available.

# profileIndex (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The HEVC profile index, if available.

## Declaration

```objectivec
@property (nonatomic) int16_t profileIndex;
```

<a id="Discussion"></a>

## Discussion

This value maps to the [kCMHEVCTemporalLevelInfoKey_ProfileIndex](https://developer.apple.com/documentation/coremedia/kcmhevctemporallevelinfokey_profileindex) sample buffer attachment, and is `-1` if this information isn’t available.

## See Also

### Inspecting the HEVC dependency attributes of a sample

- [temporalSubLayerAccess](hastemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC temporal sublayer access (TSA) picture.
- [stepwiseTemporalSubLayerAccess](hasstepwisetemporalsublayeraccess.md): A Boolean value that indicates if the sample has an HEVC stepwise temporal sublayer access (STSA) picture.
- [syncSampleNALUnitType](syncsamplenalunittype.md): The NAL unit type for HEVC sync sample groups.
- [temporalLevel](temporallevel.md): The HEVC temporal level, if available.
- [profileSpace](profilespace.md): The HEVC profile space, if available.
- [tierFlag](tierflag.md): The HEVC tier level flag, if available.
- [profileCompatibilityFlags](profilecompatibilityflags.md): The HEVC profile compatibility flags (4 bytes), if available.
- [constraintIndicatorFlags](constraintindicatorflags.md): The HEVC constraint indicator flags (6 bytes), if available.
- [levelIndex](levelindex.md): The HEVC level index, if available.
