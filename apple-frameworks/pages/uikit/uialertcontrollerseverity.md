> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uialertcontrollerseverity](https://developer.apple.com/documentation/uikit/uialertcontrollerseverity)

# UIAlertControllerSeverity (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants for specifying the severity of an alert in apps built with Mac Catalyst.

## Declaration

```swift
enum UIAlertControllerSeverity
```

<a id="overview"></a>

## Overview

This enumeration defines the severity options used by the [severity](uialertcontroller/severity.md) property of [UIAlertController](uialertcontroller.md). In apps built with Mac Catalyst, the severity determines the style of the presented alert. A [UIAlertControllerSeverity.critical](uialertcontrollerseverity/critical.md) alert appears with a caution icon, and an alert with a [UIAlertControllerSeverity.default](uialertcontrollerseverity/default.md) severity doesn’t. UIKit ignores the alert severity on iOS.

You should only use the [UIAlertControllerSeverity.critical](uialertcontrollerseverity/critical.md) severity if an alert truly requires special attention from the user. For more information, see the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/windows-and-views/alerts/) on alerts.

## Topics

### Constants

- [UIAlertControllerSeverity.critical](uialertcontrollerseverity/critical.md): Indicates that the system should present the alert using the critical, or caution, style.
- [UIAlertControllerSeverity.default](uialertcontrollerseverity/default.md): Indicates that the system should present the alert using the standard alert style.

### Initializers

- [init(rawValue:)](uialertcontrollerseverity/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring alert severity

- [severity](uialertcontroller/severity.md): Indicates the severity of the alert.

# UIAlertControllerSeverity (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Constants for specifying the severity of an alert in apps built with Mac Catalyst.

## Declaration

```objectivec
enum UIAlertControllerSeverity : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration defines the severity options used by the [severity](uialertcontroller/severity.md) property of [UIAlertController](uialertcontroller.md). In apps built with Mac Catalyst, the severity determines the style of the presented alert. A [UIAlertControllerSeverityCritical](uialertcontrollerseverity/critical.md) alert appears with a caution icon, and an alert with a [UIAlertControllerSeverityDefault](uialertcontrollerseverity/default.md) severity doesn’t. UIKit ignores the alert severity on iOS.

You should only use the [UIAlertControllerSeverityCritical](uialertcontrollerseverity/critical.md) severity if an alert truly requires special attention from the user. For more information, see the [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/windows-and-views/alerts/) on alerts.

## Topics

### Constants

- [UIAlertControllerSeverityCritical](uialertcontrollerseverity/critical.md): Indicates that the system should present the alert using the critical, or caution, style.
- [UIAlertControllerSeverityDefault](uialertcontrollerseverity/default.md): Indicates that the system should present the alert using the standard alert style.

## See Also

### Configuring alert severity

- [severity](uialertcontroller/severity.md): Indicates the severity of the alert.
