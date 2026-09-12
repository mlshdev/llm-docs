> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptionsresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/incallrecordtypeoptionsresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with callRecordTypeOptionsToConfirm: INCallRecordTypeOptions = []) -> Self
```

## Parameters

- `callRecordTypeOptionsToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeOptionsResolutionResult](../incallrecordtypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter but want the user to confirm the value before proceeding. For example, you might ask for confirmation if you do not support searching for some, but not all, of the types requested by the user.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.

# confirmationRequiredWithCallRecordTypeOptionsToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithCallRecordTypeOptionsToConfirm:(INCallRecordTypeOptions) callRecordTypeOptionsToConfirm;
```

## Parameters

- `callRecordTypeOptionsToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeOptionsResolutionResult](../incallrecordtypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter but want the user to confirm the value before proceeding. For example, you might ask for confirmation if you do not support searching for some, but not all, of the types requested by the user.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedCallRecordTypeOptions:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
