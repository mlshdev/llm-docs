> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/tracks](https://developer.apple.com/documentation/avfoundation/avasset/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The tracks an asset contains.

> Load the value of [tracks](../avpartialasyncproperty/tracks-48zyw.md) asynchronously instead.

## Declaration

```swift
var tracks: [AVAssetTrack] { get }
```

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The tracks an asset contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVAssetTrack *> * tracks;
```

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
- [unusedTrackID](unusedtrackid%28%29.md): Deprecated. Returns an identifier that no other tracks in the asset use.
