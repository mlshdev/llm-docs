> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaybackrepeatmoderesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inplaybackrepeatmoderesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```swift
class func success(with resolvedPlaybackRepeatMode: INPlaybackRepeatMode) -> Self
```

## Parameters

- `resolvedPlaybackRepeatMode`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlaybackRepeatModeResolutionResult](../inplaybackrepeatmoderesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the plaback repeat mode for a media item.

## See Also

### Creating a Resolution Result

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.

# successWithResolvedPlaybackRepeatMode: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an object whose resolution involves successfully matching the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPlaybackRepeatMode:(INPlaybackRepeatMode) resolvedPlaybackRepeatMode;
```

## Parameters

- `resolvedPlaybackRepeatMode`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlaybackRepeatModeResolutionResult](../inplaybackrepeatmoderesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you’re able to change the plaback repeat mode for a media item.

## See Also

### Creating a Resolution Result

- [confirmationRequiredWithPlaybackRepeatModeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires the user to confirm the value before proceeding.
