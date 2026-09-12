> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmmutablesignificanttimeevent/offset](https://developer.apple.com/documentation/homekit/hmmutablesignificanttimeevent/offset)

# offset (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset from the significant event that this event fires at.

## Declaration

```swift
var offset: DateComponents { get set }
```

<a id="Discussion"></a>

## Discussion

To specify that this event should fire before the significant event, supply a date components object with negative values. For example, to specify 30 minutes before sunset, the [minute](../../foundation/datecomponents/minute.md) property of the value of the [offset](offset.md) property must be set to `-30`.

## See Also

### Configuring a significant time event

- [significantEvent](significantevent.md): The significant time-based event that is used to calculate when the event fires.

# offset (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset from the significant event that this event fires at.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) NSDateComponents * offset;
```

<a id="Discussion"></a>

## Discussion

To specify that this event should fire before the significant event, supply a date components object with negative values. For example, to specify 30 minutes before sunset, the [minute](../../foundation/datecomponents/minute.md) property of the value of the [offset](offset.md) property must be set to `-30`.

## See Also

### Configuring a significant time event

- [significantEvent](significantevent.md): The significant time-based event that is used to calculate when the event fires.
