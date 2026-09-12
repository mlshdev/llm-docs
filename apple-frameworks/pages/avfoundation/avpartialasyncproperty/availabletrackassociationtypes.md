> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/availabletrackassociationtypes](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availabletrackassociationtypes)

# availableTrackAssociationTypes

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of association types that the track uses to associate with other tracks.

## Declaration

```swift
static var availableTrackAssociationTypes: AVAsyncProperty<Root, [AVAssetTrack.AssociationType]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading track associations

- [loadAssociatedTracks(ofType:completionHandler:)](../avassettrack/loadassociatedtracks%28oftype_completionhandler_%29.md): Loads associated tracks that have the specified association type.
