> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/kvtcompressionpreset_consistentquality

# kVTCompressionPreset_ConsistentQuality (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
let kVTCompressionPreset_ConsistentQuality: CFString
```

<a id="discussion"></a>

## Discussion

A preset to achieve consistent quality encoding across frames.

An encoder configured using this preset is expected to achieve consistent quality across frames with relaxed rate-control constraints.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing.
```

# kVTCompressionPreset_ConsistentQuality (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPreset_ConsistentQuality;
```

<a id="discussion"></a>

## Discussion

A preset to achieve consistent quality encoding across frames.

An encoder configured using this preset is expected to achieve consistent quality across frames with relaxed rate-control constraints.

```
See also kVTCompressionPreset_HighQuality, kVTCompressionPreset_Balanced, kVTCompressionPreset_HighSpeed, kVTCompressionPreset_VideoConferencing.
```
