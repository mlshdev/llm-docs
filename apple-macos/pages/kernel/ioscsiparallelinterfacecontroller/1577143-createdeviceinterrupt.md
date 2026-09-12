> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiparallelinterfacecontroller/1577143-createdeviceinterrupt](https://developer.apple.com/documentation/kernel/ioscsiparallelinterfacecontroller/1577143-createdeviceinterrupt)

# CreateDeviceInterrupt

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 11.0)

## Declaration

```objectivec
virtual IOInterruptEventSource * CreateDeviceInterrupt(IOInterruptEventSource::Action action, IOFilterInterruptEventSource::Filter filter, IOService *provider);
```
