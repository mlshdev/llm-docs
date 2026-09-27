> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservicenotificationdispatchsource/3538522-copynextnotification

# CopyNextNotification

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.4+

## Declaration

```objectivec
kern_return_t CopyNextNotification(uint64_t *type, IOService **service, uint64_t *options, OSDispatchMethod supermethod);
```
