> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/authorizationstatus](https://developer.apple.com/documentation/financekit/authorizationstatus)

# AuthorizationStatus

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

## Declaration

```swift
enum AuthorizationStatus
```

## Topics

### Enumeration Cases

- [AuthorizationStatus.authorized](authorizationstatus/authorized.md): A person authorized the app to use FinanceKit services.
- [AuthorizationStatus.denied](authorizationstatus/denied.md): A person denied the use of FinanceKit services for the app.
- [AuthorizationStatus.notDetermined](authorizationstatus/notdetermined.md): A person has not chosen whether the app can use FinanceKit services.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization

- [authorizationStatus()](financestore/authorizationstatus%28%29.md): Checks the authorization status for the calling application.
- [requestAuthorization()](financestore/requestauthorization%28%29.md): Prompts a person to give FinanceKit authorization to access financial data.
