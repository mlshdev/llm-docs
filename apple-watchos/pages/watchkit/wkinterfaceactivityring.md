> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceactivityring](https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring)

# WKInterfaceActivityRing (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.2+

A view that displays data from a HealthKit activity summary object.

## Declaration

```swift
class WKInterfaceActivityRing
```

<a id="overview"></a>

## Overview

The [WKInterfaceActivityRing](wkinterfaceactivityring.md) view displays data from an [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) object, using the Move, Exercise, and Stand activity rings (see [Figure 1](wkinterfaceactivityring.md#1965772)).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965772@2x.png)

The activity ring view always appears as a black rectangle with red, green, and blue concentric rings. The rings are centered in the view, and sized to fit the available space (see [Figure 2](wkinterfaceactivityring.md#1965773)).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965773@2x.png)

The rings have two different ways to display a lack of data. One indicates that the activity summary is missing, and the other indicates that the activity summary’s values are set to zero. If the ring has a `nil`-valued `activitySummary` property, the rings appear empty (see See [Figure 3](wkinterfaceactivityring.md#1965774)). Use this to indicate that there is no summary data available for the specified day (for example, dates in the future).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965774@2x.png)

If the summary has zero-valued quantities set for its value properties,  the ring displays a dot at the top of the ring (see [Figure 4](wkinterfaceactivityring.md#1965776)). Use this to indicate that the user has not yet burned any active calories, exercised, or earned any stand hours for the specified day.

![](https://developer.apple.com/images/com.apple.watchkit/media-1965776@2x.png)

To display activity summary data from the HealthKit store, use an [HKActivitySummaryQuery](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquery) object. You can also instantiate and display your own [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) objects, as needed.

To display data for a ring, the [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) object must have a non-`nil` quantity for both the corresponding value property and goal property (see the following table).

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [activeEnergyBurned](https://developer.apple.com/documentation/healthkit/hkactivitysummary/activeenergyburned) | [activeEnergyBurnedGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/activeenergyburnedgoal) |
| Exercise | [appleExerciseTime](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetime) | [appleExerciseTimeGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetimegoal) |
| Stand | [appleStandHours](https://developer.apple.com/documentation/healthkit/hkactivitysummary/applestandhours) | [appleStandHoursGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/applestandhoursgoal) |

The activity ring view colors a percentage of each ring based on these properties, as shown here:

```objc
ring percent = value property quantity / goal property quantity
```

## Topics

### Setting the Activity Summary

- [setActivitySummary(\_:animated:)](wkinterfaceactivityring/setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.

### Initializing for SwiftUI

- [init()](wkinterfaceactivityring/init%28%29.md): Creates an activity ring view for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.

# WKInterfaceActivityRing (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.2+

A view that displays data from a HealthKit activity summary object.

## Declaration

```objectivec
@interface WKInterfaceActivityRing : WKInterfaceObject
```

<a id="overview"></a>

## Overview

The [WKInterfaceActivityRing](wkinterfaceactivityring.md) view displays data from an [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) object, using the Move, Exercise, and Stand activity rings (see [Figure 1](wkinterfaceactivityring.md#1965772)).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965772@2x.png)

The activity ring view always appears as a black rectangle with red, green, and blue concentric rings. The rings are centered in the view, and sized to fit the available space (see [Figure 2](wkinterfaceactivityring.md#1965773)).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965773@2x.png)

The rings have two different ways to display a lack of data. One indicates that the activity summary is missing, and the other indicates that the activity summary’s values are set to zero. If the ring has a `nil`-valued `activitySummary` property, the rings appear empty (see See [Figure 3](wkinterfaceactivityring.md#1965774)). Use this to indicate that there is no summary data available for the specified day (for example, dates in the future).

![](https://developer.apple.com/images/com.apple.watchkit/media-1965774@2x.png)

If the summary has zero-valued quantities set for its value properties,  the ring displays a dot at the top of the ring (see [Figure 4](wkinterfaceactivityring.md#1965776)). Use this to indicate that the user has not yet burned any active calories, exercised, or earned any stand hours for the specified day.

![](https://developer.apple.com/images/com.apple.watchkit/media-1965776@2x.png)

To display activity summary data from the HealthKit store, use an [HKActivitySummaryQuery](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquery) object. You can also instantiate and display your own [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) objects, as needed.

To display data for a ring, the [HKActivitySummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary) object must have a non-`nil` quantity for both the corresponding value property and goal property (see the following table).

| Ring | Value property | Goal property |
| --- | --- | --- |
| Move | [activeEnergyBurned](https://developer.apple.com/documentation/healthkit/hkactivitysummary/activeenergyburned) | [activeEnergyBurnedGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/activeenergyburnedgoal) |
| Exercise | [appleExerciseTime](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetime) | [appleExerciseTimeGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetimegoal) |
| Stand | [appleStandHours](https://developer.apple.com/documentation/healthkit/hkactivitysummary/applestandhours) | [appleStandHoursGoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/applestandhoursgoal) |

The activity ring view colors a percentage of each ring based on these properties, as shown here:

```objc
ring percent = value property quantity / goal property quantity
```

## Topics

### Setting the Activity Summary

- [setActivitySummary:animated:](wkinterfaceactivityring/setactivitysummary%28__animated_%29.md): Sets the activity summary displayed by the activity ring view.

### Initializing for SwiftUI

- [init](wkinterfaceactivityring/init%28%29.md): Creates an activity ring view for use in SwiftUI.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Controls

- [WKInterfaceLabel](wkinterfacelabel.md): An interface element that displays static text.
- [WKInterfaceDate](wkinterfacedate.md): A label that displays the current date or time.
- [WKInterfaceTimer](wkinterfacetimer.md): A label that displays a countdown or count-up timer.
- [WKInterfaceButton](wkinterfacebutton.md): A button in the user interface of your watchOS app.
- [WKInterfaceAuthorizationAppleIDButton](wkinterfaceauthorizationappleidbutton.md): A button that you can use to trigger a Sign in with Apple request.
- [WKInterfacePaymentButton](wkinterfacepaymentbutton.md): A button that you can use to trigger payments through Apple Pay.
- [WKInterfaceTextField](wkinterfacetextfield.md): An interface element that displays an editable text area.
- [WKInterfaceSwitch](wkinterfaceswitch.md): An interface element that toggles between an On and Off state.
- [WKInterfaceSlider](wkinterfaceslider.md): An interface element that lets users select a single floating-point value from a range of values.
- [WKInterfaceMap](wkinterfacemap.md): An interface element that displays a noninteractive map for the location you specify.
