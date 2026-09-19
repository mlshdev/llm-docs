> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cndetection-c.class/isvaliddetectionid:

# isValidDetectionID:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Determines whether a given detection ID is valid.

## Declaration

```objectivec
+ (BOOL) isValidDetectionID:(CNDetectionID) detectionID;
```

## Parameters

- `detectionID`: A unique identifier assigned by the cinematic script to all detections of the same subject and detection type across time.

<a id="return-value"></a>

## Return Value

A flag representing whether a given detection ID is valid
