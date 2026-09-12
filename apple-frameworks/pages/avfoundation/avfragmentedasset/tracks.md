> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedasset/tracks](https://developer.apple.com/documentation/avfoundation/avfragmentedasset/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 16.0) · iPadOS 12.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 12.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 9.0)

The tracks an asset contains.

> Load the value of [tracks](../avpartialasyncproperty/tracks-9z3j9.md) asynchronously instead.

## Declaration

```swift
var tracks: [AVFragmentedAssetTrack] { get }
```

## See Also

### Accessing tracks

- [track(withTrackID:)](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The tracks an asset contains.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVFragmentedAssetTrack *> * tracks;
```

## See Also

### Accessing tracks

- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that present media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns tracks that present media of a specified characteristic.
