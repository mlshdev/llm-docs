> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticeventparameter/init(parameterid:value:)](https://developer.apple.com/documentation/corehaptics/chhapticeventparameter/init(parameterid:value:))

# init(parameterID:value:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic event parameter from its ID and value.

## Declaration

```swift
init(parameterID: CHHapticEvent.ParameterID, value: Float)
```

## Parameters

- `parameterID`: The ID indicating the type of the event parameter.
- `value`: The value of the event parameter.

## See Also

### Creating an Event Parameter

- [CHHapticEvent.ParameterID](../chhapticevent/parameterid.md): An identifier for an event parameter.

# initWithParameterID:value: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic event parameter from its ID and value.

## Declaration

```objectivec
- (instancetype) initWithParameterID:(CHHapticEventParameterID) parameterID value:(float) value;
```

## Parameters

- `parameterID`: The ID indicating the type of the event parameter.
- `value`: The value of the event parameter.

## See Also

### Creating an Event Parameter

- [CHHapticEventParameterID](../chhapticevent/parameterid.md): An identifier for an event parameter.
