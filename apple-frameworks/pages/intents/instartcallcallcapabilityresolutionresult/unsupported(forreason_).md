> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallcapabilityresolutionresult/unsupported(forreason:)](https://developer.apple.com/documentation/intents/instartcallcallcapabilityresolutionresult/unsupported(forreason:))

# unsupported(forReason:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.

## Declaration

```swift
class func unsupported(forReason reason: INStartCallCallCapabilityUnsupportedReason) -> Self
```

## Parameters

- `reason`: The call capability that isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INStartCallCallCapabilityResolutionResult](../instartcallcallcapabilityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result Object

- [init(callCapabilityResolutionResult:)](init%28callcapabilityresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified capabilities.
- [INStartCallCallCapabilityUnsupportedReason](../instartcallcallcapabilityunsupportedreason.md): Constants indicating the reason the app can’t support starting the call.

# unsupportedForReason: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.

## Declaration

```objectivec
+ (instancetype) unsupportedForReason:(INStartCallCallCapabilityUnsupportedReason) reason;
```

## Parameters

- `reason`: The call capability that isn’t supported.

<a id="return-value"></a>

## Return Value

A new [INStartCallCallCapabilityResolutionResult](../instartcallcallcapabilityresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when your app doesn’t support the intent parameter for the specified reason.

## See Also

### Creating a Resolution Result Object

- [initWithCallCapabilityResolutionResult:](init%28callcapabilityresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified capabilities.
- [INStartCallCallCapabilityUnsupportedReason](../instartcallcallcapabilityunsupportedreason.md): Constants indicating the reason the app can’t support starting the call.
