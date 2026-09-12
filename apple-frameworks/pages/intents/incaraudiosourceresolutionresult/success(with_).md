> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incaraudiosourceresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incaraudiosourceresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func success(with resolvedCarAudioSource: INCarAudioSource) -> Self
```

## Parameters

- `resolvedCarAudioSource`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarAudioSourceResolutionResult](../incaraudiosourceresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the audio source and are able to switch to it.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedCarAudioSource: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an object whose resolution involves the successful matching of the specified parameter.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) successWithResolvedCarAudioSource:(INCarAudioSource) resolvedCarAudioSource;
```

## Parameters

- `resolvedCarAudioSource`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarAudioSourceResolutionResult](../incaraudiosourceresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the audio source and are able to switch to it.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCarAudioSourceToConfirm:](confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incaraudiosourceresolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incaraudiosourceresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
