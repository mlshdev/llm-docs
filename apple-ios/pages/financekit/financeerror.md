> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financeerror](https://developer.apple.com/documentation/financekit/financeerror)

# FinanceError

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Values that describe errors that may occur when accessing financial data.

## Declaration

```swift
enum FinanceError
```

## Topics

### Enumeration Cases

- [FinanceError.dataRestricted(\_:)](financeerror/datarestricted%28__%29.md): The data is in a restricted state.
- [FinanceError.historyTokenInvalid](financeerror/historytokeninvalid.md)
- [FinanceError.unknown](financeerror/unknown.md): An unknown error occurred.

### Instance Properties

- [errorCode](financeerror/errorcode.md): The error code within the given domain.
- [errorDescription](financeerror/errordescription.md): A localized message that describes what error occurred.
- [errorUserInfo](financeerror/erroruserinfo.md): The user-info dictionary that contains additional information about the error.
- [failureReason](financeerror/failurereason.md): A localized message that describes the reason for the failure.

### Type Properties

- [errorDomain](financeerror/errordomain.md): The domain of the error.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
