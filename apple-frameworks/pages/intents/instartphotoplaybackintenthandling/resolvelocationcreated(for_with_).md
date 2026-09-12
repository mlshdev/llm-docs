> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintenthandling/resolvelocationcreated(for:with:)](https://developer.apple.com/documentation/intents/instartphotoplaybackintenthandling/resolvelocationcreated(for:with:))

# resolveLocationCreated(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the location of the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveLocationCreated(for intent: INStartPhotoPlaybackIntent, with completion: @escaping @Sendable (INPlacemarkResolutionResult) -> Void)
```

```swift
optional func resolveLocationCreated(for intent: INStartPhotoPlaybackIntent) async -> INPlacemarkResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the [CLPlacemark](../../corelocation/clplacemark.md) object you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to reesolve the location of the photos.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolvePeopleInPhoto(for:with:)](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumName(for:with:)](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.

# resolveLocationCreatedForStartPhotoPlayback:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the location of the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveLocationCreatedForStartPhotoPlayback:(INStartPhotoPlaybackIntent *) intent withCompletion:(void (^)(INPlacemarkResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the [CLPlacemark](../../corelocation/clplacemark.md) object you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to reesolve the location of the photos.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreatedForStartPhotoPlayback:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolvePeopleInPhotoForStartPhotoPlayback:withCompletion:](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumNameForStartPhotoPlayback:withCompletion:](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
