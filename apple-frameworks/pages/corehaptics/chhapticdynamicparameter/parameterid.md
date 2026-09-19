> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter/parameterid

# parameterID (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The dynamic parameter ID defining the type of parameter being modified.

## Declaration

```swift
var parameterID: CHHapticDynamicParameter.ID { get }
```

## See Also

### Specifying a Dynamic Parameter’s Value

- [relativeTime](relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.
- [value](value.md): The value of the dynamic parameter.

# parameterID (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The dynamic parameter ID defining the type of parameter being modified.

## Declaration

```objectivec
@property (readonly) CHHapticDynamicParameterID parameterID;
```

## See Also

### Specifying a Dynamic Parameter’s Value

- [relativeTime](relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.
- [value](value.md): The value of the dynamic parameter.
