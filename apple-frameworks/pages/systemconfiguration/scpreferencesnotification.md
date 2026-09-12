> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencesnotification](https://developer.apple.com/documentation/systemconfiguration/scpreferencesnotification)

# SCPreferencesNotification (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of notification (used with the [SCPreferencesCallBack](scpreferencescallback.md) callback).

## Declaration

```swift
struct SCPreferencesNotification
```

## Mentioned In

- [notificationType](1808421-notificationtype.md)

## Topics

### Constants

- [commit](scpreferencesnotification/commit.md): Indicates when new preferences have been saved.
- [apply](scpreferencesnotification/apply.md): Indicates when a request has been made to apply the currently saved preferences to the active system configuration.

### Initializers

- [init(rawValue:)](scpreferencesnotification/init%28rawvalue_%29.md): Creates a preferences notification structure with the specified raw value.

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

# SCPreferencesNotification (Objective-C)

**Framework:** System Configuration  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of notification (used with the [SCPreferencesCallBack](scpreferencescallback.md) callback).

## Declaration

```objectivec
enum SCPreferencesNotification : uint32_t;
```

## Mentioned In

- [notificationType](1808421-notificationtype.md)

## Topics

### Constants

- [kSCPreferencesNotificationCommit](scpreferencesnotification/commit.md): Indicates when new preferences have been saved.
- [kSCPreferencesNotificationApply](scpreferencesnotification/apply.md): Indicates when a request has been made to apply the currently saved preferences to the active system configuration.
