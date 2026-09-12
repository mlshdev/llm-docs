> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediaitemresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inmediaitemresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with mediaItemToConfirm: INMediaItem?) -> Self
```

## Parameters

- `mediaItemToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a media item that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve media items your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successes(with:)](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithMediaItemToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithMediaItemToConfirm:(INMediaItem *) mediaItemToConfirm;
```

## Parameters

- `mediaItemToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a media item that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve media items your app doesn’t support.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedMediaItem:](success%28with_%29.md): Creates a result that contains the media item that matches the user’s request.
- [successesWithResolvedMediaItems:](successes%28with_%29.md): Creates an array of results that contains the media items that match the user’s request.
- [disambiguationWithMediaItemsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
