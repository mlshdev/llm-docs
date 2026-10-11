> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermididestination/create

# Create

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserMIDIDestination> Create(IOUserMIDIDriver *driver, OSString *name, IOUserMIDIProtocolID protocol);
```
