> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediamediaitemresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/inaddmediamediaitemresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that requires the user to confirm the request because your app is unable to support the current request.

## Declaration

```swift
class func unsupported(forReason reason: INAddMediaMediaItemUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that adding a media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaItemResolutionResult](../inaddmediamediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Reporting a Problem

- [INAddMediaMediaItemUnsupportedReason](../inaddmediamediaitemunsupportedreason.md): Reasons the app can’t add the media item.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a result that requires the user to confirm the request because your app is unable to support the current request.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INAddMediaMediaItemUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that adding a media item isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INAddMediaMediaItemResolutionResult](../inaddmediamediaitemresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Reporting a Problem

- [INAddMediaMediaItemUnsupportedReason](../inaddmediamediaitemunsupportedreason.md): Reasons the app can’t add the media item.
