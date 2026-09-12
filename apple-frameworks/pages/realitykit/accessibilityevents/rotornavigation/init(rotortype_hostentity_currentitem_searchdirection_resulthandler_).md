> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/accessibilityevents/rotornavigation/init(rotortype:hostentity:currentitem:searchdirection:resulthandler:)](https://developer.apple.com/documentation/realitykit/accessibilityevents/rotornavigation/init(rotortype:hostentity:currentitem:searchdirection:resulthandler:))

# init(rotorType:hostEntity:currentItem:searchDirection:resultHandler:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 26.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency init(rotorType: AccessibilityComponent.RotorType, hostEntity: Entity, currentItem: Any?, searchDirection: UIAccessibilityCustomRotor.Direction, resultHandler: @escaping (Any) -> Void)
```
