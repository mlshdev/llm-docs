> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/loadassociatedtracks(oftype:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassettrack/loadassociatedtracks(oftype:completionhandler:))

# loadAssociatedTracks(ofType:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads associated tracks that have the specified association type.

## Declaration

```swift
func loadAssociatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType, completionHandler: @escaping @Sendable ([AVAssetTrack]?, (any Error)?) -> Void)
```

```swift
func loadAssociatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType) async throws -> [AVAssetTrack]
```

## Parameters

- `trackAssociationType`: The track association type to load tracks for.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **tracks**: The array of associated tracks, which may be empty if there are no tracks for the specified association type. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## See Also

### Loading track associations

- [availableTrackAssociationTypes](../avpartialasyncproperty/availabletrackassociationtypes.md): Conforms when `Root` inherits `AVAssetTrack`. An array of association types that the track uses to associate with other tracks.

# loadAssociatedTracksOfType:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads associated tracks that have the specified association type.

## Declaration

```objectivec
- (void) loadAssociatedTracksOfType:(AVTrackAssociationType) trackAssociationType completionHandler:(void (^)(NSArray<AVAssetTrack *> *, NSError *)) completionHandler;
```

## Parameters

- `trackAssociationType`: The track association type to load tracks for.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **tracks**: The array of associated tracks, which may be empty if there are no tracks for the specified association type. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.
