> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnobjecttracker-7aliq/finishdetectiontrack](https://developer.apple.com/documentation/cinematic/cnobjecttracker-7aliq/finishdetectiontrack)

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
