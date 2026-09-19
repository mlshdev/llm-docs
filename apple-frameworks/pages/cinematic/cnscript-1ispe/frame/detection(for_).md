> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-1ispe/frame/detection(for:)

# detection(for:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

The detection in the frame with the given detection ID, if any.

## Declaration

```swift
func detection(for detectionID: CNDetectionID) -> CNDetection?
```

## Parameters

- `detectionID`: The detection ID for the detection.

<a id="return-value"></a>

## Return Value

A detection for the frame with the given detection ID.
