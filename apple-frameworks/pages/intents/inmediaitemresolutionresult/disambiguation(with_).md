> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inmediaitemresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with mediaItemsToDisambiguate: [INMediaItem]) -> Self
```

## Parameters

- `mediaItemsToDisambiguate`: An array of [INMediaItem](../inmediaitem.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one media item matches the given information and you can’t definitively pick one. Ask the user to select from among the notes that you specify.

For each [INMediaItem](../inmediaitem.md) object that you provide, include enough information to be able to locate the media item later. When the user selects one of the destinations, SiriKit puts the details from your [INMediaItem](../inmediaitem.md) object into the intent and asks you to resolve the media item again.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successes(with:)](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.

# disambiguationWithMediaItemsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithMediaItemsToDisambiguate:(NSArray<INMediaItem *> *) mediaItemsToDisambiguate;
```

## Parameters

- `mediaItemsToDisambiguate`: An array of [INMediaItem](../inmediaitem.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when more than one media item matches the given information and you can’t definitively pick one. Ask the user to select from among the notes that you specify.

For each [INMediaItem](../inmediaitem.md) object that you provide, include enough information to be able to locate the media item later. When the user selects one of the destinations, SiriKit puts the details from your [INMediaItem](../inmediaitem.md) object into the intent and asks you to resolve the media item again.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMediaItem:](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successesWithResolvedMediaItems:](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [confirmationRequiredWithMediaItemToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
