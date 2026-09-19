> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmmutablecharacteristicevent/characteristic

# characteristic (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The characteristic associated with the event.

## Declaration

```swift
var characteristic: HMCharacteristic { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to change the event’s characteristic.

The characteristic must support notification.

## See Also

### Configuring the event

- [triggerValue](triggervalue.md): The value of the characteristic that triggers the event.

# characteristic (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The characteristic associated with the event.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) HMCharacteristic * characteristic;
```

<a id="Discussion"></a>

## Discussion

Use this property to change the event’s characteristic.

The characteristic must support notification.

## See Also

### Configuring the event

- [triggerValue](triggervalue.md): The value of the characteristic that triggers the event.
