> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/customintentmigratedappintent](https://developer.apple.com/documentation/appintents/customintentmigratedappintent)

# CustomIntentMigratedAppIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for replacing a custom SiriKit intent that allows existing shortcuts and donations to continue working.

## Declaration

```swift
protocol CustomIntentMigratedAppIntent : AppIntent
```

## Topics

### Specifying the migrated intent’s class name

- [intentClassName](customintentmigratedappintent/intentclassname.md): The name of the SiriKit Intent class that this app intent replaces.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### SiriKit intent migration

- [Soup Chef with App Intents: Migrating custom intents](../sirikit/soup-chef-with-app-intents-migrating-custom-intents.md): Integrating App Intents to provide your appʼs actions to Siri and Shortcuts.
