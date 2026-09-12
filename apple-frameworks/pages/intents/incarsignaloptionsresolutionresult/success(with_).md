> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarsignaloptionsresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a resolution object that indicates the successful resolution of the provided value.

## Declaration

```swift
class func success(with resolvedCarSignalOptions: INCarSignalOptions = []) -> Self
```

## Parameters

- `resolvedCarSignalOptions`: The value that resolves the [signals](../inactivatecarsignalintent/signals.md) property of the activate car signal intent. This value may be different from the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarSignalOptionsResolutionResult](../incarsignaloptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates a resolution object that requires confirmation of the provided value.

# successWithResolvedCarSignalOptions: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a resolution object that indicates the successful resolution of the provided value.

## Declaration

```objectivec
+ (instancetype) successWithResolvedCarSignalOptions:(INCarSignalOptions) resolvedCarSignalOptions;
```

## Parameters

- `resolvedCarSignalOptions`: The value that resolves the [signals](../inactivatecarsignalintent/signals.md) property of the activate car signal intent. This value may be different from the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCarSignalOptionsResolutionResult](../incarsignaloptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCarSignalOptionsToConfirm:](confirmationrequired%28with_%29.md): Creates a resolution object that requires confirmation of the provided value.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
