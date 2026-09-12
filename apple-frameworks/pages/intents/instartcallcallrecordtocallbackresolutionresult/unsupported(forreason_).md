> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallrecordtocallbackresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/instartcallcallrecordtocallbackresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a result that requires the user to confirm the request, because your app is unable to support the current request.

## Declaration

```swift
class func unsupported(forReason reason: INStartCallCallRecordToCallBackUnsupportedReason) -> Self
```

## Parameters

- `reason`: The reason that the callback request isn’t supported. For a list of possible values, see [INStartCallCallRecordToCallBackUnsupportedReason](../instartcallcallrecordtocallbackunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INStartCallCallRecordToCallBackResolutionResult](../instartcallcallrecordtocallbackresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a result that requires the user to confirm the request, because your app is unable to support the current request.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INStartCallCallRecordToCallBackUnsupportedReason) reason;
```

## Parameters

- `reason`: The reason that the callback request isn’t supported. For a list of possible values, see [INStartCallCallRecordToCallBackUnsupportedReason](../instartcallcallrecordtocallbackunsupportedreason.md).

<a id="return-value"></a>

## Return Value

A new [INStartCallCallRecordToCallBackResolutionResult](../instartcallcallrecordtocallbackresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.
