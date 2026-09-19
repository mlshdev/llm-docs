> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface650/1559197-setconfigurationv2

# SetConfigurationV2

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
IOReturn (*SetConfigurationV2)(void *self, UInt8 configNum, bool startInterfaceMatching, bool issueRemoteWakeup);
```
