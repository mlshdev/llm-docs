> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/adddetectiontrack:

# addDetectionTrack:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Adds a user-created detection track.

## Declaration

```objectivec
- (CNDetectionID) addDetectionTrack:(CNDetectionTrack *) detectionTrack;
```

## Parameters

- `detectionTrack`: The detection track to add.

<a id="return-value"></a>

## Return Value

The unique detection ID assigned to the added track, which can be used for later lookup or decision creation.
