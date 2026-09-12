> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptionsresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incallrecordtypeoptionsresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedCallRecordTypeOptions: INCallRecordTypeOptions = []) -> Self
```

## Parameters

- `resolvedCallRecordTypeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeOptionsResolutionResult](../incallrecordtypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object that indicates the types of calls that you can return from a search.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedCallRecordTypeOptions: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedCallRecordTypeOptions:(INCallRecordTypeOptions) resolvedCallRecordTypeOptions;
```

## Parameters

- `resolvedCallRecordTypeOptions`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeOptionsResolutionResult](../incallrecordtypeoptionsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object that indicates the types of calls that you can return from a search.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCallRecordTypeOptionsToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
