> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermidientity/create

# Create

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserMIDIEntity> Create(IOUserMIDIDriver *driver, IOUserMIDIDevice *device, OSString *name, IOUserMIDIProtocolID protocol, uint32_t numSources, uint32_t numDestinations);
```
