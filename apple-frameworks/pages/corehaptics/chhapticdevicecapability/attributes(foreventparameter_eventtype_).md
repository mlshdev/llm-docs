> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdevicecapability/attributes(foreventparameter:eventtype:)](https://developer.apple.com/documentation/corehaptics/chhapticdevicecapability/attributes(foreventparameter:eventtype:))

# attributes(forEventParameter:eventType:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns the haptic device’s attributes for an event parameter.

## Declaration

```swift
func attributes(forEventParameter inParameter: CHHapticEvent.ParameterID, eventType type: CHHapticEvent.EventType) throws -> any CHHapticParameterAttributes
```

## Parameters

- `inParameter`: The event parameter ID whose attributes you seek.
- `type`: A haptic event type to query.

<a id="return-value"></a>

## Return Value

The haptic device’s attributes for the given event parameter ID.

## See Also

### Determining Supported Parameters

- [attributes(forDynamicParameter:)](attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.

# attributesForEventParameter:eventType:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns the haptic device’s attributes for an event parameter.

## Declaration

```objectivec
- (id<CHHapticParameterAttributes>) attributesForEventParameter:(CHHapticEventParameterID) inParameter eventType:(CHHapticEventType) type error:(NSError **) outError;
```

## Parameters

- `inParameter`: The event parameter ID whose attributes you seek.
- `type`: A haptic event type to query.
- `outError`: Any error that occurred during attribute fetching, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

The haptic device’s attributes for the given event parameter ID.

## See Also

### Determining Supported Parameters

- [attributesForDynamicParameter:error:](attributes%28fordynamicparameter_%29.md): Requests the haptic device’s attributes for a dynamic parameter.
