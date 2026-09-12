> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nidltdoameasurement/responderclockfrequencyoffset-899dj](https://developer.apple.com/documentation/nearbyinteraction/nidltdoameasurement/responderclockfrequencyoffset-899dj)

# responderClockFrequencyOffset

**Interface language:** Objective-C

**Framework:** Nearby Interaction  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Indicates the clock frequency offset (CFO) fraction of the responder anchor relative to the initiator anchor (dimensionless). For example, a positive value means for every 1 clock cycle, the responder runs fewer cycles than initiator. Returns nil when measurementType is not NIDLTDOAMeasurementTypeResponse, or when the value is not available.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * responderClockFrequencyOffset;
```
