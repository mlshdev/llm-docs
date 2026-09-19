> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/technologyoverviews/preparing-your-app-for-iphone-duo

# Preparing your app for iPhone Duo

**Framework:** Technology Overviews

Update your iOS app to dynamically resize for inner and outer displays, adjust your layout for the folding display, and adapt bars for vertical layout.

<a id="Overview"></a>

## Overview

iPhone Duo is a foldable phone, with a compact outer display and a large inner display. Both displays include a front camera, and the inner front-facing camera is hidden when not in use. As iPhone Duo is opened, closed, partially folded, and rotated, content transitions between displays and adjusts for rotated positions. When partially folded, views adapt to the folding region of the display.

**Opened**

![An image of iPhone Duo opened, showing the Notes app with a note titled Nature Walks.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-1@2x.png)

**Partially folded**

![An image of iPhone Duo partially folded, showing the Notes app with a note titled Nature Walks.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-2@2x.png)

Resizing is a key feature for your app on iPhone Duo. If your app already works on iPad and Mac or you’ve prepared your app to resize in iPhone Mirroring, you’re well on your way to supporting iPhone Duo. If not, adopt standard layout controls and containers, and use size classes and scene geometry to improve your app’s resizing. Then, handle reserved regions such as the fold to resize your app and handle folded layouts. Evaluate whether an arrangement view can assist your app’s layout to handle the fold.

iPhone Duo presents navigation bars, toolbars, and tab bars together vertically on the side of the display in some poses. Review and organize your app’s bars to ensure frequently used controls stay visible, and less frequently used controls appear in an overflow menu when there’s limited space.

![An image of iPhone Duo showing the outer display, with bars presented on the vertical axis. The image has callouts that identify the Dynamic Island, the status bar, toolbar, and tab bar from the top down.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-3@2x.png)

Build your app with the latest version of Xcode to use all of the available screen space on iPhone Duo. When you build with Xcode 26 and earlier, your app doesn’t extend under the status bar and camera. For more information, see [Prepare your app for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111461?time=30). Then, take the first step in preparing your app for iPhone Duo by testing it in a simulator or on iPhone Duo. For more information, see [Running your app on simulated or physical devices](https://developer.apple.com/documentation/xcode/running-your-app-on-simulated-or-physical-devices).

<a id="Address-common-layout-and-resizing-considerations"></a>

### Address common layout and resizing considerations

Because iPhone Duo supports multiple screen sizes, layouts, and orientations, your app needs to adapt gracefully across all of them. Check how your app appears on both displays, when closed, open, or partially folded. Rotate iPhone Duo in each pose to see how your app’s layout reacts.

![An abstract image of several iPhone Duo poses, including from left to right: closed, folded like a tent, open in a wide layout, partially folded, open in a tall layout, and folded like a laptop.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-4@2x.png)

Navigate through your app, checking each view, sheet, and popover to identify things you can improve:

- Confirm your views resize well in each supported orientation and pose.
- Inspect how the system presents your app’s navigation bars, toolbars, and tab bars vertically on the side of the display.
- Identify any views, sheets, or popovers that position awkwardly when you fold or open iPhone Duo.
- Identify elements or controls in your views that appear in the fold, and are difficult to see or interact with.

Follow these recommendations to avoid common issues, and improve your app’s resizability:

- Prefer system-provided layouts and containers, such as split views, tab bars, arrangement views, and navigation stacks. These handle resizing, automatically adjusting for the outer display, fully open or folded inner display, and camera occlusions.
- Size your views relative to their container rather than to fixed iPhone dimensions.
- Make layout calculations based on your scene or containing view’s bounds rather than screen dimensions.
- Adopt Auto Layout in UIKit to make your views resizable.
- Use automatic trait tracking to observe [horizontalSizeClass](../uikit/uitraitcollection/horizontalsizeclass.md) and [verticalSizeClass](../uikit/uitraitcollection/verticalsizeclass.md) changes to adapt your interface to different sizes. Don’t use [userInterfaceIdiom](../uikit/uidevice/userinterfaceidiom.md) or [UIInterfaceOrientation](../uikit/uiinterfaceorientation.md) for layout decisions in your UIKit app. For more information, see [Adapting your app when traits change](../uikit/adapting-your-app-when-traits-change.md).

<a id="Optimize-bars-for-vertical-presentation"></a>

### Optimize bars for vertical presentation

Check the navigation bars, toolbars, and tab bars in your app to see if the system presents them vertically on the side of the display. This happens on the outer display when the device is closed, and for some views in the leading or trailing position on the inner display when the device is open.

If the system doesn’t present your bars vertically, check that you’re using the bar support that navigation containers, such as a tab view or navigation stack, provide. In SwiftUI, add the [toolbar(content:)](https://developer.apple.com/documentation/swiftui/view/toolbar%28content:%29) modifier to a [NavigationStack](https://developer.apple.com/documentation/swiftui/navigationstack) or [NavigationSplitView](https://developer.apple.com/documentation/swiftui/navigationsplitview). In UIKit, set toolbar items on a view controller that you add to a navigation controller, instead of creating a custom bar for your view based on [UIToolbar](../uikit/uitoolbar.md), [UINavigationBar](../uikit/uinavigationbar.md), or [UITabBar](../uikit/uitabbar.md).

The system handles the selection of horizontal and vertical bar presentation differently in some contexts:

- **Inspectors.** The system presents bars in inspectors horizontally.
- **Split views.** In a split view displaying multiple views, the system shows bars horizontally for the sidebar or content view, and vertically for the detail view.
- **Sheets.** On the outer display, the system presents bars vertically for sheets by default. Use [toolbarVerticalBehavior(\_:)](https://developer.apple.com/documentation/swiftui/view/toolbarverticalbehavior%28_:%29) in SwiftUI or [preferredVerticalBarBehavior](../uikit/uiviewcontroller/preferredverticalbarbehavior.md) in UIKit to disable vertical presentation for your bars. For sheets on the inner display, the system presents the toolbar horizontally for centered or leading placements, and vertically for trailing placements. Set [presentationPlacement(\_:)](https://developer.apple.com/documentation/swiftui/view/presentationplacement%28_:%29) in SwiftUI or [preferredPlacement](../uikit/uisheetpresentationcontroller/preferredplacement.md) in UIKit to indicate where you want the system to place the sheet.

In a custom view, you may need to know if the system presents bars vertically to adjust your layout. Use the [toolbarVerticalEdge](https://developer.apple.com/documentation/swiftui/environmentvalues/toolbarverticaledge) environment value in SwiftUI or the [verticalBarEdge](../uikit/uitraitcollection/verticalbaredge.md) trait in UIKit to determine if the system presents bars vertically.

If your view has a hero or background image, extend it under a vertical bar using [backgroundExtensionEffect()](https://developer.apple.com/documentation/swiftui/view/backgroundextensioneffect%28%29) in SwiftUI, or [UIBackgroundExtensionView](../uikit/uibackgroundextensionview.md) in UIKit.

<a id="Organize-items-in-your-bars"></a>

### Organize items in your bars

Organize your items for optimal placement when the system presents navigation bars, toolbars, and tab bars vertically. Reserve the top for primary navigation controls, like Back or Close, followed by prominent actions, such as Done. If you use a navigation controller, the system adds the Back button automatically.

Use semantic placements, such as [ToolbarItemPlacement](https://developer.apple.com/documentation/swiftui/toolbaritemplacement) in SwiftUI, to organize toolbar items into related groups. Use [topBarPinnedTrailing](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/topbarpinnedtrailing) placement in SwiftUI for prominent navigation items such as a Done button, or [pinnedTrailingGroup](../uikit/uinavigationitem/pinnedtrailinggroup.md) in UIKit. For a custom Back or Close button, create a [ToolbarItem](https://developer.apple.com/documentation/swiftui/toolbaritem) with [cancellationAction](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/cancellationaction) placement in SwiftUI, or add an item in [leadingItemGroups](../uikit/uinavigationitem/leadingitemgroups.md) in UIKit.

Manage inclusion in vertical layouts with the [axisBehavior(\_:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/axisbehavior%28_:%29) modifier on your item in SwiftUI, or set [axisBehavior](../uikit/uibarbuttonitem/axisbehavior-swift.property.md) on your item in UIKit. Manage the order in which the system selects items to go in the overflow menu with the [visibilityPriority(\_:)](https://developer.apple.com/documentation/swiftui/toolbarcontent/visibilitypriority%28_:%29) modifier in SwiftUI or by setting [visibilityPriority](../uikit/uibarbuttonitem/visibilitypriority.md) in UIKit. Put items directly in the overflow menu in SwiftUI with [ToolbarOverflowMenu](https://developer.apple.com/documentation/swiftui/toolbaroverflowmenu), or [additionalOverflowItems](../uikit/uinavigationitem/additionaloverflowitems.md) in UIKit.

When you create toolbar items, specify both an icon and a title for items that you want to have the most adaptability. iPhone Duo might present items vertically, horizontally, or in an overflow menu:

- The system uses an icon for an item it presents vertically.
- The system uses an icon or a title for an item it presents horizontally, preferring an icon.
- The system uses an icon and title for an item in an overflow menu.
- If your item has a title and doesn’t have an icon, the system doesn’t present it vertically.
- If your item uses a custom view rather than a title or icon, the system doesn’t present it vertically.

<a id="Arrange-views-in-different-poses"></a>

### Arrange views in different poses

[ArrangementView](https://developer.apple.com/documentation/swiftui/arrangementview) in SwiftUI and [UIArrangementViewController](../uikit/uiarrangementviewcontroller.md) in UIKit represent an *arrangement view*, which is a layout container for a primary view and a secondary view that you can use to adjust to the different device poses. Arrangement views offer two styles of preferred arrangements: split and overlay.

In a split arrangement, the arrangement view presents the primary and secondary views side by side when the containing view is wider than it is tall; or it places the primary view on top and the secondary view below it when the containing view is taller than it is wide. The arrangement view adjusts the placement of the primary and secondary views to adapt to reserved regions, such as the folding region. Use this type of arrangement when you lay out your primary and secondary views with containers such as [HStack](https://developer.apple.com/documentation/swiftui/hstack) or [VStack](https://developer.apple.com/documentation/swiftui/vstack).

In an overlay arrangement, the arrangement view positions the primary view on top of the secondary view when there aren’t any active reserved regions that are divisions. This is true when iPhone Duo is closed or fully open. When iPhone Duo is partially open, the overlay arrangement places the primary view in the trailing or bottom part of the display relative to the fold, and the secondary view in the leading or top part of the display relative to the fold. Use this type of arrangement when you place a primary view over a secondary view with a container such as a [ZStack](https://developer.apple.com/documentation/swiftui/zstack).

For both styles of arrangement, you can limit which axis you want to use for the arrangement. For example, if you want to show only the primary view in a vertical layout and you want to show the primary view next to the secondary view in a horizontal layout, set the axis on the style as the following examples show:

**SwiftUI**

```swift
    ArrangementView {
        PrimaryView()
    } secondary: {
        SecondaryView()
    }
    .arrangementViewStyle(.split.axes(.horizontal))
```

**UIKit**

```swift
    let arrangementVC = UIArrangementViewController()
    
    let primaryVC = PrimaryViewController()
    arrangementVC.setViewController(primaryVC, for: .primary)
    
    let secondaryVC = SecondaryViewController()
    arrangementVC.setViewController(secondaryVC, for: .secondary)
    
    arrangementVC.updateArrangement(.split.axes(.horizontal))
```

Avoid placing an arrangement view inside a navigation split view, list, scroll view, or other container that might cause part of your view to become inaccessible.

<a id="Adapt-to-reserved-regions-in-your-views"></a>

### Adapt to reserved regions in your views

While framework-provided views and containers automatically adjust to work around the fold or the front-facing camera on the inner display, your custom views need a flexible approach to identify *divisions* and *occlusions*. iOS represents these as *reserved regions*. A division occurs when a folding region divides a large view into smaller views. An occlusion is an area of a view where a hardware element, such as the camera, covers your content so it isn’t visible. The inner front-facing camera can block your view when it’s active, and the outer front-facing camera always occludes your view.

**Outer display**

![An image of the outer display of iPhone Duo, showing the location of the outer camera region.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-5@2x.png)

**Inner display**

![An image of the inner display of iPhone Duo, showing the locations of the folding region and the inner camera region.](https://developer.apple.com/images/com.apple.TechnologyOverviews/preparing-your-app-for-iphone-duo-6@2x.png)

In SwiftUI, use a [GeometryReader](https://developer.apple.com/documentation/swiftui/geometryreader) to get a [GeometryProxy](https://developer.apple.com/documentation/swiftui/geometryproxy), then get an array of [ReservedRegion](https://developer.apple.com/documentation/swiftui/reservedregion) instances from [reservedRegions(kind:options:layoutDirectionBehavior:)](https://developer.apple.com/documentation/swiftui/geometryproxy/reservedregions%28kind:options:layoutdirectionbehavior:%29). In UIKit, get an array of [UIView.ReservedRegion](../uikit/uiview/reservedregion.md) instances from [reservedRegions(kind:options:)](../uikit/uiview/reservedregions%28kind_options_%29.md). Inspect the frames of the reserved regions, and adjust your views accordingly.

> **Note**

> A reserved region can be active or inactive. For example, a reserved region that represents the fold is active when iPhone Duo is partially open, but inactive when it is fully open.

<a id="Improve-your-apps-camera-handling"></a>

### Improve your app’s camera handling

If your app uses [AVKit](../avkit.md) or [AVFoundation](../avfoundation.md) to capture photos or videos, your app can capture photos and video from the outer display camera, inner display camera, and rear camera on iPhone Duo. When a person opens, closes, and rotates the phone, your app may change which display it’s on, and the camera you’re using may point in the opposite direction. For more information about how to update your app to handle these situations, see [Choosing a camera by the direction it faces](../avkit/choosing-a-camera-by-the-direction-it-faces.md).

When iPhone Duo is fully open and capturing photos or video with the rear camera, it can show content on the outer display in addition to showing your app on the inner display. For more information on configuring your camera app to do this, see [Registering a camera capture accessory on iPhone Duo](../avfoundation/registering-a-camera-capture-accessory-on-iphone-duo.md).

<a id="Videos"></a>

## Videos

- [Design for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111466): iPhone Duo is the first folding iPhone and comes with a reimagined iOS. Get to know the design principles behind the updated software, explore how controls move between different poses, and learn where your layout needs to adapt and why.
- [Prepare your app for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111461): Learn how to update and optimize your app for the foldable display of iPhone Duo. Discover how to opt into the full-screen experience, adopt flexible layout best practices, and simulate poses in Device Hub with Xcode. Find out how to use size classes instead of interface orientation, handle asymmetric safe areas, and test Split View multitasking to ensure your app shines in all the ways people use it.
- [Raise the bar with iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111462): Discover how to adapt your navigation, toolbars, and tab bars for the unique displays of iPhone Duo. Explore the design principles behind the new bar layout, and learn how to configure custom view representations and manage overflow to build powerful, responsive apps.
- [Strike a pose with adaptive layouts on iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111463): Learn how to create responsive, flexible layouts that work great on iPhone Duo. Explore displacement design patterns that keep content visible and reachable as people open and close their iPhone Duo. Discover how to use arrangement views in SwiftUI and UIKit to build split and overlay presentations, and find out how to query reserved regions to tailor layouts around the hinge and cameras.
- [Leverage multiple displays and scenes on iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111464): Discover how to build rich multi-window and multi-display experiences for iPhone Duo. Explore how to handle dynamic window sizes and request new scenes in side-by-side multitasking. Learn how to observe hinge angle changes in SwiftUI and UIKit to create interactive effects. And find out how to use scene accessories to present supplementary content across both displays simultaneously.
- [Build a great camera experience for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111465): Discover how to leverage the outer and inner cameras on iPhone Duo. Explore the Virtual Front Camera, and find out how to use the direction coordinator to switch between cameras and update your UI as people open and close iPhone Duo. Learn best practices for handling preview aspect ratios, positioning, and rotation to deliver a seamless capture experience.
- [Modernize your UIKit app](https://developer.apple.com/videos/play/wwdc2026/278): Discover the latest updates to UIKit. Learn how to update your iPhone app layouts to work great when resized with iPhone Mirroring and on iPad. Explore new APIs for tab and navigation bars, find out how to prepare your app for new Apple Intelligence capabilities, and get introduced to a skill for your coding agent of choice that helps modernize your codebase.
- [Make your UIKit app more flexible](https://developer.apple.com/videos/play/wwdc2025/282): Find out how your UIKit app can become more flexible on iPhone, iPad, Mac, and Apple Vision Pro by using scenes and container view controllers. Learn to unlock your app’s full potential by transitioning from an app-centric to a scene-based lifecycle, including enhanced window resizing and improved multitasking. Explore enhancements to UISplitViewController, such as interactive column resizing and first-class support for inspector columns. And make your views and controls more adaptive by adopting new layout APIs.

## See Also

### Related Documentation

- [Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo): An app designed for iPhone Duo adapts seamlessly to both displays, providing a continuous experience as the device opens and closes.
- [TN3210: Optimizing your app for iPhone Mirroring](https://developer.apple.com/documentation/technotes/tn3210-optimizing-your-app-for-iphone-mirroring): Test your app and improve compatibility with iPhone Mirroring.
- [Adopting Liquid Glass](adopting-liquid-glass.md): Find out how to bring the new material to your app.
- [Automatic trait tracking](../uikit/automatic-trait-tracking.md): Reduce the need to manually register for trait changes when you use traits within a method or closure that supports automatic trait tracking.
