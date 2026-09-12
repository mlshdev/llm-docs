> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iostatereporter](https://developer.apple.com/documentation/driverkit/iostatereporter)

# IOStateReporter

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Class  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
class IOStateReporter;
```

## Topics

### Instance Methods

- [getStateInTransitions](iostatereporter/getstateintransitions.md)
- [getStateLastChannelUpdateTime](iostatereporter/getstatelastchannelupdatetime.md): Deprecated.
- [getStateLastTransitionTime](iostatereporter/getstatelasttransitiontime.md)
- [getStateResidencyTime](iostatereporter/getstateresidencytime.md)
- [incrementChannelState](iostatereporter/incrementchannelstate.md)
- [initWith](iostatereporter/initwith.md)
- [overrideChannelState](iostatereporter/overridechannelstate.md)
- [setChannelState](iostatereporter/setchannelstate-9hd9n.md)
- [setChannelState](iostatereporter/setchannelstate-7n3or.md): Deprecated.
- [setState](iostatereporter/setstate-96bfi.md)
- [setState](iostatereporter/setstate-1puxp.md): Deprecated.
- [setStateByIndices](iostatereporter/setstatebyindices-6dmm5.md)
- [setStateByIndices](iostatereporter/setstatebyindices-13fxh.md): Deprecated.
- [setStateID](iostatereporter/setstateid.md)

### Type Methods

- [with](iostatereporter/with.md)

## Relationships

### Inherits From

- [IOReporter](ioreporter.md)

## See Also

### Classes

- [IOHistogramReporter](iohistogramreporter.md)
- [IOReportLegend](ioreportlegend.md)
- [IOReporter](ioreporter.md)
- [IOServiceStateNotificationDispatchSource](ioservicestatenotificationdispatchsource.md)
- [IOSimpleReporter](iosimplereporter.md)
- [OSBundle](osbundle.md)
- [OSMappedFile](osmappedfile.md)
