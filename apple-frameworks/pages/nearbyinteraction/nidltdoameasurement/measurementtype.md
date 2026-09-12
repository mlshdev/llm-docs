> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/measurementtype](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/measurementtype)

# measurementType (Swift)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The type of anchor message that the measurement derives from.

## Declaration

```swift
var measurementType: NIDLTDOAMeasurementType { get }
```

## See Also

### Evaluating the message

- [carrierFrequencyOffset](carrierfrequencyoffset.md): The drift, as a ratio, across the frequencies of the receiver and the anchor.
- [responderClockFrequencyOffset](responderclockfrequencyoffset-8wu5r.md): The clock frequency offset of the responder anchor relative to the initiator anchor.

# measurementType (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The type of anchor message that the measurement derives from.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NIDLTDOAMeasurementType measurementType;
```

## See Also

### Evaluating the message

- [carrierFrequencyOffset](carrierfrequencyoffset.md): The drift, as a ratio, across the frequencies of the receiver and the anchor.
