> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inmediaitemresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a result that contains the media item that matches the user’s request.

## Declaration

```swift
class func success(with resolvedMediaItem: INMediaItem) -> Self
```

## Parameters

- `resolvedMediaItem`: The value that resolves the user’s request. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result when your app successfully identifies a single media item to fulfill the intent. For cases where there are potential alternatives, use [successes(with:)](successes%28with_%29.md).

## See Also

### Creating a Resolution Result Object

- [successes(with:)](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedMediaItem: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a result that contains the media item that matches the user’s request.

## Declaration

```objectivec
+ (instancetype) successWithResolvedMediaItem:(INMediaItem *) resolvedMediaItem;
```

## Parameters

- `resolvedMediaItem`: The value that resolves the user’s request. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result when your app successfully identifies a single media item to fulfill the intent. For cases where there are potential alternatives, use [successesWithResolvedMediaItems:](successes%28with_%29.md).

## See Also

### Creating a Resolution Result Object

- [successesWithResolvedMediaItems:](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequiredWithMediaItemToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [disambiguationWithMediaItemsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
