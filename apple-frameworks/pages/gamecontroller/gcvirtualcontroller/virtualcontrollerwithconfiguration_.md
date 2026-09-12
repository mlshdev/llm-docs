> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/virtualcontrollerwithconfiguration:](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/virtualcontrollerwithconfiguration:)

# virtualControllerWithConfiguration:

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new virtual controller using the configuration you specify.

## Declaration

```objectivec
+ (GCVirtualController *) virtualControllerWithConfiguration:(GCVirtualControllerConfiguration *) configuration;
```

## Parameters

- `configuration`: The configuration for the new virtual controller.

<a id="return-value"></a>

## Return Value

An initialized virtual controller.

## See Also

### Creating virtual controllers

- [initWithConfiguration:](init%28configuration_%29.md): Creates a new virtual controller using the configuration you specify.
- [GCVirtualControllerConfiguration](configuration.md): The configuration of a virtual controller.
