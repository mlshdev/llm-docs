> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationalert/dismissalcontext](https://developer.apple.com/documentation/carplay/cpnavigationalert/dismissalcontext)

# CPNavigationAlert.DismissalContext (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A set of reasons for dismissing a navigation alert.

## Declaration

```swift
enum DismissalContext
```

## Topics

### Dismissal Reasons

- [CPNavigationAlert.DismissalContext.timeout](dismissalcontext/timeout.md): The system dismissed the navigation alert due to a timeout.
- [CPNavigationAlert.DismissalContext.systemDismissed](dismissalcontext/systemdismissed.md): The system dismissed the navigation alert.
- [CPNavigationAlert.DismissalContext.userDismissed](dismissalcontext/userdismissed.md): The user dismissed the navigation alert.

### Initializers

- [init(rawValue:)](dismissalcontext/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Navigation Alerts

- [mapTemplate(\_:willShow:)](../cpmaptemplatedelegate/maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate(\_:didShow:)](../cpmaptemplatedelegate/maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate(\_:willDismiss:dismissalContext:)](../cpmaptemplatedelegate/maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate(\_:didDismiss:dismissalContext:)](../cpmaptemplatedelegate/maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.

# CPNavigationAlertDismissalContext (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A set of reasons for dismissing a navigation alert.

## Declaration

```objectivec
enum CPNavigationAlertDismissalContext : NSUInteger;
```

## Topics

### Dismissal Reasons

- [CPNavigationAlertDismissalContextTimeout](dismissalcontext/timeout.md): The system dismissed the navigation alert due to a timeout.
- [CPNavigationAlertDismissalContextSystemDismissed](dismissalcontext/systemdismissed.md): The system dismissed the navigation alert.
- [CPNavigationAlertDismissalContextUserDismissed](dismissalcontext/userdismissed.md): The user dismissed the navigation alert.

## See Also

### Handling Navigation Alerts

- [mapTemplate:willShowNavigationAlert:](../cpmaptemplatedelegate/maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate:didShowNavigationAlert:](../cpmaptemplatedelegate/maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate:willDismissNavigationAlert:dismissalContext:](../cpmaptemplatedelegate/maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate:didDismissNavigationAlert:dismissalContext:](../cpmaptemplatedelegate/maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.
