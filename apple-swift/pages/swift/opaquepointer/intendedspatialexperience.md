> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/opaquepointer/intendedspatialexperience](https://developer.apple.com/documentation/swift/opaquepointer/intendedspatialexperience)

# intendedSpatialExperience

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The AudioQueue’s intended spatial audio experience.

## Declaration

```swift
var intendedSpatialExperience: any SpatialAudioExperience { get set }
```

<a id="discussion"></a>

## Discussion

This value is only useful for output AudioQueues not configured in offline mode; otherwise it’s a no-op.

If unspecified, the property value defaults to `AutomaticSpatialAudio`.
