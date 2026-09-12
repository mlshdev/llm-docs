> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/contact](https://developer.apple.com/documentation/realitykit/contact)

# Contact

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Events associated with collisions.

## Declaration

```swift
struct Contact
```

<a id="overview"></a>

## Overview

To subscribe to a collision event, import Combine, create a property of type [Cancellable](../combine/cancellable.md) so that you maintain a reference to the subscription, then call [subscribe(to:on:\_:)](scene/subscribe%28to_on___%29.md) or [subscribe(to:on:componentType:\_:)](scene/subscribe%28to_on_componenttype___%29.md) and provide a closure.

The closure is passed an `RealityKit/Scene/Event` object that contains information relevant to the type of event you subscribed to.

Here’s an example of subscribing to the collision begain event and retrieving the two entities involved in the collision:

```swift
 import AppKit
 import RealityKit
 import Combine

 class GameViewController: NSViewController {

     @IBOutlet var arView: ARView!
     var collisionSubscription:Cancellable?

     override func awakeFromNib() {
        let boxAnchor = try! Experience.loadBox()
        arView.scene.anchors.append(boxAnchor)

        collisionSubscription = arView.scene.subscribe(
           to: CollisionEvents.Began.self,
            on: boxAnchor
       ) { event in
           print("collision started")
           let firstEntity = event.entityA
           let secondEntity = event.entityB
           // Take appropriate action...
        }
   }
 }
```

You can also create a function to respond to the event rather than a closure by using [sink(receiveCompletion:receiveValue:)](../combine/publisher/sink%28receivecompletion_receivevalue_%29.md). Here’s an example of using a function to respond to a collision event:

```swift
import AppKit
import RealityKit
import Combine

class GameViewController: NSViewController {

    @IBOutlet var arView: ARView!
    var collisionSubscription:Cancellable?

    override func awakeFromNib() {
        let boxAnchor = try! Experience.loadBox()
        arView.scene.anchors.append(boxAnchor)

        collisionSubscription = arView.scene.publisher(for: CollisionEvents.Began.self,
                                                       on:nil).sink(receiveValue: onCollisionBegan)
    }

    private func onCollisionBegan(_ event:
                                  CollisionEvents.Began) {
        print("collision started")
        let firstEntity = event.entityA
        let secondEntity = event.entityB
        // Take appropriate action...
    }
}
```

## Topics

### Instance Properties

- [impulse](contact/impulse.md): Impulse, the force over time of the collision, in newton-seconds
- [impulseDirection](contact/impulsedirection.md): Impulse direction in scene coordinate space.
- [normal](contact/normal.md): The normal of the contacting surfaces at the contact point. The normal direction points from the second shape to the first shape in scene coordinate space.
- [penetrationDistance](contact/penetrationdistance.md): The distance of overlap between the contact pair.
- [point](contact/point.md): Point of contact in scene coordinate space.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision-related notifications

- [CollisionEvents](collisionevents.md)
