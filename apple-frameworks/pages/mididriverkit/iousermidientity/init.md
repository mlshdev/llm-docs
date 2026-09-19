> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermidientity/init

# init

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
virtual bool init(IOUserMIDIDriver *driver, IOUserMIDIDevice *device, OSString *name, IOUserMIDIProtocolID protocol, uint32_t numSources, uint32_t numDestinations);
```

## See Also

### Instance Methods

- [AddDestination](adddestination.md)
- [AddSource](addsource.md)
- [GetBaseClassID](getbaseclassid.md)
- [GetClassID](getclassid.md)
- [GetDestination](getdestination.md)
- [GetDestinations](getdestinations.md)
- [GetSource](getsource.md)
- [GetSources](getsources.md)
- [RemoveDestination](removedestination.md)
- [RemoveSource](removesource.md)
- [SetProperties](setproperties.md)
- [free](free.md)
