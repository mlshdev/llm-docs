> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent/accessoryanchoringsource/init(type:location:)](https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource/init(type:location:))

# init(type:location:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Creates an accessory anchoring source for a deferred accessory type.

## Declaration

```swift
init(type: AnchoringComponent.AccessoryAnchoringSource.AccessoryType, location: String? = nil)
```

## Parameters

- `type`: The type of accessory to anchor to (e.g., `.leftController`, `.stylus`)
- `location`: Optional location name on the accessory (e.g., “aim”, “grip”, “tip”). If `nil` or empty, anchors to the accessory’s origin. If the specified location doesn’t exist at runtime, falls back to origin.

<a id="discussion"></a>

## Discussion

Use this initializer when you want to anchor to an accessory that may not be connected yet. The system will automatically bind to a matching accessory when it connects.
