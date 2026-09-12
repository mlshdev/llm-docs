> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparameter/unit](https://developer.apple.com/documentation/audiotoolbox/auparameter/unit)

# unit (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s unit of measurement.

## Declaration

```swift
var unit: AudioUnitParameterUnit { get }
```

## See Also

### Querying Parameter Properties

- [minValue](minvalue.md): The parameter’s minimum value.
- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.

# unit (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parameter’s unit of measurement.

## Declaration

```objectivec
@property (nonatomic, readonly) AudioUnitParameterUnit unit;
```

```objectivec
@property (atomic, readonly) AudioUnitParameterUnit unit;
```

## See Also

### Querying Parameter Properties

- [minValue](minvalue.md): The parameter’s minimum value.
- [maxValue](maxvalue.md): The parameter’s maximum value.
- [unitName](unitname.md): The parameter’s localized unit name.
- [flags](flags.md): The parameter’s characteristic details.
- [address](address.md): The parameter’s address.
- [valueStrings](valuestrings.md): The parameter’s localized value strings.
- [dependentParameters](dependentparameters.md): Any other parameter’s whose values may change as a side effect of this parameter’s value changing.
