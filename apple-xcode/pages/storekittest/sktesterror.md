> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesterror](https://developer.apple.com/documentation/storekittest/sktesterror)

# SKTestError

**Framework:** StoreKit Test  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about an error that the testing environment returns.

## Declaration

```swift
struct SKTestError
```

## Topics

### Error Domain

- [errorDomain](sktesterror/errordomain.md): The domain of the error.

### Error Codes

- [fileNotFound](sktesterror/filenotfound.md): The initializer can’t find the file.
- [invalidAction](sktesterror/invalidaction.md): The action is invalid.
- [invalidProductIdentifier](sktesterror/invalidproductidentifier.md): The product identifier is invalid.
- [invalidProductType](sktesterror/invalidproducttype.md): The product type is invalid.
- [invalidURL](sktesterror/invalidurl.md): The URL is invalid.
- [noSubscriptionFound](sktesterror/nosubscriptionfound.md): The test environment didn’t find a subscription.
- [noTransactionFound](sktesterror/notransactionfound.md): The test environment didn’t find a transaction.
- [serviceUnavailable](sktesterror/serviceunavailable.md): The service isn’t available.
- [SKTestError.Code](sktesterror/code.md): Error codes in the testing environment.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### StoreKit transaction testing errors

- [SKTestErrorDomain](sktesterrordomain.md): A constant that represents the domain for error codes in the testing environment.
