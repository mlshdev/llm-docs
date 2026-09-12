> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkusernotificationinterfacetype](https://developer.apple.com/documentation/watchkit/wkusernotificationinterfacetype)

# WKUserNotificationInterfaceType (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS

The type of notification interface to display.

## Declaration

```swift
enum WKUserNotificationInterfaceType
```

## Topics

### Constants

- [WKUserNotificationInterfaceType.default](wkusernotificationinterfacetype/default.md): A constant indicating that the system should display the corresponding static interface instead. When you return this value, the system takes responsibility for displaying the notification’s content.
- [WKUserNotificationInterfaceType.custom](wkusernotificationinterfacetype/custom.md): A constant indicating that the system should display your dynamic notification interface.

### Initializers

- [init(rawValue:)](wkusernotificationinterfacetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WKUserNotificationInterfaceType (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS

The type of notification interface to display.

## Declaration

```objectivec
enum WKUserNotificationInterfaceType : NSInteger;
```

## Topics

### Constants

- [WKUserNotificationInterfaceTypeDefault](wkusernotificationinterfacetype/default.md): A constant indicating that the system should display the corresponding static interface instead. When you return this value, the system takes responsibility for displaying the notification’s content.
- [WKUserNotificationInterfaceTypeCustom](wkusernotificationinterfacetype/custom.md): A constant indicating that the system should display your dynamic notification interface.
