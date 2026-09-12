> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-9e1zn/removedetectiontrack:](https://developer.apple.com/documentation/cinematic/cnscript-9e1zn/removedetectiontrack:)

# removeDetectionTrack:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Removes the user-created detection track.

## Declaration

```objectivec
- (BOOL) removeDetectionTrack:(CNDetectionTrack *) detectionTrack;
```

## Parameters

- `detectionTrack`: The detection track to remove.

<a id="return-value"></a>

## Return Value

A flag indicating whether removal of the user created detection track was successful.

<a id="Discussion"></a>

## Discussion

It’s not possible to remove tracks created at recording time.
