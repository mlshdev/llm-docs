> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection](https://developer.apple.com/documentation/uikit/uitraitcollection)

# UITraitCollection (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A collection of data that represents the environment for an individual element in your app’s user interface.

## Declaration

```swift
class UITraitCollection
```

## Mentioned In

- [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)
- [Displaying and managing views with a view controller](displaying-and-managing-views-with-a-view-controller.md)

<a id="overview"></a>

## Overview

The [traitCollection](uitraitenvironment/traitcollection.md) property of the [UITraitEnvironment](uitraitenvironment.md) protocol contains traits that describe the state of various elements of the iOS user interface, such as size class, display scale, and layout direction. Together, these traits compose the UIKit trait environment.

The following classes adopt [UITraitEnvironment](uitraitenvironment.md): [UIScreen](uiscreen.md), [UIWindow](uiwindow.md), [UIWindowScene](uiwindowscene.md), [UIViewController](uiviewcontroller.md), [UIPresentationController](uipresentationcontroller.md), and [UIView](uiview.md). To create an adaptive interface, write code to adjust your app’s layout according to changes in these traits. You access specific trait values using the [UITraitCollection](uitraitcollection.md) [horizontalSizeClass](uitraitcollection/horizontalsizeclass.md), [verticalSizeClass](uitraitcollection/verticalsizeclass.md), [displayScale](uitraitcollection/displayscale.md), [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md), and other properties.

To make your view controllers and views responsive to changes in the iOS interface environment, use automatic trait tracking in supported [UIViewController](uiviewcontroller.md) and [UIView](uiview.md) methods, or register to track specific trait changes with [UITraitChangeObservable](uitraitchangeobservable-67e94.md) methods. For more information, see [Adapting your app when traits change](adapting-your-app-when-traits-change.md).

To customize view controller animations in response to interface environment changes, override the [willTransition(to:with:)](uicontentcontainer/willtransition%28to_with_%29.md) method of the [UIContentContainer](uicontentcontainer.md) protocol.

For more information about the horizontal (width) and vertical (height) size classes your app can encounter when running full-screen on various devices, see Human Interface Guidelines \> [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

You can create standalone trait collections to assist in matching against specific environments. The [UITraitCollection](uitraitcollection.md) class includes four specialized constructors, as well as a constructor that enables you to combine an array of trait collections, [init(traitsFrom:)](uitraitcollection/init%28traitsfrom_%29.md).

One important use of standalone trait collections is to enable conditional use of images based on the current iOS interface environment. You can associate a trait collection with a [UIImage](uiimage.md) instance by way of a [UIImageAsset](uiimageasset.md) instance, as described in the overview section of [UIImageAsset](uiimageasset.md). For information on configuring asset catalogs graphically from within the Xcode IDE, see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs).

You can employ a standalone trait collection to enable a two-column split view in landscape orientation on iPhone. See the [setOverrideTraitCollection(\_:forChild:)](uiviewcontroller/setoverridetraitcollection%28__forchild_%29.md) method of the [UIViewController](uiviewcontroller.md) class.

You can also use a standalone trait collection to customize view appearance with the [appearance(for:)](uiappearance/appearance%28for_%29.md) protocol method, as described in [UIAppearance](uiappearance.md).

For information on creating custom traits, see [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md).

## Topics

### Getting the current traits

- [current](uitraitcollection/current.md): The trait collection for the current execution context.

### Getting related traits

- [systemTraitsAffectingColorAppearance](uitraitcollection/systemtraitsaffectingcolorappearance-64z7q.md)
- [systemTraitsAffectingImageLookup](uitraitcollection/systemtraitsaffectingimagelookup-4jv5.md)

### Modifying traits

- [init(mutations:)](uitraitcollection/init%28mutations_%29.md)
- [modifyingTraits(\_:)](uitraitcollection/modifyingtraits%28__%29.md)
- [UITraitCollection.TraitMutations](uitraitcollection/traitmutations.md)

### Getting trait changes

- [changedTraits(from:)](uitraitcollection/changedtraits%28from_%29.md)

### Comparing trait collections

- [hasDifferentColorAppearance(comparedTo:)](uitraitcollection/hasdifferentcolorappearance%28comparedto_%29.md): Queries whether changing between the specified and current trait collections would affect color values.
- [containsTraits(in:)](uitraitcollection/containstraits%28in_%29.md): Deprecated. Queries whether a trait collection contains all of another trait collection’s values.

### Performing actions with the current traits

- [performAsCurrent(\_:)](uitraitcollection/performascurrent%28__%29.md): Executes custom code using the traits of the receiving trait collection.

### Retrieving size class traits

- [horizontalSizeClass](uitraitcollection/horizontalsizeclass.md): The horizontal size class of the trait collection.
- [verticalSizeClass](uitraitcollection/verticalsizeclass.md): The vertical size class of the trait collection.
- [UIUserInterfaceSizeClass](uiuserinterfacesizeclass.md): Constants that indicate the size class of a view.

### Retrieving display-related traits

- [displayScale](uitraitcollection/displayscale.md): The display scale of the trait collection.
- [displayGamut](uitraitcollection/displaygamut.md): The gamut of the current display.
- [UIDisplayGamut](uidisplaygamut.md): Constants that indicate the gamut of the current display.

### Retrieving interface-related traits

- [userInterfaceStyle](uitraitcollection/userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](uitraitcollection/userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](uitraitcollection/layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](uitraitcollection/resolvesnaturalalignmentwithbasewritingdirection-58wlh.md)
- [accessibilityContrast](uitraitcollection/accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.
- [UINSToolbarItemPresentationSize](uinstoolbaritempresentationsize.md): Constants that specify the presentation size of a toolbar item in an AppKit toolbar.
- [hdrHeadroomUsageLimit](uitraitcollection/hdrheadroomusagelimit.md): If HDR headroom should be used for the current UI configuration. Headroom usage is disabled in certain UI configurations, such as when all an application’s windows are in the background.
- [UIHDRHeadroomUsageLimit](uihdrheadroomusagelimit.md)

### Retrieving the force touch capability traits

- [forceTouchCapability](uitraitcollection/forcetouchcapability.md): The force touch capability value of the trait collection.
- [UIForceTouchCapability](uiforcetouchcapability.md): Keys that indicate the availability of 3D Touch on a device.

### Retrieving content size category information

- [preferredContentSizeCategory](uitraitcollection/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.

### Retrieving layout environment traits

- [listEnvironment](uitraitcollection/listenvironment.md): The list environment represents whether a given trait collection is from a view in a UITableView or a UICollectionView list section.
- [UIListEnvironment](uilistenvironment.md): Constants that indicate the style of the containing list in a collection view or table view.
- [splitViewControllerLayoutEnvironment](uitraitcollection/splitviewcontrollerlayoutenvironment.md): The split view controller layout environment represents whether an ancestor split view controller is expanded or collapsed.
- [UISplitViewController.LayoutEnvironment](uisplitviewcontroller/layoutenvironment.md): Constants that indicate the current layout of the containing split view controller.
- [tabAccessoryEnvironment](uitraitcollection/tabaccessoryenvironment.md): The tab accessory environment represents whether a given trait collection is from a view in a `UITabAccessory` content view.
- [UITabAccessory.Environment](uitabaccessory/environment.md)

### Retrieving scene capture state

- [sceneCaptureState](uitraitcollection/scenecapturestate.md): Scene capture state represents whether a scene is currently being mirrored or recorded.
- [UISceneCaptureState](uiscenecapturestate.md)

### Retrieving dynamic range traits

- [imageDynamicRange](uitraitcollection/imagedynamicrange.md): The imageDynamicRange determines how HDR images will render in the given trait environment. SDR images are unaffected.

### Retrieving typesetting language traits

- [typesettingLanguage](uitraitcollection/typesettinglanguage-6i635.md)

### Getting an image configuration object

- [imageConfiguration](uitraitcollection/imageconfiguration.md): An image configuration object compatible with this trait collection.

### Creating a trait collection

- [init()](uitraitcollection/init%28%29.md): Creates a trait collection whose traits are set to their default (unspecified) values.
- [init(userInterfaceIdiom:)](uitraitcollection/init%28userinterfaceidiom_%29.md): Creates a trait collection that contains only a specified interface idiom.
- [init(horizontalSizeClass:)](uitraitcollection/init%28horizontalsizeclass_%29.md): Creates a trait collection that contains only a specified horizontal size class.
- [init(verticalSizeClass:)](uitraitcollection/init%28verticalsizeclass_%29.md): Creates a trait collection that contains only a specified vertical size class.
- [init(userInterfaceStyle:)](uitraitcollection/init%28userinterfacestyle_%29.md): Creates a trait collection that contains only the specified user interface style trait.
- [init(accessibilityContrast:)](uitraitcollection/init%28accessibilitycontrast_%29.md): Creates a trait collection that contains only the specified accessibility contrast trait.
- [init(userInterfaceLevel:)](uitraitcollection/init%28userinterfacelevel_%29.md): Creates a trait collection that contains only the specified user interface level trait.
- [init(legibilityWeight:)](uitraitcollection/init%28legibilityweight_%29.md): Creates a trait collection that contains only the specified legibility weight trait.
- [init(forceTouchCapability:)](uitraitcollection/init%28forcetouchcapability_%29.md): Creates a trait collection that contains only a specified force touch capability trait.
- [init(displayScale:)](uitraitcollection/init%28displayscale_%29.md): Creates a trait collection that contains only a specified display scale.
- [init(displayGamut:)](uitraitcollection/init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [init(layoutDirection:)](uitraitcollection/init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [init(preferredContentSizeCategory:)](uitraitcollection/init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [init(activeAppearance:)](uitraitcollection/init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [init(toolbarItemPresentationSize:)](uitraitcollection/init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.
- [init(hdrHeadroomUsageLimit:)](uitraitcollection/init%28hdrheadroomusagelimit_%29-5zqph.md)
- [init(imageDynamicRange:)](uitraitcollection/init%28imagedynamicrange_%29.md): Construct a new trait collection with the given image content dynamic range.
- [init(listEnvironment:)](uitraitcollection/init%28listenvironment_%29.md): Construct a new trait collection with the given `listEnvironment`.
- [init(resolvesNaturalAlignmentWithBaseWritingDirection:)](uitraitcollection/init%28resolvesnaturalalignmentwithbasewritingdirection_%29.md)
- [init(sceneCaptureState:)](uitraitcollection/init%28scenecapturestate_%29.md): Construct a new trait collection with the given scene capture state.
- [init(tabAccessoryEnvironment:)](uitraitcollection/init%28tabaccessoryenvironment_%29.md): Constructs a new trait collection with the given `tabAccessoryEnvironment`.
- [init(typesettingLanguage:)](uitraitcollection/init%28typesettinglanguage_%29.md)
- [init(coder:)](uitraitcollection/init%28coder_%29.md): Creates a trait collection from data in an unarchiver.
- [init(traitsFrom:)](uitraitcollection/init%28traitsfrom_%29.md): Deprecated. Creates a trait collection that consists of traits merged from a specified array of trait collections.

### Initializers

- [init(HDRHeadroomUsageLimit:)](uitraitcollection/init%28hdrheadroomusagelimit_%29-3nnko.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-3as8f.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-3fg2.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-4100d.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-48zja.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-4shto.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-4slti.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-55rvq.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-58ia2.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-59di1.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-59u4e.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-6h22m.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-7sd52.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-7toc9.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-836bk.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-8k1t1.md)
- [init(\_:value:)](uitraitcollection/init%28__value_%29-vvgw.md)
- [init(systemPrefersReducedResourceUsage:)](uitraitcollection/init%28systemprefersreducedresourceusage_%29.md)
- [init(traitsFromCollections:)](uitraitcollection/init%28traitsfromcollections_%29.md): Deprecated.

### Instance Properties

- [systemPrefersReducedResourceUsage](uitraitcollection/systemprefersreducedresourceusage-1yl57.md)

### Instance Methods

- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-162et.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-1n0uk.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-1wvrv.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-227ps.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-3p47.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-418p6.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-4c3s8.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-5swjm.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-7jssv.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-8gf97.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-8yat4.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-8z10u.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-8z152.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-8zl00.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-9op5s.md)
- [replacing(\_:value:)](uitraitcollection/replacing%28__value_%29-o6qa.md)

### Subscripts

- [subscript(\_:)](uitraitcollection/subscript%28__%29-10ujz.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-1kkve.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-1n030.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-2bvk.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-32r6h.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-3ztj.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-43in7.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-4gjs6.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-4zpi4.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-5wwet.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-6cdgq.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-6jr9c.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-8rqo4.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-90z0t.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-96v58.md)
- [subscript(\_:)](uitraitcollection/subscript%28__%29-9nfd8.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adaptivity

- [UITraitEnvironment](uitraitenvironment.md): A set of methods that makes the iOS interface environment available to your app.
- [Automatic trait tracking](automatic-trait-tracking.md): Reduce the need to manually register for trait changes when you use traits within a method or closure that supports automatic trait tracking.
- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md): A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.
- [UIContentContainer](uicontentcontainer.md): A set of methods for adapting the contents of your view controllers to size and trait changes.

# UITraitCollection (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A collection of data that represents the environment for an individual element in your app’s user interface.

## Declaration

```objectivec
@interface UITraitCollection : NSObject
```

## Mentioned In

- [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md)
- [Building a desktop-class iPad app](building-a-desktop-class-ipad-app.md)
- [Displaying and managing views with a view controller](displaying-and-managing-views-with-a-view-controller.md)

<a id="overview"></a>

## Overview

The [traitCollection](uitraitenvironment/traitcollection.md) property of the [UITraitEnvironment](uitraitenvironment.md) protocol contains traits that describe the state of various elements of the iOS user interface, such as size class, display scale, and layout direction. Together, these traits compose the UIKit trait environment.

The following classes adopt [UITraitEnvironment](uitraitenvironment.md): [UIScreen](uiscreen.md), [UIWindow](uiwindow.md), [UIWindowScene](uiwindowscene.md), [UIViewController](uiviewcontroller.md), [UIPresentationController](uipresentationcontroller.md), and [UIView](uiview.md). To create an adaptive interface, write code to adjust your app’s layout according to changes in these traits. You access specific trait values using the [UITraitCollection](uitraitcollection.md) [horizontalSizeClass](uitraitcollection/horizontalsizeclass.md), [verticalSizeClass](uitraitcollection/verticalsizeclass.md), [displayScale](uitraitcollection/displayscale.md), [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md), and other properties.

To make your view controllers and views responsive to changes in the iOS interface environment, use automatic trait tracking in supported [UIViewController](uiviewcontroller.md) and [UIView](uiview.md) methods, or register to track specific trait changes with [UITraitChangeObservable](uitraitchangeobservable-67e94.md) methods. For more information, see [Adapting your app when traits change](adapting-your-app-when-traits-change.md).

To customize view controller animations in response to interface environment changes, override the [willTransitionToTraitCollection:withTransitionCoordinator:](uicontentcontainer/willtransition%28to_with_%29.md) method of the [UIContentContainer](uicontentcontainer.md) protocol.

For more information about the horizontal (width) and vertical (height) size classes your app can encounter when running full-screen on various devices, see Human Interface Guidelines \> [Layout](https://developer.apple.com/design/human-interface-guidelines/layout).

You can create standalone trait collections to assist in matching against specific environments. The [UITraitCollection](uitraitcollection.md) class includes four specialized constructors, as well as a constructor that enables you to combine an array of trait collections, [traitCollectionWithTraitsFromCollections:](uitraitcollection/init%28traitsfrom_%29.md).

One important use of standalone trait collections is to enable conditional use of images based on the current iOS interface environment. You can associate a trait collection with a [UIImage](uiimage.md) instance by way of a [UIImageAsset](uiimageasset.md) instance, as described in the overview section of [UIImageAsset](uiimageasset.md). For information on configuring asset catalogs graphically from within the Xcode IDE, see [Managing assets with asset catalogs](https://developer.apple.com/documentation/xcode/managing-assets-with-asset-catalogs).

You can employ a standalone trait collection to enable a two-column split view in landscape orientation on iPhone. See the [setOverrideTraitCollection:forChildViewController:](uiviewcontroller/setoverridetraitcollection%28__forchild_%29.md) method of the [UIViewController](uiviewcontroller.md) class.

You can also use a standalone trait collection to customize view appearance with the [appearanceForTraitCollection:](uiappearance/appearance%28for_%29.md) protocol method, as described in [UIAppearance](uiappearance.md).

For information on creating custom traits, see [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md).

## Topics

### Getting the current traits

- [currentTraitCollection](uitraitcollection/current.md): The trait collection for the current execution context.

### Getting related traits

- [systemTraitsAffectingColorAppearance](uitraitcollection/systemtraitsaffectingcolorappearance-18zhm.md)
- [systemTraitsAffectingImageLookup](uitraitcollection/systemtraitsaffectingimagelookup-640w8.md)

### Modifying traits

- [traitCollectionWithTraits:](uitraitcollection/traitcollectionwithtraits_.md)
- [traitCollectionByModifyingTraits:](uitraitcollection/traitcollectionbymodifyingtraits_.md)
- [UITraitMutations](uitraitmutations.md)

### Comparing trait collections

- [hasDifferentColorAppearanceComparedToTraitCollection:](uitraitcollection/hasdifferentcolorappearance%28comparedto_%29.md): Queries whether changing between the specified and current trait collections would affect color values.
- [containsTraitsInCollection:](uitraitcollection/containstraits%28in_%29.md): Deprecated. Queries whether a trait collection contains all of another trait collection’s values.

### Performing actions with the current traits

- [performAsCurrentTraitCollection:](uitraitcollection/performascurrent%28__%29.md): Executes custom code using the traits of the receiving trait collection.

### Retrieving size class traits

- [horizontalSizeClass](uitraitcollection/horizontalsizeclass.md): The horizontal size class of the trait collection.
- [verticalSizeClass](uitraitcollection/verticalsizeclass.md): The vertical size class of the trait collection.
- [UIUserInterfaceSizeClass](uiuserinterfacesizeclass.md): Constants that indicate the size class of a view.

### Retrieving display-related traits

- [displayScale](uitraitcollection/displayscale.md): The display scale of the trait collection.
- [displayGamut](uitraitcollection/displaygamut.md): The gamut of the current display.
- [UIDisplayGamut](uidisplaygamut.md): Constants that indicate the gamut of the current display.

### Retrieving interface-related traits

- [userInterfaceStyle](uitraitcollection/userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](uitraitcollection/userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](uitraitcollection/layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](uitraitcollection/resolvesnaturalalignmentwithbasewritingdirection-97osy.md): Specifies the behavior for resolving `NSTextAlignment.natural` to the visual alignment.
- [accessibilityContrast](uitraitcollection/accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.
- [UINSToolbarItemPresentationSize](uinstoolbaritempresentationsize.md): Constants that specify the presentation size of a toolbar item in an AppKit toolbar.
- [hdrHeadroomUsageLimit](uitraitcollection/hdrheadroomusagelimit.md): If HDR headroom should be used for the current UI configuration. Headroom usage is disabled in certain UI configurations, such as when all an application’s windows are in the background.
- [UIHDRHeadroomUsageLimit](uihdrheadroomusagelimit.md)

### Retrieving the force touch capability traits

- [forceTouchCapability](uitraitcollection/forcetouchcapability.md): The force touch capability value of the trait collection.
- [UIForceTouchCapability](uiforcetouchcapability.md): Keys that indicate the availability of 3D Touch on a device.

### Retrieving content size category information

- [preferredContentSizeCategory](uitraitcollection/preferredcontentsizecategory.md): The font sizing option preferred by the user.
- [UIContentSizeCategory](uicontentsizecategory.md): Constants that indicate the preferred size of your content.
- [UIContentSizeCategoryCompareToCategory](uicontentsizecategorycomparetocategory.md): Compares two content size category values to determine whether they are equal or whether one is larger than the other.
- [UIContentSizeCategoryIsAccessibilityCategory](uicontentsizecategoryisaccessibilitycategory.md): Returns a Boolean value that indicates whether the content size category belongs to the group of accessibility-related sizes.

### Retrieving layout environment traits

- [listEnvironment](uitraitcollection/listenvironment.md): The list environment represents whether a given trait collection is from a view in a UITableView or a UICollectionView list section.
- [UIListEnvironment](uilistenvironment.md): Constants that indicate the style of the containing list in a collection view or table view.
- [splitViewControllerLayoutEnvironment](uitraitcollection/splitviewcontrollerlayoutenvironment.md): The split view controller layout environment represents whether an ancestor split view controller is expanded or collapsed.
- [UISplitViewControllerLayoutEnvironment](uisplitviewcontroller/layoutenvironment.md): Constants that indicate the current layout of the containing split view controller.
- [tabAccessoryEnvironment](uitraitcollection/tabaccessoryenvironment.md): The tab accessory environment represents whether a given trait collection is from a view in a `UITabAccessory` content view.
- [UITabAccessoryEnvironment](uitabaccessory/environment.md)

### Retrieving scene capture state

- [sceneCaptureState](uitraitcollection/scenecapturestate.md): Scene capture state represents whether a scene is currently being mirrored or recorded.
- [UISceneCaptureState](uiscenecapturestate.md)

### Retrieving dynamic range traits

- [imageDynamicRange](uitraitcollection/imagedynamicrange.md): The imageDynamicRange determines how HDR images will render in the given trait environment. SDR images are unaffected.

### Retrieving typesetting language traits

- [typesettingLanguage](uitraitcollection/typesettinglanguage-1n1fs.md)

### Getting an image configuration object

- [imageConfiguration](uitraitcollection/imageconfiguration.md): An image configuration object compatible with this trait collection.

### Creating a trait collection

- [init](uitraitcollection/init%28%29.md): Creates a trait collection whose traits are set to their default (unspecified) values.
- [traitCollectionWithUserInterfaceIdiom:](uitraitcollection/init%28userinterfaceidiom_%29.md): Creates a trait collection that contains only a specified interface idiom.
- [traitCollectionWithHorizontalSizeClass:](uitraitcollection/init%28horizontalsizeclass_%29.md): Creates a trait collection that contains only a specified horizontal size class.
- [traitCollectionWithVerticalSizeClass:](uitraitcollection/init%28verticalsizeclass_%29.md): Creates a trait collection that contains only a specified vertical size class.
- [traitCollectionWithUserInterfaceStyle:](uitraitcollection/init%28userinterfacestyle_%29.md): Creates a trait collection that contains only the specified user interface style trait.
- [traitCollectionWithAccessibilityContrast:](uitraitcollection/init%28accessibilitycontrast_%29.md): Creates a trait collection that contains only the specified accessibility contrast trait.
- [traitCollectionWithUserInterfaceLevel:](uitraitcollection/init%28userinterfacelevel_%29.md): Creates a trait collection that contains only the specified user interface level trait.
- [traitCollectionWithLegibilityWeight:](uitraitcollection/init%28legibilityweight_%29.md): Creates a trait collection that contains only the specified legibility weight trait.
- [traitCollectionWithForceTouchCapability:](uitraitcollection/init%28forcetouchcapability_%29.md): Creates a trait collection that contains only a specified force touch capability trait.
- [traitCollectionWithDisplayScale:](uitraitcollection/init%28displayscale_%29.md): Creates a trait collection that contains only a specified display scale.
- [traitCollectionWithDisplayGamut:](uitraitcollection/init%28displaygamut_%29.md): Creates a trait collection that contains only the specified display gamut trait.
- [traitCollectionWithLayoutDirection:](uitraitcollection/init%28layoutdirection_%29.md): Creates a trait collection that contains only the specified layout direction trait.
- [traitCollectionWithPreferredContentSizeCategory:](uitraitcollection/init%28preferredcontentsizecategory_%29.md): Creates a trait collection that contains only the specified content size category trait.
- [traitCollectionWithActiveAppearance:](uitraitcollection/init%28activeappearance_%29.md): Creates a trait collection that contains only the specified active appearance trait.
- [traitCollectionWithToolbarItemPresentationSize:](uitraitcollection/init%28toolbaritempresentationsize_%29.md): Creates a trait collection that contains only the specified toolbar item presentation size trait.
- [traitCollectionWithHDRHeadroomUsageLimit:](uitraitcollection/init%28hdrheadroomusagelimit_%29-5zqph.md)
- [traitCollectionWithImageDynamicRange:](uitraitcollection/init%28imagedynamicrange_%29.md): Construct a new trait collection with the given image content dynamic range.
- [traitCollectionWithListEnvironment:](uitraitcollection/init%28listenvironment_%29.md): Construct a new trait collection with the given `listEnvironment`.
- [traitCollectionWithSceneCaptureState:](uitraitcollection/init%28scenecapturestate_%29.md): Construct a new trait collection with the given scene capture state.
- [traitCollectionWithTabAccessoryEnvironment:](uitraitcollection/init%28tabaccessoryenvironment_%29.md): Constructs a new trait collection with the given `tabAccessoryEnvironment`.
- [initWithCoder:](uitraitcollection/init%28coder_%29.md): Creates a trait collection from data in an unarchiver.
- [traitCollectionWithTraitsFromCollections:](uitraitcollection/init%28traitsfrom_%29.md): Deprecated. Creates a trait collection that consists of traits merged from a specified array of trait collections.

### Instance Properties

- [systemPrefersReducedResourceUsage](uitraitcollection/systemprefersreducedresourceusage-4szzj.md): A Boolean value that indicates whether the system prefers that the app reduce its resource usage.

### Instance Methods

- [changedTraitsFromTraitCollection:](uitraitcollection/changedtraitsfromtraitcollection_.md)
- [objectForTrait:](uitraitcollection/objectfortrait_.md)
- [traitCollectionByReplacingCGFloatValue:forTrait:](uitraitcollection/traitcollectionbyreplacingcgfloatvalue_fortrait_.md)
- [traitCollectionByReplacingNSIntegerValue:forTrait:](uitraitcollection/traitcollectionbyreplacingnsintegervalue_fortrait_.md)
- [traitCollectionByReplacingObject:forTrait:](uitraitcollection/traitcollectionbyreplacingobject_fortrait_.md)
- [valueForCGFloatTrait:](uitraitcollection/valueforcgfloattrait_.md)
- [valueForNSIntegerTrait:](uitraitcollection/valuefornsintegertrait_.md)

### Type Methods

- [traitCollectionWithCGFloatValue:forTrait:](uitraitcollection/traitcollectionwithcgfloatvalue_fortrait_.md)
- [traitCollectionWithNSIntegerValue:forTrait:](uitraitcollection/traitcollectionwithnsintegervalue_fortrait_.md)
- [traitCollectionWithObject:forTrait:](uitraitcollection/traitcollectionwithobject_fortrait_.md)
- [traitCollectionWithResolvesNaturalAlignmentWithBaseWritingDirection:](uitraitcollection/traitcollectionwithresolvesnaturalalignmentwithbasewritingdirection_.md)
- [traitCollectionWithSystemPrefersReducedResourceUsage:](uitraitcollection/traitcollectionwithsystemprefersreducedresourceusage_.md)
- [traitCollectionWithTypesettingLanguage:](uitraitcollection/traitcollectionwithtypesettinglanguage_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Adaptivity

- [UITraitEnvironment](uitraitenvironment.md): A set of methods that makes the iOS interface environment available to your app.
- [Automatic trait tracking](automatic-trait-tracking.md): Reduce the need to manually register for trait changes when you use traits within a method or closure that supports automatic trait tracking.
- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md): A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.
- [UIContentContainer](uicontentcontainer.md): A set of methods for adapting the contents of your view controllers to size and trait changes.
