> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediamediaitemresolutionresult/successes(with:)](https://developer.apple.com/documentation/intents/inplaymediamediaitemresolutionresult/successes(with:))

# successes(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an array of resolution results based on a set of media items you provide.

## Declaration

```swift
class func successes(with resolvedMediaItems: [INMediaItem]) -> [INPlayMediaMediaItemResolutionResult]
```

## Parameters

- `resolvedMediaItems`: The items that are relevant for the user’s intent.

<a id="return-value"></a>

## Return Value

An array of new [INPlayMediaMediaItemResolutionResult](../inplaymediamediaitemresolutionresult.md) objects.

<a id="Discussion"></a>

## Discussion

When the system calls [resolveMediaItems(for:with:)](../inplaymediaintenthandling/resolvemediaitems%28for_with_%29.md), if your app can identify relevant media for the intent, use this method to create results for each of those media items. If your app isn’t completely sure of the match, provide a few items with the best match first. The system can start playing the first item and offer the alternatives in case the user wants to play one of them instead.

## See Also

### Providing Successful Results

- [init(mediaItemResolutionResult:)](init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully playing a media item.

# successesWithResolvedMediaItems: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an array of resolution results based on a set of media items you provide.

## Declaration

```objectivec
+ (NSArray<INPlayMediaMediaItemResolutionResult *> *) successesWithResolvedMediaItems:(NSArray<INMediaItem *> *) resolvedMediaItems;
```

## Parameters

- `resolvedMediaItems`: The items that are relevant for the user’s intent.

<a id="return-value"></a>

## Return Value

An array of new [INPlayMediaMediaItemResolutionResult](../inplaymediamediaitemresolutionresult.md) objects.

<a id="Discussion"></a>

## Discussion

When the system calls [resolveMediaItemsForPlayMedia:withCompletion:](../inplaymediaintenthandling/resolvemediaitems%28for_with_%29.md), if your app can identify relevant media for the intent, use this method to create results for each of those media items. If your app isn’t completely sure of the match, provide a few items with the best match first. The system can start playing the first item and offer the alternatives in case the user wants to play one of them instead.

## See Also

### Providing Successful Results

- [initWithMediaItemResolutionResult:](init%28mediaitemresolutionresult_%29.md): Creates a result that involves successfully playing a media item.
