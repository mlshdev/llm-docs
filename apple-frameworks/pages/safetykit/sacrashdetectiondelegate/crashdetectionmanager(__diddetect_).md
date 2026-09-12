> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/sacrashdetectiondelegate/crashdetectionmanager(_:diddetect:)](https://developer.apple.com/documentation/safetykit/sacrashdetectiondelegate/crashdetectionmanager(_:diddetect:))

# crashDetectionManager(\_:didDetect:) (Swift)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Receive and process a Crash Detection event.

## Declaration

```swift
optional func crashDetectionManager(_ crashDetectionManager: SACrashDetectionManager, didDetect event: SACrashDetectionEvent)
```

## Parameters

- `crashDetectionManager`: The Crash Detection manager that detected the event.
- `event`: The Crash Detection event.

<a id="Discussion"></a>

## Discussion

To receive Crash Detection events, create a new [SACrashDetectionManager](../sacrashdetectionmanager.md) instance and set its delegate early in the app life cycle, such as [applicationDidFinishLaunching(\_:)](../../uikit/uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

> **Important**

>  Use the iOS Simulator to test Crash Detection events and the background functionality of your app.

Following a Crash Detection event, the system launches the app in the background. When the app launches, it performs critical tasks related to the Crash Detection event, such as placing a network request or scheduling a local notification. If the system generates multiple Crash Detection events while the app isn’t running, it reports the most recent event on the next app launch. The system may report the same Crash Detection event across different launches of your app, so always check [date](../sacrashdetectionevent/date.md) before processing it.

# crashDetectionManager:didDetectEvent: (Objective-C)

**Framework:** SafetyKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

Receive and process a Crash Detection event.

## Declaration

```objectivec
- (void) crashDetectionManager:(SACrashDetectionManager *) crashDetectionManager didDetectEvent:(SACrashDetectionEvent *) event;
```

## Parameters

- `crashDetectionManager`: The Crash Detection manager that detected the event.
- `event`: The Crash Detection event.

<a id="Discussion"></a>

## Discussion

To receive Crash Detection events, create a new [SACrashDetectionManager](../sacrashdetectionmanager.md) instance and set its delegate early in the app life cycle, such as [applicationDidFinishLaunching:](../../uikit/uiapplicationdelegate/applicationdidfinishlaunching%28__%29.md).

> **Important**

>  Use the iOS Simulator to test Crash Detection events and the background functionality of your app.

Following a Crash Detection event, the system launches the app in the background. When the app launches, it performs critical tasks related to the Crash Detection event, such as placing a network request or scheduling a local notification. If the system generates multiple Crash Detection events while the app isn’t running, it reports the most recent event on the next app launch. The system may report the same Crash Detection event across different launches of your app, so always check [date](../sacrashdetectionevent/date.md) before processing it.
