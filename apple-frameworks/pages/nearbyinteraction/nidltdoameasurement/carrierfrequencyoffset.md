> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/carrierfrequencyoffset](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/carrierfrequencyoffset)

# carrierFrequencyOffset (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The drift, as a ratio, across the frequencies of the receiver and the anchor.

## Declaration

```swift
var carrierFrequencyOffset: Double { get }
```

## See Also

### Evaluating the message

- [measurementType](measurementtype.md): The type of anchor message that the measurement derives from.
- [responderClockFrequencyOffset](responderclockfrequencyoffset-8wu5r.md): The clock frequency offset of the responder anchor relative to the initiator anchor.

# carrierFrequencyOffset (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The drift, as a ratio, across the frequencies of the receiver and the anchor.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) double carrierFrequencyOffset;
```

## See Also

### Evaluating the message

- [measurementType](measurementtype.md): The type of anchor message that the measurement derives from.
