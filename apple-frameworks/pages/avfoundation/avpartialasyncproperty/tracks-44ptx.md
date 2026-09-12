> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avpartialasyncproperty/tracks-44ptx](https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-44ptx)

# tracks

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The tracks an asset contains.

## Declaration

```swift
static var tracks: AVAsyncProperty<Root, [AVAssetTrack]> { get }
```

## Mentioned In

- [Loading media data asynchronously](../loading-media-data-asynchronously.md)

<a id="Discussion"></a>

## Discussion

Use the [load(\_:isolation:)](../avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the property value.

## See Also

### Loading tracks

- [findCompatibleTrack(for:completionHandler:)](../avurlasset/findcompatibletrack%28for_completionhandler_%29.md): Loads an asset track from which you can insert any time range into the composition track.
