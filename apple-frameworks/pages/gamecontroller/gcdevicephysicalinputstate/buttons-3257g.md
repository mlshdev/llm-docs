> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstate/buttons-3257g](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstate/buttons-3257g)

# buttons

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The device’s buttons as key-value pairs for lookup by name.

## Declaration

```objectivec
@property (readonly) GCPhysicalInputElementCollection<NSString<GCButtonElementName> *,id<GCButtonElement>> * buttons;
```

## Mentioned In

- [Letting players use their second-generation Siri Remote as a game controller](../letting-players-use-their-second-generation-siri-remote-as-a-game-controller.md)

## See Also

### Accessing elements

- [elements](elements-1shp2.md): The device’s elements as key-value pairs for lookup by name.
- [axes](axes-80rx.md): The device’s axes as key-value pairs for lookup by name.
- [dpads](dpads-5yr9x.md): The device’s directional pads as key-value pairs for lookup by name.
- [switches](switches-6bws2.md): The device’s switches as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the element that the key specifies.
