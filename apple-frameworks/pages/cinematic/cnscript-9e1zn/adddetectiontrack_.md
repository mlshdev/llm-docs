> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/adddetectiontrack:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/adddetectiontrack:)

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
