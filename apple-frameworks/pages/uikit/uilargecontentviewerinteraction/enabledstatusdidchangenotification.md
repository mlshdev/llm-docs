> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteraction/enabledstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction/enabledstatusdidchangenotification)

# enabledStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification the system posts when it enables or disables the large content viewer.

## Declaration

```swift
nonisolated class let enabledStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Observe this notification to know whether to enable or disable your custom interaction behaviors. For example, if you add an interaction to a button that needs to cooperate with other gesture recognizers when the large content viewer settings are enabled. This notification lets you enable or disable the interaction accordingly.

## See Also

### Detecting the large content viewer

- [isEnabled](isenabled.md): A Boolean value that indicates whether the large content viewer is enabled on the device.

# UILargeContentViewerInteractionEnabledStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification the system posts when it enables or disables the large content viewer.

## Declaration

```objectivec
extern NSNotificationName const UILargeContentViewerInteractionEnabledStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Observe this notification to know whether to enable or disable your custom interaction behaviors. For example, if you add an interaction to a button that needs to cooperate with other gesture recognizers when the large content viewer settings are enabled. This notification lets you enable or disable the interaction accordingly.

## See Also

### Detecting the large content viewer

- [enabled](isenabled.md): A Boolean value that indicates whether the large content viewer is enabled on the device.
