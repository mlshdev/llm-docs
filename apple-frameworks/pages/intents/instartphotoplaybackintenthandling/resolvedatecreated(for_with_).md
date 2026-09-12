> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartphotoplaybackintenthandling/resolvedatecreated(for:with:)](https://developer.apple.com/documentation/intents/instartphotoplaybackintenthandling/resolvedatecreated(for:with:))

# resolveDateCreated(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the taken dates for the photos.

> INStartPhotoPlaybackIntentHandling is deprecated. There is no replacement.

## Declaration

```swift
optional func resolveDateCreated(for intent: INStartPhotoPlaybackIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveDateCreated(for intent: INStartPhotoPlaybackIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you’re able to search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the dates for the photos. When resolving the set of dates, always strive toward a successful resolution, but feel free to ask for confirmation if there’s a date range that you think yields the intended results. For example, if the user asks for photos from Paris taken in June, but your app only has Paris photos from July, you can ask the user to confirm the revised dates.

## See Also

### Resolving the Intent Parameters

- [resolveLocationCreated(for:with:)](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhoto(for:with:)](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumName(for:with:)](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.

# resolveDateCreatedForStartPhotoPlayback:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the taken dates for the photos.

> INStartPhotoPlaybackIntentHandling is deprecated. There is no replacement.

## Declaration

```objectivec
- (void) resolveDateCreatedForStartPhotoPlayback:(INStartPhotoPlaybackIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution with the date range that you’re able to search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the dates for the photos. When resolving the set of dates, always strive toward a successful resolution, but feel free to ask for confirmation if there’s a date range that you think yields the intended results. For example, if the user asks for photos from Paris taken in June, but your app only has Paris photos from July, you can ask the user to confirm the revised dates.

## See Also

### Resolving the Intent Parameters

- [resolveLocationCreatedForStartPhotoPlayback:withCompletion:](resolvelocationcreated%28for_with_%29.md): Deprecated. Resolves the location of the photos.
- [resolvePeopleInPhotoForStartPhotoPlayback:withCompletion:](resolvepeopleinphoto%28for_with_%29.md): Deprecated. Resolves the people in the photos.
- [resolveAlbumNameForStartPhotoPlayback:withCompletion:](resolvealbumname%28for_with_%29.md): Deprecated. Resolves the name of the photo album containing the photos.
