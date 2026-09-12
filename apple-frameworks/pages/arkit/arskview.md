> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskview](https://developer.apple.com/documentation/arkit/arskview)

# ARSKView (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.

## Declaration

```swift
class ARSKView
```

## Mentioned In

- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md)

<a id="overview"></a>

## Overview

Use the [ARSKView](arskview.md) class to create augmented reality experiences that position 2D elements in 3D space within a device camera view of the real world. When you run the view’s provided [ARSession](arsession.md) object:

- The view automatically renders the live video feed from the device camera as the scene background.
- When you implement [ARSKViewDelegate](arskviewdelegate.md) methods to associate SpriteKit content with real-world positions, the view automatically scales and rotates those SpriteKit nodes so that they appear to track the real world seen by the camera.

## Topics

### First Steps

- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md): Use SpriteKit to place two-dimensional images in 3D space in your AR experience.
- [session](arskview/session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.

### Responding to AR Updates

- [delegate](arskview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.
- [ARSKViewDelegate](arskviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.

### Finding Real-World Surfaces

- [hitTest(\_:types:)](arskview/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SpriteKit view.

### Mapping Content to Real-World Positions

- [anchor(for:)](arskview/anchor%28for_%29.md): Returns the AR anchor associated with the specified SpriteKit node, if any.
- [node(for:)](arskview/node%28for_%29.md): Returns the SpriteKit node associated with the specified AR anchor, if any.

## Relationships

### Inherits From

- [SKView](../spritekit/skview.md)

### Conforms To

- [ARSessionProviding](arsessionproviding.md)
- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Views

- [RealityView](../realitykit/realityview.md): A view that contains RealityKit content.
- [ARView](../realitykit/arview.md): A view that enables you to display an AR experience with RealityKit.
- [ARSCNView](arscnview.md): Deprecated. A view that blends virtual 3D content from SceneKit into your augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.

# ARSKView (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.

## Declaration

```objectivec
@interface ARSKView : SKView
```

## Mentioned In

- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md)

<a id="overview"></a>

## Overview

Use the [ARSKView](arskview.md) class to create augmented reality experiences that position 2D elements in 3D space within a device camera view of the real world. When you run the view’s provided [ARSession](arsession.md) object:

- The view automatically renders the live video feed from the device camera as the scene background.
- When you implement [ARSKViewDelegate](arskviewdelegate.md) methods to associate SpriteKit content with real-world positions, the view automatically scales and rotates those SpriteKit nodes so that they appear to track the real world seen by the camera.

## Topics

### First Steps

- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md): Use SpriteKit to place two-dimensional images in 3D space in your AR experience.
- [session](arskview/session.md): The AR session that manages motion tracking and camera image processing for the view’s contents.

### Responding to AR Updates

- [delegate](arskview/delegate.md): An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.
- [ARSKViewDelegate](arskviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.

### Finding Real-World Surfaces

- [hitTest:types:](arskview/hittest%28__types_%29.md): Deprecated. Searches for real-world objects or AR anchors in the captured camera image corresponding to a point in the SpriteKit view.

### Mapping Content to Real-World Positions

- [anchorForNode:](arskview/anchor%28for_%29.md): Returns the AR anchor associated with the specified SpriteKit node, if any.
- [nodeForAnchor:](arskview/node%28for_%29.md): Returns the SpriteKit node associated with the specified AR anchor, if any.

## Relationships

### Inherits From

- [SKView](../spritekit/skview.md)

### Conforms To

- [ARSessionProviding](arsessionproviding.md)

## See Also

### Views

- [ARSCNView](arscnview.md): Deprecated. A view that blends virtual 3D content from SceneKit into your augmented reality experience.
- [ARCoachingOverlayView](arcoachingoverlayview.md): Deprecated. A view that displays standardized onboarding instructions to direct users toward a specific goal.
