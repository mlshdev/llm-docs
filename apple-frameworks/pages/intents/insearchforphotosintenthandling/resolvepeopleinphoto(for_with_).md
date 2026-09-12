> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforphotosintenthandling/resolvepeopleinphoto(for:with:)](https://developer.apple.com/documentation/intents/insearchforphotosintenthandling/resolvepeopleinphoto(for:with:))

# resolvePeopleInPhoto(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the people in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolvePeopleInPhoto(for intent: INSearchForPhotosIntent, with completion: @escaping @Sendable ([INPersonResolutionResult]) -> Void)
```

```swift
optional func resolvePeopleInPhoto(for intent: INSearchForPhotosIntent) async -> [INPersonResolutionResult]
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object containing the details of your proposed resolution. For each successful resolution, create a resolution object with the [INPerson](../inperson.md) object that you can use to identify the user later.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the people in the photos. Use the information in the `intent` object to identify the corresponding users in your app. Always strive toward a successful resolution of the specified users, but feel free to ask for confirmation for one or more users if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider another resolution.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreated(for:with:)](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreated(for:with:)](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolveAlbumName(for:with:)](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
- [resolveSearchTerms(for:with:)](resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.

# resolvePeopleInPhotoForSearchForPhotos:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the people in the photos.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolvePeopleInPhotoForSearchForPhotos:(INSearchForPhotosIntent *) intent withCompletion:(void (^)(NSArray<INPersonResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResults**: The object containing the details of your proposed resolution. For each successful resolution, create a resolution object with the [INPerson](../inperson.md) object that you can use to identify the user later.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the people in the photos. Use the information in the `intent` object to identify the corresponding users in your app. Always strive toward a successful resolution of the specified users, but feel free to ask for confirmation for one or more users if there’s some uncertainty.

If you find multiple users matching the same name, consider asking the user to disambiguate from among the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider another resolution.

## See Also

### Resolving the Intent Parameters

- [resolveDateCreatedForSearchForPhotos:withCompletion:](resolvedatecreated%28for_with_%29.md): Deprecated. Resolves the taken dates for the photos.
- [resolveLocationCreatedForSearchForPhotos:withCompletion:](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolveAlbumNameForSearchForPhotos:withCompletion:](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
- [resolveSearchTermsForSearchForPhotos:withCompletion:](resolvesearchterms%28for_with_%29.md): Deprecated. Resolves any search terms provided by the user.
