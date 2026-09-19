> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscriptframe/detectionforid:

# detectionForID:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The detection in the frame with the given detection ID, if any.

## Declaration

```objectivec
- (CNDetection *) detectionForID:(CNDetectionID) detectionID;
```

## Parameters

- `detectionID`: The detection ID for the detection.

<a id="return-value"></a>

## Return Value

A detection for the frame with the given detection ID.
