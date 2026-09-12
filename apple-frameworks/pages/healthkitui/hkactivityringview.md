> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkitui/hkactivityringview](https://developer.apple.com/documentation/healthkitui/hkactivityringview)

# HKActivityRingView (Swift)

**Framework:** HealthKitUI  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · visionOS 1.0+

A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.

## Declaration

```swift
class HKActivityRingView
```

## Mentioned In

- [Executing Activity Summary Queries](../healthkit/executing-activity-summary-queries.md)

<a id="overview"></a>

## Overview

Use [HKActivityRingView](hkactivityringview.md) to display data from an [HKActivitySummary](../healthkit/hkactivitysummary.md) object. For example, the following image shows how the rings can display a summary view of a person’s activity.

![Two partially filled and one completely filled colored concentric rings on a black background.](https://developer.apple.com/images/com.apple.healthkit/media-1965751@2x.png)

To display activity summary data from the HealthKit store, use an [HKActivitySummaryQuery](../healthkit/hkactivitysummaryquery.md) object. You can also instantiate and display your own [HKActivitySummary](../healthkit/hkactivitysummary.md) objects, as needed.

The activity ring view always appears as a black rectangle with colored concentric rings. The rings are centered in the view and are sized to fit the available space.

![Two partially filled and one completely filled colored concentric rings centered on a black rectangle background.](https://developer.apple.com/images/com.apple.healthkit/media-1965753@2x.png)

The activity ring view displays different rings depending on the properties defined in the ring view’s [HKActivitySummary](../healthkit/hkactivitysummary.md) property. When the view’s [HKActivitySummary](../healthkit/hkactivitysummary.md) has [activityMoveMode](../healthkit/hkactivitymovemodeobject/activitymovemode.md) set to [appleMoveTime](../healthkit/hkactivitysummary/applemovetime.md) and `nil` values for [appleExerciseTimeGoal](../healthkit/hkactivitysummary/appleexercisetimegoal.md) and [appleStandHoursGoal](../healthkit/hkactivitysummary/applestandhoursgoal.md) the ring only displays the red Move ring. Otherwise, it displays the Move, Exercise, and Stand activity as red, green, and blue concentric rings. Summary data from the HealthKit store only displays the Move ring when the person hasn’t paired an Apple Watch.

The rings can display as either empty or with a dot at the top of the ring to display a lack of data. Empty rings indicate that the activity summary is missing, and a dot at the top indicates that the activity summary’s values are set to zero.

If the ring has a `nil`-valued `activitySummary` quantity properties, the rings appear empty. Use this to indicate that there is no summary data available for the specified day. For example, dates in the future.

![Three dimly colored concentric rings.](https://developer.apple.com/images/com.apple.healthkit/media-2556410@2x.png)

If the summary has zero-valued quantities set for its value properties, the ring displays a dot at the top of the ring. Use this to indicate that the person hasn’t burned any active calories, exercised, or earned any stand hours for the specified day.

![Three dimly colored concentric rings with a bright dot at the top of each ring.](https://developer.apple.com/images/com.apple.healthkit/media-2556419@2x.png)

To display data for a ring, the [HKActivitySummary](../healthkit/hkactivitysummary.md) object must have a non-`nil` quantity for both the corresponding value property and the goal property.

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [activeEnergyBurned](../healthkit/hkactivitysummary/activeenergyburned.md) | [activeEnergyBurnedGoal](../healthkit/hkactivitysummary/activeenergyburnedgoal.md) |
| Exercise | [appleExerciseTime](../healthkit/hkactivitysummary/appleexercisetime.md) | [appleExerciseTimeGoal](../healthkit/hkactivitysummary/appleexercisetimegoal.md) |
| Stand | [appleStandHours](../healthkit/hkactivitysummary/applestandhours.md) | [appleStandHoursGoal](../healthkit/hkactivitysummary/applestandhoursgoal.md) |

Move only ring properties:

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [appleMoveTime](../healthkit/hkactivitysummary/applemovetime.md) \| [activeEnergyBurned](../healthkit/hkactivitysummary/activeenergyburned.md) | [appleMoveTimeGoal](../healthkit/hkactivitysummary/applemovetimegoal.md) \| [activeEnergyBurnedGoal](../healthkit/hkactivitysummary/activeenergyburnedgoal.md) |

The activity ring view colors a percentage of each ring based on these properties, as shown here:

```objc
ring percent = value property quantity / goal property quantity
```

![One partially filled colored concentric ring on a black background.](https://developer.apple.com/images/com.apple.healthkit/single-ring@2x.png)

The following code snippet shows how to manually display only the Move ring:

```swift
let moveOnlySummary = HKActivitySummary()
moveOnlySummary.activityMoveMode = .appleMoveTime
moveOnlySummary.appleMoveTime = HKQuantity(unit: .minute(), doubleValue: 60.0)
moveOnlySummary.appleMoveTimeGoal = HKQuantity(unit: .minute(), doubleValue: 90.0)
```

## Topics

### Setting the activity summary

- [activitySummary](hkactivityringview/activitysummary.md): The active summary displayed by the activity ring view.
- [setActivitySummary(\_:animated:)](hkactivityringview/setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

# HKActivityRingView (Objective-C)

**Framework:** HealthKitUI  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · visionOS 1.0+

A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.

## Declaration

```objectivec
@interface HKActivityRingView : UIView
```

## Mentioned In

- [Executing Activity Summary Queries](../healthkit/executing-activity-summary-queries.md)

<a id="overview"></a>

## Overview

Use [HKActivityRingView](hkactivityringview.md) to display data from an [HKActivitySummary](../healthkit/hkactivitysummary.md) object. For example, the following image shows how the rings can display a summary view of a person’s activity.

![Two partially filled and one completely filled colored concentric rings on a black background.](https://developer.apple.com/images/com.apple.healthkit/media-1965751@2x.png)

To display activity summary data from the HealthKit store, use an [HKActivitySummaryQuery](../healthkit/hkactivitysummaryquery.md) object. You can also instantiate and display your own [HKActivitySummary](../healthkit/hkactivitysummary.md) objects, as needed.

The activity ring view always appears as a black rectangle with colored concentric rings. The rings are centered in the view and are sized to fit the available space.

![Two partially filled and one completely filled colored concentric rings centered on a black rectangle background.](https://developer.apple.com/images/com.apple.healthkit/media-1965753@2x.png)

The activity ring view displays different rings depending on the properties defined in the ring view’s [HKActivitySummary](../healthkit/hkactivitysummary.md) property. When the view’s [HKActivitySummary](../healthkit/hkactivitysummary.md) has [activityMoveMode](../healthkit/hkactivitymovemodeobject/activitymovemode.md) set to [appleMoveTime](../healthkit/hkactivitysummary/applemovetime.md) and `nil` values for [appleExerciseTimeGoal](../healthkit/hkactivitysummary/appleexercisetimegoal.md) and [appleStandHoursGoal](../healthkit/hkactivitysummary/applestandhoursgoal.md) the ring only displays the red Move ring. Otherwise, it displays the Move, Exercise, and Stand activity as red, green, and blue concentric rings. Summary data from the HealthKit store only displays the Move ring when the person hasn’t paired an Apple Watch.

The rings can display as either empty or with a dot at the top of the ring to display a lack of data. Empty rings indicate that the activity summary is missing, and a dot at the top indicates that the activity summary’s values are set to zero.

If the ring has a `nil`-valued `activitySummary` quantity properties, the rings appear empty. Use this to indicate that there is no summary data available for the specified day. For example, dates in the future.

![Three dimly colored concentric rings.](https://developer.apple.com/images/com.apple.healthkit/media-2556410@2x.png)

If the summary has zero-valued quantities set for its value properties, the ring displays a dot at the top of the ring. Use this to indicate that the person hasn’t burned any active calories, exercised, or earned any stand hours for the specified day.

![Three dimly colored concentric rings with a bright dot at the top of each ring.](https://developer.apple.com/images/com.apple.healthkit/media-2556419@2x.png)

To display data for a ring, the [HKActivitySummary](../healthkit/hkactivitysummary.md) object must have a non-`nil` quantity for both the corresponding value property and the goal property.

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [activeEnergyBurned](../healthkit/hkactivitysummary/activeenergyburned.md) | [activeEnergyBurnedGoal](../healthkit/hkactivitysummary/activeenergyburnedgoal.md) |
| Exercise | [appleExerciseTime](../healthkit/hkactivitysummary/appleexercisetime.md) | [appleExerciseTimeGoal](../healthkit/hkactivitysummary/appleexercisetimegoal.md) |
| Stand | [appleStandHours](../healthkit/hkactivitysummary/applestandhours.md) | [appleStandHoursGoal](../healthkit/hkactivitysummary/applestandhoursgoal.md) |

Move only ring properties:

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [appleMoveTime](../healthkit/hkactivitysummary/applemovetime.md) \| [activeEnergyBurned](../healthkit/hkactivitysummary/activeenergyburned.md) | [appleMoveTimeGoal](../healthkit/hkactivitysummary/applemovetimegoal.md) \| [activeEnergyBurnedGoal](../healthkit/hkactivitysummary/activeenergyburnedgoal.md) |

The activity ring view colors a percentage of each ring based on these properties, as shown here:

```objc
ring percent = value property quantity / goal property quantity
```

![One partially filled colored concentric ring on a black background.](https://developer.apple.com/images/com.apple.healthkit/single-ring@2x.png)

The following code snippet shows how to manually display only the Move ring:

```swift
let moveOnlySummary = HKActivitySummary()
moveOnlySummary.activityMoveMode = .appleMoveTime
moveOnlySummary.appleMoveTime = HKQuantity(unit: .minute(), doubleValue: 60.0)
moveOnlySummary.appleMoveTimeGoal = HKQuantity(unit: .minute(), doubleValue: 90.0)
```

## Topics

### Setting the activity summary

- [activitySummary](hkactivityringview/activitysummary.md): The active summary displayed by the activity ring view.
- [setActivitySummary:animated:](hkactivityringview/setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)
