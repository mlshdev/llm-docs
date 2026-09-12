> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/objectivecexceptionreason](https://developer.apple.com/documentation/metrickit/crashdiagnostic/objectivecexceptionreason)

# CrashDiagnostic.ObjectiveCExceptionReason

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Detailed information about an uncaught Objective-C exception that caused a crash.

## Declaration

```swift
struct ObjectiveCExceptionReason
```

## Topics

### Exception description

- [composedMessage](objectivecexceptionreason/composedmessage.md): A human-readable message string summarizing the reason for the exception.
- [formatString](objectivecexceptionreason/formatstring.md): A string representing the exception message before arguments are substituted.
- [arguments](objectivecexceptionreason/arguments.md): Arguments passed to the format string.

### Exception type

- [exceptionType](objectivecexceptionreason/exceptiontype.md): A human-readable string denoting type of the exception.
- [className](objectivecexceptionreason/classname.md): The class name of the exception
- [exceptionName](objectivecexceptionreason/exceptionname.md): The name of the exception.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
