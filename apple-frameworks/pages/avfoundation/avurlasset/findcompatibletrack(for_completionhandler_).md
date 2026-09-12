> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avurlasset/findcompatibletrack(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avurlasset/findcompatibletrack(for:completionhandler:))

# findCompatibleTrack(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an asset track from which you can insert any time range into the composition track.

## Declaration

```swift
func findCompatibleTrack(for compositionTrack: AVCompositionTrack, completionHandler: @escaping @Sendable (AVAssetTrack?, (any Error)?) -> Void)
```

```swift
func findCompatibleTrack(for compositionTrack: AVCompositionTrack) async throws -> AVAssetTrack?
```

## Parameters

- `compositionTrack`: A composition track to request an asset track for.
- `completionHandler`: A callback the system invokes after it finishes the request. The system calls the completion handler with the following arguments:

  - **track**: The compatible asset track, or `nil` if there isn’t one or an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method is the logical complement of [mutableTrack(compatibleWith:)](../avmutablecomposition/mutabletrack%28compatiblewith_%29.md).

## See Also

### Loading tracks

- [tracks](../avpartialasyncproperty/tracks-44ptx.md): Conforms when `Root` inherits `AVURLAsset`. The tracks an asset contains.

# findCompatibleTrackForCompositionTrack:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an asset track from which you can insert any time range into the composition track.

## Declaration

```objectivec
- (void) findCompatibleTrackForCompositionTrack:(AVCompositionTrack *) compositionTrack completionHandler:(void (^)(AVAssetTrack *, NSError *)) completionHandler;
```

## Parameters

- `compositionTrack`: A composition track to request an asset track for.
- `completionHandler`: A callback the system invokes after it finishes the request. The system calls the completion handler with the following arguments:

  - **track**: The compatible asset track, or `nil` if there isn’t one or an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

This method is the logical complement of [mutableTrackCompatibleWithTrack:](../avmutablecomposition/mutabletrack%28compatiblewith_%29.md).
