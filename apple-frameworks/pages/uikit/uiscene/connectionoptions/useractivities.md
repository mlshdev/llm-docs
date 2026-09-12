> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/useractivities](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/useractivities)

# userActivities (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about user activities that you can use to configure your scene’s interface.

## Declaration

```swift
var userActivities: Set<NSUserActivity> { get }
```

<a id="Discussion"></a>

## Discussion

If this property contains one or more [NSUserActivity](../../../foundation/nsuseractivity.md) objects, use those objects to configure your scene’s interface when the scene connects. These activity objects represent the user activities that are available at the time the scene connects, like from search results, other apps, or [requestSceneSessionActivation(\_:userActivity:options:errorHandler:)](../../uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md). For example, if the user was browsing a web page, an activity object might contain the URL of that page.

This property doesn’t contain user activity objects related to Handoff. At connection time, UIKit delivers only the type of a Handoff interaction in the [handoffUserActivityType](handoffuseractivitytype.md) property. Later, it calls additional methods of [UISceneDelegate](../../uiscenedelegate.md) to deliver the [NSUserActivity](../../../foundation/nsuseractivity.md) object itself.

# userActivities (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Information about user activities that you can use to configure your scene’s interface.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSUserActivity *> * userActivities;
```

<a id="Discussion"></a>

## Discussion

If this property contains one or more [NSUserActivity](../../../foundation/nsuseractivity.md) objects, use those objects to configure your scene’s interface when the scene connects. These activity objects represent the user activities that are available at the time the scene connects, like from search results, other apps, or [requestSceneSessionActivation:userActivity:options:errorHandler:](../../uiapplication/requestscenesessionactivation%28__useractivity_options_errorhandler_%29.md). For example, if the user was browsing a web page, an activity object might contain the URL of that page.

This property doesn’t contain user activity objects related to Handoff. At connection time, UIKit delivers only the type of a Handoff interaction in the [handoffUserActivityType](handoffuseractivitytype.md) property. Later, it calls additional methods of [UISceneDelegate](../../uiscenedelegate.md) to deliver the [NSUserActivity](../../../foundation/nsuseractivity.md) object itself.
