> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintenthandling/resolvemediadestination(for:with:)](https://developer.apple.com/documentation/intents/inaddmediaintenthandling/resolvemediadestination(for:with:))

# resolveMediaDestination(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the destination for the added media.

## Declaration

```swift
optional func resolveMediaDestination(for intent: INAddMediaIntent, with completion: @escaping @Sendable (INAddMediaMediaDestinationResolutionResult) -> Void)
```

```swift
optional func resolveMediaDestination(for intent: INAddMediaIntent) async -> INAddMediaMediaDestinationResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the destination for the media.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the destination for the media your app adds.

## See Also

### Resolving Details of the Intent

- [resolveMediaItems(for:with:)](resolvemediaitems%28for_with_%29.md): Resolves the media items to add.

# resolveMediaDestinationForAddMedia:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the destination for the added media.

## Declaration

```objectivec
- (void) resolveMediaDestinationForAddMedia:(INAddMediaIntent *) intent withCompletion:(void (^)(INAddMediaMediaDestinationResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the destination for the media.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the destination for the media your app adds.

## See Also

### Resolving Details of the Intent

- [resolveMediaItemsForAddMedia:withCompletion:](resolvemediaitems%28for_with_%29.md): Resolves the media items to add.
