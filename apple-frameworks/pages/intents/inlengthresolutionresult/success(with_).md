> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlengthresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inlengthresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedLength: Measurement<UnitLength>) -> Self
```

## Parameters

- `resolvedLength`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INLengthResolutionResult](../inlengthresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Objects

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedLength: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedLength:(NSMeasurement<NSUnitLength *> *) resolvedLength;
```

## Parameters

- `resolvedLength`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INLengthResolutionResult](../inlengthresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Objects

- [confirmationRequiredWithLengthToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithLengthsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
