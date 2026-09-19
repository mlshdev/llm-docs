> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/virtualcontrollerwithconfiguration:

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
