> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/trackgroups](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/trackgroups)

# trackGroups

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The track groups an asset contains.

## Declaration

```swift
static var trackGroups: AVAsyncProperty<Root, [AVAssetTrackGroup]> { get }
```

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

The value is an empty array if the asset has no track groups.
