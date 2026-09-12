> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtyperesolutionresult/success(with:)](https://developer.apple.com/documentation/intents/incallrecordtyperesolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedCallRecordType: INCallRecordType) -> Self
```

## Parameters

- `resolvedCallRecordType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeResolutionResult](../incallrecordtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when you recognize the specified type of call and are able to use it to resolve an intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# successWithResolvedCallRecordType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedCallRecordType:(INCallRecordType) resolvedCallRecordType;
```

## Parameters

- `resolvedCallRecordType`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INCallRecordTypeResolutionResult](../incallrecordtyperesolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a resolution result object when you recognize the specified type of call and are able to use it to resolve an intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithCallRecordTypeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
