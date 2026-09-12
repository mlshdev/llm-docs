> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/accessoryanchoringsource/accessorylocations](https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource/accessorylocations)

# accessoryLocations

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The list of anchor-able locations for this accessory.

## Declaration

```swift
var accessoryLocations: [AnchoringComponent.AccessoryLocation] { get }
```

<a id="discussion"></a>

## Discussion

The returned array is device-specific; its contents are defined by the accessory’s manufacturer, and may or may not include [origin](../accessorylocation/origin.md). [origin](../accessorylocation/origin.md) is supported by every accessory and is always available via the static property, regardless of whether it appears in this array.
