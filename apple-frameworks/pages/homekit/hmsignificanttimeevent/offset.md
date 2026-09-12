> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmsignificanttimeevent/offset](https://developer.apple.com/documentation/homekit/hmsignificanttimeevent/offset)

# offset (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset from the significant event that the event fires at.

## Declaration

```swift
var offset: DateComponents? { get }
```

## See Also

### Inspecting a significant time event

- [significantEvent](significantevent.md): The significant time-based event that is used to calculate when the event fires.

# offset (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset from the significant event that the event fires at.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDateComponents * offset;
```

## See Also

### Inspecting a significant time event

- [significantEvent](significantevent.md): The significant time-based event that is used to calculate when the event fires.
