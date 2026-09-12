> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemresolutionresult/successes(with:)](https://developer.apple.com/documentation/intents/inmediaitemresolutionresult/successes(with:))

# successes(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an array of results that contains the media items that match the user’s request.

## Declaration

```swift
class func successes(with resolvedMediaItems: [INMediaItem]) -> [INMediaItemResolutionResult]
```

## Parameters

- `resolvedMediaItems`: An array of [INMediaItem](../inmediaitem.md) objects that resolve the user’s request. These values may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

The array of [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) objects.

<a id="Discussion"></a>

## Discussion

Use this method to create results when your app successfully identifies multiple media items to fulfill the same intent. After the first item in the list, any media item suggestions display as alternatives, but only on iOS. For cases where there are no potential alternatives, use [success(with:)](success%28with_%29.md).

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successesWithResolvedMediaItems: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an array of results that contains the media items that match the user’s request.

## Declaration

```objectivec
+ (NSArray<__kindof INMediaItemResolutionResult *> *) successesWithResolvedMediaItems:(NSArray<INMediaItem *> *) resolvedMediaItems;
```

## Parameters

- `resolvedMediaItems`: An array of [INMediaItem](../inmediaitem.md) objects that resolve the user’s request. These values may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

The array of [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) objects.

<a id="Discussion"></a>

## Discussion

Use this method to create results when your app successfully identifies multiple media items to fulfill the same intent. After the first item in the list, any media item suggestions display as alternatives, but only on iOS. For cases where there are no potential alternatives, use [successWithResolvedMediaItem:](success%28with_%29.md).

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMediaItem:](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [confirmationRequiredWithMediaItemToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguationWithMediaItemsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
