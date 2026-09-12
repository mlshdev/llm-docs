> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527201-event_source_constants](https://developer.apple.com/documentation/coreservices/1527201-event_source_constants)

# Event Source Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identify how an Apple event was delivered.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kAEUnknownSource](1527201-event_source_constants/kaeunknownsource.md): The source of the Apple event is unknown.
- [kAEDirectCall](1527201-event_source_constants/kaedirectcall.md): The source of the Apple event is a direct call that bypassed the PPC Toolbox.
- [kAESameProcess](1527201-event_source_constants/kaesameprocess.md): The source of the Apple event is the same application that received the event (the target application and the source application are the same).
- [kAELocalProcess](1527201-event_source_constants/kaelocalprocess.md): The source application is another process on the same computer as the target application.
- [kAERemoteProcess](1527201-event_source_constants/kaeremoteprocess.md): The source application is a process on a remote computer on the network.
