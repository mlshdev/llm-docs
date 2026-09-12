> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iostatereporter/setstate-1puxp](https://developer.apple.com/documentation/driverkit/iostatereporter/setstate-1puxp)

# setState

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
IOReturn setState(uint64_t new_state_id, uint64_t last_intransition, uint64_t prev_state_residency);
```

## See Also

### Instance Methods

- [getStateInTransitions](getstateintransitions.md)
- [getStateLastChannelUpdateTime](getstatelastchannelupdatetime.md): Deprecated.
- [getStateLastTransitionTime](getstatelasttransitiontime.md)
- [getStateResidencyTime](getstateresidencytime.md)
- [incrementChannelState](incrementchannelstate.md)
- [initWith](initwith.md)
- [overrideChannelState](overridechannelstate.md)
- [setChannelState](setchannelstate-9hd9n.md)
- [setChannelState](setchannelstate-7n3or.md): Deprecated.
- [setState](setstate-96bfi.md)
- [setStateByIndices](setstatebyindices-6dmm5.md)
- [setStateByIndices](setstatebyindices-13fxh.md): Deprecated.
- [setStateID](setstateid.md)
