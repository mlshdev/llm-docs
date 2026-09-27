> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioscsiprotocolservices/1509505-processcompletedtask

# ProcessCompletedTask

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
void ProcessCompletedTask(SCSITaskIdentifier request, SCSIServiceResponse serviceResponse, SCSITaskStatus taskStatus);
```
