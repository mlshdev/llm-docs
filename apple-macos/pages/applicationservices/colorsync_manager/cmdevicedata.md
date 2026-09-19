> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmdevicedata

# CMDeviceData

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
struct CMDeviceData {
   UInt32 dataVersion;
   CMDeviceSpec deviceSpec;
   CMDeviceScope deviceScope;
   CMDeviceState deviceState;
   CMDeviceProfileID defaultProfileID;
   UInt32 profileCount;
   UInt32 reserved;
};
typedef struct CMDeviceData CMDeviceData;
```
