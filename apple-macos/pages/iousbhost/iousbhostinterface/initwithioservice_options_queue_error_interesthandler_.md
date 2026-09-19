> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostinterface/initwithioservice:options:queue:error:interesthandler:

# initWithIOService:options:queue:error:interestHandler:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (instancetype) initWithIOService:(io_service_t) ioService options:(IOUSBHostObjectInitOptions) options queue:(dispatch_queue_t) queue error:(NSError **) error interestHandler:(IOUSBHostInterestHandler) interestHandler;
```
