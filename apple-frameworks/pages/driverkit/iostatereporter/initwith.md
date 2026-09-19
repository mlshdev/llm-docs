> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iostatereporter/initwith

# initWith

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
bool initWith(IOService *reportingService, IOReportCategories categories, int nstates, IOReportUnit unit);
```

## See Also

### Instance Methods

- [getStateInTransitions](getstateintransitions.md)
- [getStateLastChannelUpdateTime](getstatelastchannelupdatetime.md): Deprecated.
- [getStateLastTransitionTime](getstatelasttransitiontime.md)
- [getStateResidencyTime](getstateresidencytime.md)
- [incrementChannelState](incrementchannelstate.md)
- [overrideChannelState](overridechannelstate.md)
- [setChannelState](setchannelstate-9hd9n.md)
- [setChannelState](setchannelstate-7n3or.md): Deprecated.
- [setState](setstate-96bfi.md)
- [setState](setstate-1puxp.md): Deprecated.
- [setStateByIndices](setstatebyindices-6dmm5.md)
- [setStateByIndices](setstatebyindices-13fxh.md): Deprecated.
- [setStateID](setstateid.md)
