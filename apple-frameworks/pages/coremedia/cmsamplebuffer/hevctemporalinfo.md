> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/hevctemporalinfo

# CMSampleBuffer.HEVCTemporalInfo

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The temporal layer information for all samples in a temporal layer.

## Declaration

```swift
struct HEVCTemporalInfo
```

<a id="overview"></a>

## Overview

The members of this struct represents the `tscl` sample group as defined in ISO/IEC 14496‐15 section 8.4.5 Temporal scalability sample grouping..

## Topics

### Initializers

- [init(temporalLayerID:profileSpace:tierFlag:profileIndex:profileCompatibilityFlags:constraintIndicatorFlags:levelIndex:)](hevctemporalinfo/init%28temporallayerid_profilespace_tierflag_profileindex_profilecompatibilityflags_constraintindicatorflags_levelindex_%29.md)

### Instance Properties

- [constraintIndicatorFlags](hevctemporalinfo/constraintindicatorflags.md)
- [levelIndex](hevctemporalinfo/levelindex.md)
- [profileCompatibilityFlags](hevctemporalinfo/profilecompatibilityflags.md)
- [profileIndex](hevctemporalinfo/profileindex.md)
- [profileSpace](hevctemporalinfo/profilespace.md)
- [temporalLayerID](hevctemporalinfo/temporallayerid.md)
- [tierFlag](hevctemporalinfo/tierflag.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
