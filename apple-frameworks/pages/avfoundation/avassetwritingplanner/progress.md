> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/progress

# progress (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The current progress of the AVAssetWritingPlanner.

## Declaration

```swift
var progress: AVAssetWritingPlannerProgress { get }
```

<a id="discussion"></a>

## Discussion

Returns an AVAssetWritingPlannerProgress object that can be queried for per-track and overall progress information.

# progress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The current progress of the AVAssetWritingPlanner.

## Declaration

```objectivec
@property (readonly) AVAssetWritingPlannerProgress * progress;
```

<a id="discussion"></a>

## Discussion

Returns an AVAssetWritingPlannerProgress object that can be queried for per-track and overall progress information.
