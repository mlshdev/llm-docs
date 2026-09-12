> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlengthresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inlengthresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with lengthsToDisambiguate: [Measurement<UnitLength>]) -> Self
```

## Parameters

- `lengthsToDisambiguate`: An array of [UnitLength](../../foundation/unitlength.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INLengthResolutionResult](../inlengthresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri prompts the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Objects

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithLengthsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithLengthsToDisambiguate:(NSArray<NSMeasurement<NSUnitLength *> *> *) lengthsToDisambiguate;
```

## Parameters

- `lengthsToDisambiguate`: An array of [NSUnitLength](../../foundation/unitlength.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INLengthResolutionResult](../inlengthresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri prompts the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Objects

- [successWithResolvedLength:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithLengthToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
