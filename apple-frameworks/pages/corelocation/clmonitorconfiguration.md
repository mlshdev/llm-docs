> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitorconfiguration](https://developer.apple.com/documentation/corelocation/clmonitorconfiguration)

# CLMonitorConfiguration

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An object for configuring a location monitor instance.

## Declaration

```objectivec
@interface CLMonitorConfiguration : NSObject
```

## Topics

### Creating a monitor configuration

- [configWithMonitorName:queue:eventHandler:](clmonitorconfiguration/configwithmonitorname_queue_eventhandler_.md): Creates a location monitor instance with the name, dispatch queue, and event handler you specify.

### Instance properties

- [eventHandler](clmonitorconfiguration/eventhandler.md): The block the framework calls as the event handler for the location monitor instance.
- [name](clmonitorconfiguration/name.md): The name of the monitor instance.
- [queue](clmonitorconfiguration/queue.md): The dispatch queue to bind the instance of a location monitor to.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Creating a monitor

- [requestMonitorWithConfiguration:completion:](clmonitor-6ynwz/requestmonitorwithconfiguration_completion_.md): Creates a location monitor with the configuration and event handler you provide.
