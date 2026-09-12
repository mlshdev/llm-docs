> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/playanimationaction/useparentedcontrollers](https://developer.apple.com/documentation/realitykit/playanimationaction/useparentedcontrollers)

# useParentedControllers

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A Boolean that indicates whether to parent the new animation’s controller to the controller managing this action.

## Declaration

```swift
var useParentedControllers: Bool
```

<a id="discussion"></a>

## Discussion

Setting the value of this property to true indicates the action has control over the playback of the animation. Setting this to false indicates the animation plays independently from the action, behaving as a one shot animation
