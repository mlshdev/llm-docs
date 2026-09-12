> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/minvalue](https://developer.apple.com/documentation/audiotoolbox/auparameter/minvalue)

# minValue (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s minimum value.

## Declaration

```swift
var minValue: AUValue { get }
```

## See Also

### Querying Parameter Properties

- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unit](unit.md): The parameter’s unit of measurement.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

# minValue (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s minimum value.

## Declaration

```objectivec
@property (nonatomic, readonly) AUValue minValue;
```

```objectivec
@property (atomic, readonly) AUValue minValue;
```

## See Also

### Querying Parameter Properties

- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unit](unit.md): The parameter’s unit of measurement.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.
