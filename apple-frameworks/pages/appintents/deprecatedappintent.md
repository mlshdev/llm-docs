> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/deprecatedappintent](https://developer.apple.com/documentation/appintents/deprecatedappintent)

# DeprecatedAppIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An app intent that marks an action as deprecated and informs people which action to use instead.

## Declaration

```swift
protocol DeprecatedAppIntent : AppIntent
```

## Topics

### Associated Types

- [ReplacementIntent](deprecatedappintent/replacementintent.md)

### Type Properties

- [deprecation](deprecatedappintent/deprecation.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common actions

- [OpenIntent](openintent.md): An app intent that opens and displays a specific item in your app’s interface.
- [OpenURLIntent](openurlintent.md): An app intent that opens one of your universal links and displays its contents.
- [SetValueIntent](setvalueintent.md): An intent that contains a value which can be set.
- [DeleteIntent](deleteintent.md): Delete the associated entity(s).
