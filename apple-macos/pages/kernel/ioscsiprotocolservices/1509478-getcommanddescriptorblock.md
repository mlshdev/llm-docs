> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/1509478-getcommanddescriptorblock

# GetCommandDescriptorBlock

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

## Declaration

```objectivec
bool GetCommandDescriptorBlock(SCSITaskIdentifier request, SCSICommandDescriptorBlock *cdbData);
```
