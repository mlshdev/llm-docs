> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmmutablecharacteristicevent/triggervalue

# triggerValue (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The value of the characteristic that triggers the event.

## Declaration

```swift
@NSCopying var triggerValue: TriggerValueType? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the value that triggers the event.

Set this property to `nil` to trigger the event whenever the value of the characteristic changes.

## See Also

### Configuring the event

- [characteristic](characteristic.md): The characteristic associated with the event.

# triggerValue (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The value of the characteristic that triggers the event.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) TriggerValueType triggerValue;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the value that triggers the event.

Set this property to `nil` to trigger the event whenever the value of the characteristic changes.

## See Also

### Configuring the event

- [characteristic](characteristic.md): The characteristic associated with the event.
