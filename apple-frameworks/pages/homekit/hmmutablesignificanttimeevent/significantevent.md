> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmmutablesignificanttimeevent/significantevent

# significantEvent (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The significant time-based event that is used to calculate when the event fires.

## Declaration

```swift
var significantEvent: HMSignificantEvent { get set }
```

## See Also

### Configuring a significant time event

- [offset](offset.md): The offset from the significant event that this event fires at.

# significantEvent (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The significant time-based event that is used to calculate when the event fires.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite) HMSignificantEvent significantEvent;
```

## See Also

### Configuring a significant time event

- [offset](offset.md): The offset from the significant event that this event fires at.
