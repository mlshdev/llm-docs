> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/dependentparameters](https://developer.apple.com/documentation/audiotoolbox/auparameter/dependentparameters)

# dependentParameters (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

## Declaration

```swift
var dependentParameters: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [NSNumber](../../foundation/nsnumber.md) objects representing [AUParameterAddress](../auparameteraddress.md) values.

## See Also

### Querying Parameter Properties

- [minValue](minvalue.md): The parameter’s minimum value.
- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unit](unit.md): The parameter’s unit of measurement.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.

# dependentParameters (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSNumber *> * dependentParameters;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSNumber *> * dependentParameters;
```

<a id="Discussion"></a>

## Discussion

The array contains [NSNumber](../../foundation/nsnumber.md) objects representing [AUParameterAddress](../auparameteraddress.md) values.

## See Also

### Querying Parameter Properties

- [minValue](minvalue.md): The parameter’s minimum value.
- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unit](unit.md): The parameter’s unit of measurement.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.
