> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmwatersubmersionevent/date

# date (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time and date of the event.

## Declaration

```swift
var date: Date { get }
```

## See Also

### Accessing event data

- [state](state-swift.property.md): The new submersion state.
- [CMWaterSubmersionEvent.State](state-swift.enum.md): The device’s submersion state.

# date (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time and date of the event.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * date;
```

## See Also

### Accessing event data

- [state](state-swift.property.md): The new submersion state.
- [CMWaterSubmersionState](state-swift.enum.md): The device’s submersion state.
