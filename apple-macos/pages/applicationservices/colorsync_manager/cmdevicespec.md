> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/cmdevicespec](https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmdevicespec)

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
