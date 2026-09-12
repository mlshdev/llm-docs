> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicevent/triggervalue](https://developer.apple.com/documentation/homekit/hmcharacteristicevent/triggervalue)

# triggerValue (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic that triggers the event.

## Declaration

```swift
@NSCopying var triggerValue: TriggerValueType? { get }
```

<a id="Discussion"></a>

## Discussion

A value of `nil` corresponds to any change in the value of the characteristic.

## See Also

### Inspecting the event

- [characteristic](characteristic.md): The characteristic associated with the event.

# triggerValue (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the characteristic that triggers the event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) TriggerValueType triggerValue;
```

<a id="Discussion"></a>

## Discussion

A value of `nil` corresponds to any change in the value of the characteristic.

## See Also

### Inspecting the event

- [characteristic](characteristic.md): The characteristic associated with the event.
