> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackrepeatmoderesolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inplaybackrepeatmoderesolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with playbackRepeatModeToConfirm: INPlaybackRepeatMode) -> Self
```

## Parameters

- `playbackRepeatModeToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a media item that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve media items your app doesn’t support.

## See Also

### Creating a Resolution Result

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.

# confirmationRequiredWithPlaybackRepeatModeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution requires the user to confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPlaybackRepeatModeToConfirm:(INPlaybackRepeatMode) playbackRepeatModeToConfirm;
```

## Parameters

- `playbackRepeatModeToConfirm`: The value that resolves the request, but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INMediaItemResolutionResult](../inmediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can’t resolve the parameter to a media item that’s similar, but not equal to, the one specified in the intent. Don’t use this method to resolve media items your app doesn’t support.

## See Also

### Creating a Resolution Result

- [successWithResolvedPlaybackRepeatMode:](success%28with_%29.md): Creates an object whose resolution involves successfully matching the specified parameter.
