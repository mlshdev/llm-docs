> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mididriverkit/iousermididevice/create](https://developer.apple.com/documentation/mididriverkit/iousermididevice/create)

# Create

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Static Method  
**Availability:** DriverKit 24.0+

## Declaration

```objectivec
static OSSharedPtr<IOUserMIDIDevice> Create(IOUserMIDIDriver *driver, OSString *deviceUID, OSString *modelUID, OSString *manufacturerUID);
```
