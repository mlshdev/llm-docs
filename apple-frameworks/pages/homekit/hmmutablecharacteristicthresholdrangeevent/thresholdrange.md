> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablecharacteristicthresholdrangeevent/thresholdrange](https://developer.apple.com/documentation/homekit/hmmutablecharacteristicthresholdrangeevent/thresholdrange)

# thresholdRange (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The range of the characteristic value that triggers the event.

## Declaration

```swift
@NSCopying var thresholdRange: HMNumberRange { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the range of characteristic values that trigger the event.

## See Also

### Configuring a characteristic threshold event

- [characteristic](characteristic.md): The characteristic associated with the event.

# thresholdRange (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The range of the characteristic value that triggers the event.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) HMNumberRange * thresholdRange;
```

<a id="Discussion"></a>

## Discussion

Use this property to adjust the range of characteristic values that trigger the event.

## See Also

### Configuring a characteristic threshold event

- [characteristic](characteristic.md): The characteristic associated with the event.
