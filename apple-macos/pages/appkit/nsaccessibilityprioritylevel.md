> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprioritylevel](https://developer.apple.com/documentation/appkit/nsaccessibilityprioritylevel)

# NSAccessibilityPriorityLevel (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

A data type for notification priority levels.

## Declaration

```swift
enum NSAccessibilityPriorityLevel
```

<a id="overview"></a>

## Overview

Use these priority levels as values for the [priority](nsaccessibility-swift.struct/notificationuserinfokey/priority.md) key.

## Topics

### Priority Levels

- [NSAccessibilityPriorityLevel.high](nsaccessibilityprioritylevel/high.md): The notification is a high priority.
- [NSAccessibilityPriorityLevel.medium](nsaccessibilityprioritylevel/medium.md): The notification is a medium priority.
- [NSAccessibilityPriorityLevel.low](nsaccessibilityprioritylevel/low.md): The notification is a low priority.

### Initializers

- [init(rawValue:)](nsaccessibilityprioritylevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [announcement](nsaccessibility-swift.struct/notificationuserinfokey/announcement.md): The announcement as a localized string.
- [uiElements](nsaccessibility-swift.struct/notificationuserinfokey/uielements.md): An array of elements for the notification.
- [priority](nsaccessibility-swift.struct/notificationuserinfokey/priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.

# NSAccessibilityPriorityLevel (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.9+

A data type for notification priority levels.

## Declaration

```objectivec
enum NSAccessibilityPriorityLevel : NSInteger;
```

<a id="overview"></a>

## Overview

Use these priority levels as values for the [NSAccessibilityPriorityKey](nsaccessibility-swift.struct/notificationuserinfokey/priority.md) key.

## Topics

### Priority Levels

- [NSAccessibilityPriorityHigh](nsaccessibilityprioritylevel/high.md): The notification is a high priority.
- [NSAccessibilityPriorityMedium](nsaccessibilityprioritylevel/medium.md): The notification is a medium priority.
- [NSAccessibilityPriorityLow](nsaccessibilityprioritylevel/low.md): The notification is a low priority.

## See Also

### Constants

- [NSAccessibilityAnnouncementKey](nsaccessibility-swift.struct/notificationuserinfokey/announcement.md): The announcement as a localized string.
- [NSAccessibilityUIElementsKey](nsaccessibility-swift.struct/notificationuserinfokey/uielements.md): An array of elements for the notification.
- [NSAccessibilityPriorityKey](nsaccessibility-swift.struct/notificationuserinfokey/priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
