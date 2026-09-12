> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdynamicparameter/init(parameterid:value:relativetime:)](https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter/init(parameterid:value:relativetime:))

# init(parameterID:value:relativeTime:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a dynamic parameter from its ID, value, and start time.

## Declaration

```swift
init(parameterID: CHHapticDynamicParameter.ID, value: Float, relativeTime time: TimeInterval)
```

## Parameters

- `parameterID`: The ID indicating the type of the dynamic parameter.
- `value`: The value of the dynamic parameter.
- `time`: The time at which to send the dynamic parameter.

## See Also

### Creating a Dynamic Parameter

- [CHHapticDynamicParameter.ID](id.md): The identifier that reveals the type of property associated with a dynamic parameter.

# initWithParameterID:value:relativeTime: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a dynamic parameter from its ID, value, and start time.

## Declaration

```objectivec
- (instancetype) initWithParameterID:(CHHapticDynamicParameterID) parameterID value:(float) value relativeTime:(NSTimeInterval) time;
```

## Parameters

- `parameterID`: The ID indicating the type of the dynamic parameter.
- `value`: The value of the dynamic parameter.
- `time`: The time at which to send the dynamic parameter.

## See Also

### Creating a Dynamic Parameter

- [CHHapticDynamicParameterID](id.md): The identifier that reveals the type of property associated with a dynamic parameter.
