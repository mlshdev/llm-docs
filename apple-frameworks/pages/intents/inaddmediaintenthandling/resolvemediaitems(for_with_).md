> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintenthandling/resolvemediaitems(for:with:)](https://developer.apple.com/documentation/intents/inaddmediaintenthandling/resolvemediaitems(for:with:))

# resolveMediaItems(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the media items to add.

## Declaration

```swift
optional func resolveMediaItems(for intent: INAddMediaIntent, with completion: @escaping @Sendable ([INAddMediaMediaItemResolutionResult]) -> Void)
```

```swift
optional func resolveMediaItems(for intent: INAddMediaIntent) async -> [INAddMediaMediaItemResolutionResult]
```

## Parameters

- `intent`: The intent object that contain details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the media items to add. Always strive toward a successful resolution to the specific media items, but feel free to ask for confirmation of the selected media items if there’s some uncertainty about whether you are adding the correct media items.

If you find multiple media items matching the same name, consider asking the user to disambiguate from among the most likely candidates.

> **Note**

>  Don’t ask users for confirmation or disambiguation too often, as users may become frustrated and exit Siri.

## See Also

### Resolving Details of the Intent

- [resolveMediaDestination(for:with:)](resolvemediadestination%28for_with_%29.md): Resolves the destination for the added media.

# resolveMediaItemsForAddMedia:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the media items to add.

## Declaration

```objectivec
- (void) resolveMediaItemsForAddMedia:(INAddMediaIntent *) intent withCompletion:(void (^)(NSArray<INAddMediaMediaItemResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The intent object that contain details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the media items to add. Always strive toward a successful resolution to the specific media items, but feel free to ask for confirmation of the selected media items if there’s some uncertainty about whether you are adding the correct media items.

If you find multiple media items matching the same name, consider asking the user to disambiguate from among the most likely candidates.

> **Note**

>  Don’t ask users for confirmation or disambiguation too often, as users may become frustrated and exit Siri.

## See Also

### Resolving Details of the Intent

- [resolveMediaDestinationForAddMedia:withCompletion:](resolvemediadestination%28for_with_%29.md): Resolves the destination for the added media.
