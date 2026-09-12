> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservicenotificationdispatchsource/copynextnotification](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/copynextnotification)

# CopyNextNotification

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CopyNextNotification(uint64_t *type, IOService **service, uint64_t *options);
```
