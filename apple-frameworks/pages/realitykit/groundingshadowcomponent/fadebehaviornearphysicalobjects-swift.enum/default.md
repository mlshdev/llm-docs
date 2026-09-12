> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/groundingshadowcomponent/fadebehaviornearphysicalobjects-swift.enum/default](https://developer.apple.com/documentation/realitykit/groundingshadowcomponent/fadebehaviornearphysicalobjects-swift.enum/default)

# GroundingShadowComponent.FadeBehaviorNearPhysicalObjects.default

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The default grounding shadow behavior for the device’s platform.

## Declaration

```swift
case `default`
```

<a id="discussion"></a>

## Discussion

In visionOS, the default case is equivalent to [GroundingShadowComponent.FadeBehaviorNearPhysicalObjects.fade](fade.md) when the the system can detect the entity represents a UI; otherwise,[GroundingShadowComponent.FadeBehaviorNearPhysicalObjects.constant](constant.md).

In iOS, the default case is equivalent to [GroundingShadowComponent.FadeBehaviorNearPhysicalObjects.constant](constant.md).
