> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmdevicespec

# CMDeviceSpec

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
struct CMDeviceSpec {
   UInt32 specVersion;
   CMDeviceClass deviceClass;
   CMDeviceID deviceID;
   CMDeviceName deviceName;
   UInt32 reserved;
};
typedef struct CMDeviceSpec CMDeviceSpec;
```
