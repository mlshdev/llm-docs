> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weathererror](https://developer.apple.com/documentation/weatherkit/weathererror)

# WeatherError

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An error WeatherKit returns.

## Declaration

```swift
enum WeatherError
```

## Topics

### Getting the error type

- [WeatherError.permissionDenied](weathererror/permissiondenied.md): An error indicating permission denied.
- [WeatherError.unknown](weathererror/unknown.md): An unknown error.

### Getting the error properties

- [errorDescription](weathererror/errordescription.md): A localized message describing what error occurred.
- [failureReason](weathererror/failurereason.md): A localized message describing the reason for the failure.
- [helpAnchor](weathererror/helpanchor.md): A localized message providing text if the user requests help.
- [recoverySuggestion](weathererror/recoverysuggestion.md): A localized message describing how to recover from the failure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
