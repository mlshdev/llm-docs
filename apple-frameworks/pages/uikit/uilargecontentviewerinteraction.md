> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilargecontentviewerinteraction](https://developer.apple.com/documentation/uikit/uilargecontentviewerinteraction)

# UILargeContentViewerInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction that enables a gesture to present the large content viewer for cases when supporting the largest dynamic type sizes isn’t appropriate.

## Declaration

```swift
@MainActor class UILargeContentViewerInteraction
```

<a id="overview"></a>

## Overview

Don’t use the large content viewer as a replacement for proper Dynamic Type support. For example, Dynamic Type allows items in a list to grow or shrink vertically to accommodate the user’s preferred font size. Rely on the large content viewer only in situations where items must remain small due to unavoidable design constraints. For example, buttons in a tab bar remain small to leave more room for the main app content.

For more information about allowing your app’s content to adjust to varying font sizes, see [Add Dynamic Type support](creating-self-sizing-table-view-cells.md#Add-Dynamic-Type-support) and the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/text-size-and-weight/).

## Topics

### Creating large content viewer interactions

- [init(delegate:)](uilargecontentviewerinteraction/init%28delegate_%29.md): Creates an interaction object with the specified delegate.

### Customizing large content viewer interactions

- [delegate](uilargecontentviewerinteraction/delegate.md): An object that can fine-tune the large content viewer interactions, especially in the presence of other gesture recognizers.
- [gestureRecognizerForExclusionRelationship](uilargecontentviewerinteraction/gesturerecognizerforexclusionrelationship.md): A gesture recognizer that you can use to set up simultaneous recognition or failure relationships with other gesture recognizers.

### Detecting the large content viewer

- [isEnabled](uilargecontentviewerinteraction/isenabled.md): A Boolean value that indicates whether the large content viewer is enabled on the device.
- [enabledStatusDidChangeNotification](uilargecontentviewerinteraction/enabledstatusdidchangenotification.md): A notification the system posts when it enables or disables the large content viewer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Content viewer

- [UILargeContentViewerInteractionDelegate](uilargecontentviewerinteractiondelegate.md): An object that customizes the behavior of the large content viewer interactions.
- [UILargeContentViewerItem](uilargecontentvieweritem.md): Methods that provide details about how to display your custom content in the large content viewer.

# UILargeContentViewerInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An interaction that enables a gesture to present the large content viewer for cases when supporting the largest dynamic type sizes isn’t appropriate.

## Declaration

```objectivec
@interface UILargeContentViewerInteraction : NSObject
```

<a id="overview"></a>

## Overview

Don’t use the large content viewer as a replacement for proper Dynamic Type support. For example, Dynamic Type allows items in a list to grow or shrink vertically to accommodate the user’s preferred font size. Rely on the large content viewer only in situations where items must remain small due to unavoidable design constraints. For example, buttons in a tab bar remain small to leave more room for the main app content.

For more information about allowing your app’s content to adjust to varying font sizes, see [Add Dynamic Type support](creating-self-sizing-table-view-cells.md#Add-Dynamic-Type-support) and the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/text-size-and-weight/).

## Topics

### Creating large content viewer interactions

- [initWithDelegate:](uilargecontentviewerinteraction/init%28delegate_%29.md): Creates an interaction object with the specified delegate.

### Customizing large content viewer interactions

- [delegate](uilargecontentviewerinteraction/delegate.md): An object that can fine-tune the large content viewer interactions, especially in the presence of other gesture recognizers.
- [gestureRecognizerForExclusionRelationship](uilargecontentviewerinteraction/gesturerecognizerforexclusionrelationship.md): A gesture recognizer that you can use to set up simultaneous recognition or failure relationships with other gesture recognizers.

### Detecting the large content viewer

- [enabled](uilargecontentviewerinteraction/isenabled.md): A Boolean value that indicates whether the large content viewer is enabled on the device.
- [UILargeContentViewerInteractionEnabledStatusDidChangeNotification](uilargecontentviewerinteraction/enabledstatusdidchangenotification.md): A notification the system posts when it enables or disables the large content viewer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Content viewer

- [UILargeContentViewerInteractionDelegate](uilargecontentviewerinteractiondelegate.md): An object that customizes the behavior of the large content viewer interactions.
- [UILargeContentViewerItem](uilargecontentvieweritem.md): Methods that provide details about how to display your custom content in the large content viewer.
