> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/updateconfiguration(forelement:configuration:)](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/updateconfiguration(forelement:configuration:))

# updateConfiguration(forElement:configuration:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Changes the configuration for one of the virtual controller’s input elements.

## Declaration

```swift
func updateConfiguration(forElement element: String, configuration config: (GCVirtualController.ElementConfiguration) -> GCVirtualController.ElementConfiguration)
```

## Parameters

- `element`: The element whose configuration you want to change. For the possible values of this parameter, see the [elements](configuration/elements.md) property.
- `config`: The new configuration for the element.

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

## See Also

### Customizing the elements

- [GCVirtualController.ElementConfiguration](elementconfiguration.md): The properties of a virtual controller’s element that you can customize.

# updateConfigurationForElement:configuration: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Changes the configuration for one of the virtual controller’s input elements.

## Declaration

```objectivec
- (void) updateConfigurationForElement:(NSString *) element configuration:(GCVirtualControllerElementConfiguration * (^)(GCVirtualControllerElementConfiguration *oldConfiguration)) config;
```

## Parameters

- `element`: The element whose configuration you want to change. For the possible values of this parameter, see the [elements](configuration/elements.md) property.
- `config`: The new configuration for the element.

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

## See Also

### Customizing the elements

- [GCVirtualControllerElementConfiguration](elementconfiguration.md): The properties of a virtual controller’s element that you can customize.
