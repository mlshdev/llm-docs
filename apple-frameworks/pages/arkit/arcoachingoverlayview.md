> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview](https://developer.apple.com/documentation/arkit/arcoachingoverlayview)

# ARCoachingOverlayView (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

A view that displays standardized onboarding instructions to direct users toward a specific goal.

## Declaration

```swift
class ARCoachingOverlayView
```

<a id="overview"></a>

## Overview

This view offers your users a standardized onboarding routine. You can configure this view to automatically display during session initialization and in limited tracking situations, while giving the user specific instructions that best facilitate ARKit’s world tracking.

These illustrations show overlay views with horizontal- and vertical-plane goals, indicating that the user should begin moving the device:

![Illustration showing two overlay views. The view at the left shows a horizontal plane, and the view at the right shows a vertical plane. Both views indicate that the user should begin moving the device.](https://developer.apple.com/images/com.apple.arkit/media-3403212@2x.png)

These illustrations show overlay views indicating that the user should continue moving the phone or change the speed with which they move it:

![Illustration showing two overlay views. The view at the left indicates that the device is moving and the user should continue moving it. The view at the right indicates that the device is moving too fast and the user should move it more slowly.](https://developer.apple.com/images/com.apple.arkit/media-3403211@2x.png)

When you start your app, the coaching overlay asks the user to move the device in ways that help ARKit establish tracking. When you choose a specific goal like finding a plane, the view tailors its instructions accordingly. After the coaching overlay determines the goal has been met and no further coaching is required, it hides from the user’s view.

For an example app that uses the coaching overlay, see [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md).

<a id="Supporting-Automatic-Coaching"></a>

### Supporting Automatic Coaching

By default, [activatesAutomatically](arcoachingoverlayview/activatesautomatically.md) is enabled and therefore you should override [coachingOverlayViewWillActivate(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md) to determine whether coaching is in progress. Coordinate your actions to help the user focus on these instructions, for example, by hiding any UI that’s not necessary while the session reinitializes.

<a id="Relocalizing-After-an-Interruption"></a>

### Relocalizing After an Interruption

If relocalization is enabled (see [sessionShouldAttemptRelocalization(\_:)](arsessionobserver/sessionshouldattemptrelocalization%28__%29.md)), ARKit attempts to restore your session if any interruptions degrade your app’s tracking state. In this event, the coaching overlay presents itself and gives the user instructions to assist ARKit with relocalizing.

![User instruction to return to the user’s previous location so ARKit can restore the session. ](https://developer.apple.com/images/com.apple.arkit/media-3394488@2x.png)

During this time, the coaching overlay includes a button that lets the user indicate they’d like to start over rather than restore the session.

![Button that enables the user to indicate they’d like to start over rather than restore the session.](https://developer.apple.com/images/com.apple.arkit/media-3394474@2x.png)

ARKit notifies you when the user presses Start Over by calling your delegate’s [coachingOverlayViewDidRequestSessionReset(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md) function. Implement this callback if your app requires any custom actions to restart the AR experience.

```swift
func coachingOverlayViewDidRequestSessionReset(_ coachingOverlayView: ARCoachingOverlayView) {    

    // Reset the session.
    let configuration = ARWorldTrackingConfiguration()
    configuration.planeDetection = [.horizontal, .vertical]
    session.run(configuration, options: [.resetTracking])

    // Custom actions to restart the AR experience. 
    // ...
}
```

If you do not implement [coachingOverlayViewDidRequestSessionReset(\_:)](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md), the coaching overlay responds to the Start Over button by resetting tracking, which also removes any existing anchors.

For more information about relocalization, see [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md).

## Topics

### Delegating Events

- [delegate](arcoachingoverlayview/delegate.md): An object you supply that implements coaching event callbacks.
- [ARCoachingOverlayViewDelegate](arcoachingoverlayviewdelegate.md): Deprecated. A set of callbacks you implement to be notified of coaching events.

### Defining a Goal

- [goal](arcoachingoverlayview/goal-swift.property.md): A field that indicates your app’s tracking requirements.
- [ARCoachingOverlayView.Goal](arcoachingoverlayview/goal-swift.enum.md): The options that specify your app’s tracking requirements.

### Activating the View

- [activatesAutomatically](arcoachingoverlayview/activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [isActive](arcoachingoverlayview/isactive.md): A flag that indicates whether coaching is in progress.
- [setActive(\_:animated:)](arcoachingoverlayview/setactive%28__animated_%29.md): Controls whether coaching is in progress.

### Providing the Session

- [session](arcoachingoverlayview/session.md): The session this view uses to provide coaching.
- [sessionProvider](arcoachingoverlayview/sessionprovider.md): An object you designate that provides the current session.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

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
- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.

# ARCoachingOverlayView (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · visionOS 1.0+ (deprecated in 1.0)

A view that displays standardized onboarding instructions to direct users toward a specific goal.

## Declaration

```objectivec
@interface ARCoachingOverlayView : UIView
```

<a id="overview"></a>

## Overview

This view offers your users a standardized onboarding routine. You can configure this view to automatically display during session initialization and in limited tracking situations, while giving the user specific instructions that best facilitate ARKit’s world tracking.

These illustrations show overlay views with horizontal- and vertical-plane goals, indicating that the user should begin moving the device:

![Illustration showing two overlay views. The view at the left shows a horizontal plane, and the view at the right shows a vertical plane. Both views indicate that the user should begin moving the device.](https://developer.apple.com/images/com.apple.arkit/media-3403212@2x.png)

These illustrations show overlay views indicating that the user should continue moving the phone or change the speed with which they move it:

![Illustration showing two overlay views. The view at the left indicates that the device is moving and the user should continue moving it. The view at the right indicates that the device is moving too fast and the user should move it more slowly.](https://developer.apple.com/images/com.apple.arkit/media-3403211@2x.png)

When you start your app, the coaching overlay asks the user to move the device in ways that help ARKit establish tracking. When you choose a specific goal like finding a plane, the view tailors its instructions accordingly. After the coaching overlay determines the goal has been met and no further coaching is required, it hides from the user’s view.

For an example app that uses the coaching overlay, see [Placing objects and handling 3D interaction](placing-objects-and-handling-3d-interaction.md).

<a id="Supporting-Automatic-Coaching"></a>

### Supporting Automatic Coaching

By default, [activatesAutomatically](arcoachingoverlayview/activatesautomatically.md) is enabled and therefore you should override [coachingOverlayViewWillActivate:](arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate%28__%29.md) to determine whether coaching is in progress. Coordinate your actions to help the user focus on these instructions, for example, by hiding any UI that’s not necessary while the session reinitializes.

<a id="Relocalizing-After-an-Interruption"></a>

### Relocalizing After an Interruption

If relocalization is enabled (see [sessionShouldAttemptRelocalization:](arsessionobserver/sessionshouldattemptrelocalization%28__%29.md)), ARKit attempts to restore your session if any interruptions degrade your app’s tracking state. In this event, the coaching overlay presents itself and gives the user instructions to assist ARKit with relocalizing.

![User instruction to return to the user’s previous location so ARKit can restore the session. ](https://developer.apple.com/images/com.apple.arkit/media-3394488@2x.png)

During this time, the coaching overlay includes a button that lets the user indicate they’d like to start over rather than restore the session.

![Button that enables the user to indicate they’d like to start over rather than restore the session.](https://developer.apple.com/images/com.apple.arkit/media-3394474@2x.png)

ARKit notifies you when the user presses Start Over by calling your delegate’s [coachingOverlayViewDidRequestSessionReset:](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md) function. Implement this callback if your app requires any custom actions to restart the AR experience.

```swift
func coachingOverlayViewDidRequestSessionReset(_ coachingOverlayView: ARCoachingOverlayView) {    

    // Reset the session.
    let configuration = ARWorldTrackingConfiguration()
    configuration.planeDetection = [.horizontal, .vertical]
    session.run(configuration, options: [.resetTracking])

    // Custom actions to restart the AR experience. 
    // ...
}
```

If you do not implement [coachingOverlayViewDidRequestSessionReset:](arcoachingoverlayviewdelegate/coachingoverlayviewdidrequestsessionreset%28__%29.md), the coaching overlay responds to the Start Over button by resetting tracking, which also removes any existing anchors.

For more information about relocalization, see [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md).

## Topics

### Delegating Events

- [delegate](arcoachingoverlayview/delegate.md): An object you supply that implements coaching event callbacks.
- [ARCoachingOverlayViewDelegate](arcoachingoverlayviewdelegate.md): Deprecated. A set of callbacks you implement to be notified of coaching events.

### Defining a Goal

- [goal](arcoachingoverlayview/goal-swift.property.md): A field that indicates your app’s tracking requirements.
- [ARCoachingGoal](arcoachingoverlayview/goal-swift.enum.md): The options that specify your app’s tracking requirements.

### Activating the View

- [activatesAutomatically](arcoachingoverlayview/activatesautomatically.md): A flag that indicates whether the coaching view activates automatically, depending on the current session state.
- [isActive](arcoachingoverlayview/isactive.md): A flag that indicates whether coaching is in progress.
- [setActive:animated:](arcoachingoverlayview/setactive%28__animated_%29.md): Controls whether coaching is in progress.

### Providing the Session

- [session](arcoachingoverlayview/session.md): The session this view uses to provide coaching.
- [sessionProvider](arcoachingoverlayview/sessionprovider.md): An object you designate that provides the current session.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

## See Also

### Views

- [ARSCNView](arscnview.md): Deprecated. A view that blends virtual 3D content from SceneKit into your augmented reality experience.
- [ARSKView](arskview.md): Deprecated. A view that blends virtual 2D content from SpriteKit into the 3D space of an augmented reality experience.
