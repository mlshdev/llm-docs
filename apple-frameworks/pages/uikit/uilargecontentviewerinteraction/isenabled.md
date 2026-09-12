> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteraction/isenabled](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the large content viewer is enabled on the device.

## Declaration

```swift
class var isEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

It isn’t necessary to check this value before adding a [UILargeContentViewerInteraction](../uilargecontentviewerinteraction.md) to a view, but it may be helpful if you need to adjust the behavior of coexisting gesture handlers. For example, a button with a long press handler might increase its long press duration so the user can read the text in the large content viewer first.

## See Also

### Detecting the large content viewer

- [enabledStatusDidChangeNotification](enabledstatusdidchangenotification.md): A notification the system posts when it enables or disables the large content viewer.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the large content viewer is enabled on the device.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

It isn’t necessary to check this value before adding a [UILargeContentViewerInteraction](../uilargecontentviewerinteraction.md) to a view, but it may be helpful if you need to adjust the behavior of coexisting gesture handlers. For example, a button with a long press handler might increase its long press duration so the user can read the text in the large content viewer first.

## See Also

### Detecting the large content viewer

- [UILargeContentViewerInteractionEnabledStatusDidChangeNotification](enabledstatusdidchangenotification.md): A notification the system posts when it enables or disables the large content viewer.
