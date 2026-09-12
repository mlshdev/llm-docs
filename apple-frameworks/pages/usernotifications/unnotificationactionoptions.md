> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionoptions](https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions)

# UNNotificationActionOptions (Swift)

**Framework:** User Notifications  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The behaviors you can apply to an action.

## Declaration

```swift
struct UNNotificationActionOptions
```

## Topics

### Initializers

- [init(rawValue:)](unnotificationactionoptions/init%28rawvalue_%29.md): Initializes an action options object using the specified raw value.

### Constants

- [authenticationRequired](unnotificationactionoptions/authenticationrequired.md): The action can be performed only on an unlocked device.
- [destructive](unnotificationactionoptions/destructive.md): The action performs a destructive task.
- [foreground](unnotificationactionoptions/foreground.md): The action causes the app to launch in the foreground.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting Options

- [options](unnotificationaction/options.md): The behaviors associated with the action.

# UNNotificationActionOptions (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The behaviors you can apply to an action.

## Declaration

```objectivec
enum UNNotificationActionOptions : NSUInteger;
```

## Topics

### Constants

- [UNNotificationActionOptionAuthenticationRequired](unnotificationactionoptions/authenticationrequired.md): The action can be performed only on an unlocked device.
- [UNNotificationActionOptionDestructive](unnotificationactionoptions/destructive.md): The action performs a destructive task.
- [UNNotificationActionOptionForeground](unnotificationactionoptions/foreground.md): The action causes the app to launch in the foreground.

## See Also

### Getting Options

- [options](unnotificationaction/options.md): The behaviors associated with the action.
- [UNNotificationActionOptionNone](unnotificationactionoptionnone.md): The action has the default behavior.
