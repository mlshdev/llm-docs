> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/init(configuration:)](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/init(configuration:))

# init(configuration:) (Swift)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new virtual controller using the configuration you specify.

## Declaration

```swift
init(configuration: GCVirtualController.Configuration)
```

## Parameters

- `configuration`: The configuration for the new virtual controller.

## See Also

### Creating virtual controllers

- [GCVirtualController.Configuration](configuration.md): The configuration of a virtual controller.

# initWithConfiguration: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new virtual controller using the configuration you specify.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(GCVirtualControllerConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration for the new virtual controller.

## See Also

### Creating virtual controllers

- [virtualControllerWithConfiguration:](virtualcontrollerwithconfiguration_.md): Creates a new virtual controller using the configuration you specify.
- [GCVirtualControllerConfiguration](configuration.md): The configuration of a virtual controller.
