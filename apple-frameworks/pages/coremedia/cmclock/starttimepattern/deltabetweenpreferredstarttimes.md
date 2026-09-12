> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock/starttimepattern/deltabetweenpreferredstarttimes](https://developer.apple.com/documentation/coremedia/cmclock/starttimepattern/deltabetweenpreferredstarttimes)

# deltaBetweenPreferredStartTimes

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The delta between successive preferred start times.

## Declaration

```swift
var deltaBetweenPreferredStartTimes: CMTime
```

<a id="discussion"></a>

## Discussion

Add integer multiples of this delta to `clockStartTime` and `hostClockStartTime` to calculate near-future preferred start times.
