> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/unusedtrackid()](https://developer.apple.com/documentation/avfoundation/avasset/unusedtrackid())

# unusedTrackID() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns an identifier that no other tracks in the asset use.

> Use [findUnusedTrackID(completionHandler:)](findunusedtrackid%28completionhandler_%29.md) instead.

## Declaration

```swift
func unusedTrackID() -> CMPersistentTrackID
```

<a id="return-value"></a>

## Return Value

An unused [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) value.

# unusedTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns an identifier that no other tracks in the asset use.

> Use [findUnusedTrackIDWithCompletionHandler:](findunusedtrackid%28completionhandler_%29.md) instead.

## Declaration

```objectivec
- (CMPersistentTrackID) unusedTrackID;
```

<a id="return-value"></a>

## Return Value

An unused [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) value.

## See Also

### Accessing tracks

- [tracks](tracks.md): Deprecated. The tracks an asset contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Deprecated. Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Deprecated. Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Deprecated. Returns an array of asset tracks matching the specified media characteristic.
