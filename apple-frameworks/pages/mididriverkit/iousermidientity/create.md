> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mididriverkit/iousermidientity/create](https://developer.apple.com/documentation/mididriverkit/iousermidientity/create)

# Create

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserMIDIEntity> Create(IOUserMIDIDriver *driver, IOUserMIDIDevice *device, OSString *name, IOUserMIDIProtocolID protocol, uint32_t numSources, uint32_t numDestinations);
```
