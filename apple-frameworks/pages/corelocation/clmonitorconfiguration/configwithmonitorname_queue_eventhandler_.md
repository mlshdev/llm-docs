> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitorconfiguration/configwithmonitorname:queue:eventhandler:](https://developer.apple.com/documentation/corelocation/clmonitorconfiguration/configwithmonitorname:queue:eventhandler:)

# configWithMonitorName:queue:eventHandler:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates a location monitor instance with the name, dispatch queue, and event handler you specify.

## Declaration

```objectivec
+ (CLMonitorConfiguration *) configWithMonitorName:(NSString *) name queue:(dispatch_queue_t) queue eventHandler:(void (^)(CLMonitor *monitor, CLMonitoringEvent *event)) eventHandler;
```
