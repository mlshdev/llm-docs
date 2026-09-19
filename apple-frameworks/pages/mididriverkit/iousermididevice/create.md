> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mididriverkit/iousermididevice/create

# Create

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserMIDIDevice> Create(IOUserMIDIDriver *driver, OSString *deviceUID, OSString *modelUID, OSString *manufacturerUID);
```
