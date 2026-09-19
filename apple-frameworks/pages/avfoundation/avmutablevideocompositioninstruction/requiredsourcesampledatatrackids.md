> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction/requiredsourcesampledatatrackids

# requiredSourceSampleDataTrackIDs (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 26.0) · iPadOS 15.0+ (deprecated in 26.0) · Mac Catalyst 15.0+ (deprecated in 26.0) · macOS 12.0+ (deprecated in 26.0) · tvOS 15.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The track identifiers of source sample data that the compositor requires to compose frames for the instruction.

## Declaration

```swift
var requiredSourceSampleDataTrackIDs: [NSNumber] { get set }
```

# requiredSourceSampleDataTrackIDs (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The track identifiers of source sample data that the compositor requires to compose frames for the instruction.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * requiredSourceSampleDataTrackIDs;
```
