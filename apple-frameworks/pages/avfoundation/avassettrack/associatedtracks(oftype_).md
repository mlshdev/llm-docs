> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/associatedtracks(oftype:)](https://developer.apple.com/documentation/avfoundation/avassettrack/associatedtracks(oftype:))

# associatedTracks(ofType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 16.0) · iPadOS 7.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.9+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns an array of associated tracks that have the specified association type.

> Use [loadAssociatedTracks(ofType:completionHandler:)](loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

## Declaration

```swift
func associatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType) -> [AVAssetTrack]
```

## Parameters

- `trackAssociationType`: The requested track association type.

<a id="return-value"></a>

## Return Value

An array of tracks matching the specified track association type, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load associated tracks asynchronously using [loadAssociatedTracks(ofType:completionHandler:)](loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableTrackAssociationTypes](availabletrackassociationtypes.md) property.

# associatedTracksOfType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns an array of associated tracks that have the specified association type.

> Use [loadAssociatedTracksOfType:completionHandler:](loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVAssetTrack *> *) associatedTracksOfType:(AVTrackAssociationType) trackAssociationType;
```

## Parameters

- `trackAssociationType`: The requested track association type.

<a id="return-value"></a>

## Return Value

An array of tracks matching the specified track association type, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later. Load associated tracks asynchronously using [loadAssociatedTracksOfType:completionHandler:](loadassociatedtracks%28oftype_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableTrackAssociationTypes](availabletrackassociationtypes.md) property.

## See Also

### Accessing track associations

- [availableTrackAssociationTypes](availabletrackassociationtypes.md): Deprecated. An array of association types that the track uses to associate with other tracks.
- [AVTrackAssociationType](associationtype.md): Constants that define track association types.
