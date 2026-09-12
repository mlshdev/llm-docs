> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpin/name](https://developer.apple.com/documentation/realitykit/geometricpin/name)

# name

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The name of the pin.

## Declaration

```swift
var name: String
```

<a id="discussion"></a>

## Discussion

Each `GeometricPins` for an[Entity](../entity.md) have unique names. Adding a pin with the same name as another overrides the duplicate.
