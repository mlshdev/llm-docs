> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionos/animating-hand-models-in-visionos](https://developer.apple.com/documentation/visionos/animating-hand-models-in-visionos)

# Animating hand models in visionOS

**Kind:** Sample Code  
**Availability:** visionOS 26.0+ · Xcode 26.0+

Substitute a person’s hands with custom models in a fully immersive space.

<a id="Overview"></a>

## Overview

Hand tracking enables your app to observe an Apple Vision Pro wearer’s hand positions and joint rotations in real-time within an immersive space. This sample code project demonstrates how to replace the wearer’s hands with animated glove models in a fully immersive space.

Video: animating-hand-models.mov

<a id="Create-the-glove-models"></a>

## Create the glove models

The glove models in this sample code project match the hand skeleton structure in [ARKit](../arkit.md). Each glove’s origin is positioned at the base of the wrist just like the ARKit hand skeleton’s origin. Each glove has 27 joints, matching both the number and order of the ARKit hand skeleton. These joints form a kinematic chain where each joint’s position and rotation is relative to the preceding joint, extending from wrist to fingertips. For example, the wrist connects to the thumb base, which connects to the first thumb joint, and so on.

The gloves use a natural, relaxed hand pose as the rest pose. The fingers point forward along the negative z-axis, the palm faces downward along the negative y-axis, the thumb extends at approximately 45 degrees from the palm, and the fingers curl slightly rather than fully extend. This rest pose aligns with the ARKit hand skeleton, ensuring natural animation when applying joint rotations.

![Two white gloves, each with an overlaid hand skeleton showing 27 joints marked by cyan dots and connected by lines in a kinematic chain from wrist to fingertips.](https://developer.apple.com/images/com.apple.visionOS/animating-hand-models.png)

For more information on ARKit in visionOS, including hands-tracking, see [Meet ARKit for spatial computing](https://developer.apple.com/videos/play/wwdc2023/10082).

<a id="Hide-the-wearers-hands"></a>

## Hide the wearer’s hands

By default, the system displays the wearer’s hands in an immersive space. The sample hides the wearer’s hands using [upperLimbVisibility(\_:)](https://developer.apple.com/documentation/swiftui/scene/upperlimbvisibility%28_:%29).

```swift
ImmersiveSpace(id: appModel.immersiveSpaceID) {
    ImmersiveView()
        
    // ...    
}
.immersionStyle(selection: .constant(.full), in: .full)
.upperLimbVisibility(.hidden)
```

<a id="Add-usage-descriptions-for-ARKit-data-access"></a>

## Add usage descriptions for ARKit data access

To help protect people’s privacy, visionOS limits app access to hands-tracking data and other sensors in Apple Vision Pro. Add the Hands Tracking capability to your app’s target and provide a usage description that explains how your app uses the data those sensors provide. People see that description when your app prompts for access to hands-tracking data. For more information on app capabilities, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

<a id="Add-the-glove-models-and-start-hand-tracking"></a>

## Add the glove models and start hand tracking

The `ImmersiveView` loads the glove models, adds them to the RealityKit scene, and starts hand tracking.

```swift
@State private var arkitSession = ARKitSession()
@State private var handTrackingProvider = HandTrackingProvider()
@State private var leftGlove: ModelEntity?
@State private var rightGlove: ModelEntity?

var body: some View {
    RealityView { content in
        let root = Entity()
        
        if let glove = await loadGloveModel(named: "LeftGlove") {
            leftGlove = glove
            root.addChild(glove)
        }
        
        if let glove = await loadGloveModel(named: "RightGlove") {
            rightGlove = glove
            root.addChild(glove)
        }
        
        content.add(root)
    }
    .task {
        await startHandTracking()
    }
}
```

> **Note**

> The glove models take time to load, particularly in debug builds. For simplicity, this implementation loads the gloves in the reality view’s make closure. To improve perceived performance, consider preloading the models. When dismissing the immersive space, ensure you dereference the glove models to free memory.

The `startHandTracking` method runs an [ARKitSession](../arkit/arkitsession.md) with a [HandTrackingProvider](../arkit/handtrackingprovider.md) to begin hand tracking, then responds to updates from the `HandTrackingProvider`.

```swift
private func startHandTracking() async {
    do {
        try await arkitSession.run([handTrackingProvider])
    } catch {
        print("Failed to start hand tracking: \(error.localizedDescription).")
    }
    
    await updateGlovesFromHandAnchors()
}
```

<a id="Animate-the-glove-models"></a>

## Animate the glove models

ARKit delivers a stream of [HandAnchor](../arkit/handanchor.md) instances, each containing skeletal tracking data for one of the wearer’s hands. The `updateGlovesFromHandAnchors` method hides the glove when ARKit is unable to track the hand. Each hand anchor includes [originFromAnchorTransform](../arkit/handanchor/originfromanchortransform.md), a transform with an origin at the base of the wrist. Because the glove model’s origin is also at the wrist, `updateGlovesFromHandAnchors` sets the glove’s transform to match this transform, positioning the glove correctly in space.

```swift
private func updateGlovesFromHandAnchors() async {
    for await anchorUpdate in handTrackingProvider.anchorUpdates {
        let handAnchor = anchorUpdate.anchor
        
        guard let glove = handAnchor.chirality == .left ? leftGlove : rightGlove,
              let handSkeleton = handAnchor.handSkeleton else { continue }
        
        // Hide the glove when the system loses tracking.
        glove.isEnabled = handAnchor.isTracked
        
        guard handAnchor.isTracked else { continue }
        
        glove.transform = Transform(matrix: handAnchor.originFromAnchorTransform)
        updateJointRotations(for: glove, using: handSkeleton)
    }
}
```

Finally, the `updateJointRotations` method iterates through each joint, extracts its rotation from the hand skeleton, and applies that rotation to the corresponding joint in the glove model. This iteration by index requires that the joints in the USD model have the identical order as the ARKit hand skeleton. Because the glove model uses the same joint hierarchy as the ARKit hand skeleton, applying these rotations updates the glove’s pose to match the wearer’s hand pose.

```swift
private func updateJointRotations(for glove: ModelEntity, using handSkeleton: HandSkeleton) {
    let joints = handSkeleton.allJoints
    
    // This assumes the joint order in the USD file matches the ARKit hand skeleton joint order.
    for (index, joint) in joints.enumerated() {
        let jointTransform = handSkeleton.joint(joint.name).parentFromJointTransform
        let rotation = simd_quatf(jointTransform)
        
        glove.jointTransforms[index].rotation = rotation
    }
}
```

## See Also

### Integrating ARKit

- [Creating a 3D painting space](creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [Displaying an entity that follows a person’s view](displaying-a-3d-object-that-moves-to-stay-in-a-person's-view.md): Create an entity that tracks and follows head movement in an immersive scene.
- [Applying mesh to real-world surroundings](applying-mesh-to-real-world-surroundings.md): Add a layer of mesh to objects in the real world, using scene reconstruction in ARKit.
- [Obscuring virtual items in a scene behind real-world items](obscuring-virtual-items-in-a-scene-behind-real-world-items.md): Increase the realism of an immersive experience by adding entities with invisible materials real-world objects.
