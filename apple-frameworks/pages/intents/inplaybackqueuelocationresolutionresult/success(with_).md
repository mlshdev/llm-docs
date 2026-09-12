> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackqueuelocationresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inplaybackqueuelocationresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```swift
class func success(with resolvedPlaybackQueueLocation: INPlaybackQueueLocation) -> Self
```

## Parameters

- `resolvedPlaybackQueueLocation`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlaybackQueueLocationResolutionResult](../inplaybackqueuelocationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the playback queue location for a media item.

## See Also

### Constants

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [INPlaybackQueueLocation](../inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.

# successWithResolvedPlaybackQueueLocation: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPlaybackQueueLocation:(INPlaybackQueueLocation) resolvedPlaybackQueueLocation;
```

## Parameters

- `resolvedPlaybackQueueLocation`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlaybackQueueLocationResolutionResult](../inplaybackqueuelocationresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the playback queue location for a media item.

## See Also

### Constants

- [confirmationRequiredWithPlaybackQueueLocationToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
- [INPlaybackQueueLocation](../inplaybackqueuelocation.md): Constants that describe the playback queue location for a media item.
