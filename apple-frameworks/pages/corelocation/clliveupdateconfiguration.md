> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clliveupdateconfiguration](https://developer.apple.com/documentation/corelocation/clliveupdateconfiguration)

# CLLiveUpdateConfiguration

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the types of locations that a location updater generates.

## Declaration

```objectivec
enum CLLiveUpdateConfiguration : NSInteger;
```

## Topics

### Update types

- [CLLiveUpdateConfigurationDefault](clliveupdateconfiguration/clliveupdateconfigurationdefault.md): The default configuration.
- [CLLiveUpdateConfigurationAirborne](clliveupdateconfiguration/clliveupdateconfigurationairborne.md): A configuration for airborne use cases.
- [CLLiveUpdateConfigurationAutomotiveNavigation](clliveupdateconfiguration/clliveupdateconfigurationautomotivenavigation.md): A configuration for automotive navigation use cases.
- [CLLiveUpdateConfigurationFitness](clliveupdateconfiguration/clliveupdateconfigurationfitness.md): A configuration for fitness use cases.
- [CLLiveUpdateConfigurationOtherNavigation](clliveupdateconfiguration/clliveupdateconfigurationothernavigation.md): A configuration for other navigation use cases.

### Enumeration Cases

- [CLLiveUpdateConfigurationMaritime](clliveupdateconfiguration/clliveupdateconfigurationmaritime.md)

## See Also

### Creating a location updater

- [liveUpdaterWithConfiguration:queue:handler:](cllocationupdater/liveupdaterwithconfiguration_queue_handler_.md): Creates a location updater with the configuration and queue that you specify.
- [liveUpdaterWithQueue:handler:](cllocationupdater/liveupdaterwithqueue_handler_.md): Creates a location updater on the queue you specify.
