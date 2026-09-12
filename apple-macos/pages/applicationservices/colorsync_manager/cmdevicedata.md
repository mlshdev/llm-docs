> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmdevicedata](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmdevicedata)

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
