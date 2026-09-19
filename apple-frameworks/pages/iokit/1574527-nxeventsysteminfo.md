> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1574527-nxeventsysteminfo

# NXEventSystemInfo

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ (deprecated in 18.4) · macOS 10.3+ (deprecated in 10.12)

## Declaration

```objectivec
NXEventSystemInfoType NXEventSystemInfo(NXEventHandle handle, char *flavor, int *evs_info, unsigned int *evs_info_cnt);
```
