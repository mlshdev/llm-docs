> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/responderclockfrequencyoffset-8wu5r](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/responderclockfrequencyoffset-8wu5r)

# responderClockFrequencyOffset

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The clock frequency offset of the responder anchor relative to the initiator anchor.

## Declaration

```swift
var responderClockFrequencyOffset: Double? { get }
```

<a id="discussion"></a>

## Discussion

This property represents relative clock frequency information between the responder anchor and initiator anchor. The relative difference is a key part of calculating precise distances. Drift between the clocks of anchors represents a persistent issue in DL-TDOA deployments that the responder clock frequency offset helps mitigate.

The value is dimensionless because it expresses a ratio rather than an absolute frequency. The ratio compares the responder’s clock frequency to the initiator’s clock frequency as a fractional difference. You can use the difference as necessary while implementing your DL-TDOA positioning engine.

## See Also

### Evaluating the message

- [measurementType](measurementtype.md): The type of anchor message that the measurement derives from.
- [carrierFrequencyOffset](carrierfrequencyoffset.md): The drift, as a ratio, across the frequencies of the receiver and the anchor.
