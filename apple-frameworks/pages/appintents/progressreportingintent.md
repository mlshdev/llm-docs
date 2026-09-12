> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/progressreportingintent](https://developer.apple.com/documentation/appintents/progressreportingintent)

# ProgressReportingIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An intent that reports progress to the system during its execution

## Declaration

```swift
protocol ProgressReportingIntent : AppIntent
```

## Topics

### Instance Properties

- [progress](progressreportingintent/progress.md): An object representing the progress of the intent’s action.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [LongRunningIntent](longrunningintent.md)

## See Also

### Communication actions

- [PushToTalkTransmissionIntent](pushtotalktransmissionintent.md): An intent that begins or ends an audio transmission with the Push to Talk framework.
- [ShowInAppSearchResultsIntent](showinappsearchresultsintent.md): An app intent that displays a set of search results in the app’s interface.
