> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/finishdetectiontrack

# finishDetectionTrack

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Finish constructing the detection track and return it.

## Declaration

```objectivec
- (CNDetectionTrack *) finishDetectionTrack;
```

<a id="return-value"></a>

## Return Value

A detection track which tracks the object

<a id="Discussion"></a>

## Discussion

Used to convert a normalized point in an image to a rectangle used to start tracking.
