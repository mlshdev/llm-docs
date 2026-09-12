> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/systemprefersreducedresourceusagedidchangenotification](https://developer.apple.com/documentation/uikit/uiapplication/systemprefersreducedresourceusagedidchangenotification)

# systemPrefersReducedResourceUsageDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A notification that posts when [systemPrefersReducedResourceUsage](systemprefersreducedresourceusage.md) changes.

## Declaration

```swift
nonisolated class let systemPrefersReducedResourceUsageDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The object of the notification is the `UIApplication` object. The `userInfo` dictionary is empty. Re-read `systemPrefersReducedResourceUsage` to get the new value.

Use this notification to re-read the value and adjust the scheduling of future work, the same way the property is read proactively. Avoid performing or scheduling expensive work directly in the handler, as this could worsen resource usage.

# UIApplicationSystemPrefersReducedResourceUsageDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A notification that posts when [systemPrefersReducedResourceUsage](systemprefersreducedresourceusage.md) changes.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationSystemPrefersReducedResourceUsageDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

The object of the notification is the `UIApplication` object. The `userInfo` dictionary is empty. Re-read `systemPrefersReducedResourceUsage` to get the new value.

Use this notification to re-read the value and adjust the scheduling of future work, the same way the property is read proactively. Avoid performing or scheduling expensive work directly in the handler, as this could worsen resource usage.
