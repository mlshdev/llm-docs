> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiblockcommandsdevice/1792137-issueunmap

# IssueUnmap

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
IOReturn IssueUnmap(IOBlockStorageDeviceExtent *extentsList, UInt32 blockDescriptorCount);
```
