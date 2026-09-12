> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/deleteintent](https://developer.apple.com/documentation/appintents/deleteintent)

# DeleteIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Delete the associated entity(s).

## Declaration

```swift
protocol DeleteIntent : SystemIntent
```

## Topics

### Associated Types

- [Entity](deleteintent/entity.md)

### Instance Properties

- [entities](deleteintent/entities.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Common actions

- [OpenIntent](openintent.md): An app intent that opens and displays a specific item in your app’s interface.
- [OpenURLIntent](openurlintent.md): An app intent that opens one of your universal links and displays its contents.
- [SetValueIntent](setvalueintent.md): An intent that contains a value which can be set.
- [DeprecatedAppIntent](deprecatedappintent.md): An app intent that marks an action as deprecated and informs people which action to use instead.
