> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfigurationmanager/shared](https://developer.apple.com/documentation/networkextension/nehotspotconfigurationmanager/shared)

# shared (Swift)

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Instantiates [NEHotspotConfigurationManager](../nehotspotconfigurationmanager.md) as a singleton, so it can be shared.

## Declaration

```swift
class var shared: NEHotspotConfigurationManager { get }
```

## See Also

### Creating configurations

- [apply(\_:completionHandler:)](apply%28__completionhandler_%29.md): Adds or updates a Wi-Fi network configuration after prompting the user for permission, and then attempts to join the network under certain conditions.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Instantiates [NEHotspotConfigurationManager](../nehotspotconfigurationmanager.md) as a singleton, so it can be shared.

## Declaration

```objectivec
@property (class, strong, readonly) NEHotspotConfigurationManager * sharedManager;
```

## See Also

### Creating configurations

- [applyConfiguration:completionHandler:](apply%28__completionhandler_%29.md): Adds or updates a Wi-Fi network configuration after prompting the user for permission, and then attempts to join the network under certain conditions.
