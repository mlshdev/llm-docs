> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarsignaloptionsresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a resolution object that requires confirmation of the provided value.

## Declaration

```swift
class func confirmationRequired(with carSignalOptionsToConfirm: INCarSignalOptions = []) -> Self
```

## Parameters

- `carSignalOptionsToConfirm`: The signal option value to confirm. For a list of possible values, see [INCarSignalOptions](../incarsignaloptions.md).

<a id="return-value"></a>

## Return Value

A new `INCarSignalOptionsResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified value, but you still want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates a resolution object that indicates the successful resolution of the provided value.

# confirmationRequiredWithCarSignalOptionsToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates a resolution object that requires confirmation of the provided value.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCarSignalOptionsToConfirm:(INCarSignalOptions) carSignalOptionsToConfirm;
```

## Parameters

- `carSignalOptionsToConfirm`: The signal option value to confirm. For a list of possible values, see [INCarSignalOptions](../incarsignaloptions.md).

<a id="return-value"></a>

## Return Value

A new `INCarSignalOptionsResolutionResult` object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified value, but you still want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedCarSignalOptions:](success%28with_%29.md): Creates a resolution object that indicates the successful resolution of the provided value.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.
