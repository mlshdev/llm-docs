> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsync_manager/cmdevicename

# CMDeviceName

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
struct CMDeviceName {
   UniCharCount deviceNameLength;
   UniChar deviceName[256];
};
typedef struct CMDeviceName CMDeviceName;
```
