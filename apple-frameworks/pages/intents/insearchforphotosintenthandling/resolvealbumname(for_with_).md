> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintenthandling/resolvealbumname(for:with:)](https://developer.apple.com/documentation/intents/insearchforphotosintenthandling/resolvealbumname(for:with:))

# resolveAlbumName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the name of the photo album containing the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveAlbumName(for intent: INSearchForPhotosIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveAlbumName(for intent: INSearchForPhotosIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the album name that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the name of the photo album.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreated(for:with:)](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhoto(for:with:)](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveSearchTerms(for:with:)](resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.

# resolveAlbumNameForSearchForPhotos:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the name of the photo album containing the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveAlbumNameForSearchForPhotos:(INSearchForPhotosIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the album name that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the name of the photo album.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreatedForSearchForPhotos:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreatedForSearchForPhotos:withCompletion:](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhotoForSearchForPhotos:withCompletion:](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveSearchTermsForSearchForPhotos:withCompletion:](resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.
