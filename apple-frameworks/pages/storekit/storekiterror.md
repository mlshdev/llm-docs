> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storekiterror](https://developer.apple.com/documentation/storekit/storekiterror)

# StoreKitError

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

StoreKit In-App Purchase error codes.

## Declaration

```swift
enum StoreKitError
```

## Topics

### StoreKit Error Codes

- [StoreKitError.networkError(\_:)](storekiterror/networkerror%28__%29.md): A network error occurred.
- [StoreKitError.systemError(\_:)](storekiterror/systemerror%28__%29.md): A system error occurred.
- [StoreKitError.userCancelled](storekiterror/usercancelled.md): The user canceled.
- [StoreKitError.notAvailableInStorefront](storekiterror/notavailableinstorefront.md): The function isn’t available on devices configured for this storefront.
- [StoreKitError.notEntitled](storekiterror/notentitled.md): The app doesn’t have the appropriate entitlements to use the functionality.
- [StoreKitError.unknown](storekiterror/unknown.md): An unknown error occurred.
- [StoreKitError.unsupported](storekiterror/unsupported.md): The operation doesn’t support this product.

### Enumeration Cases

- [StoreKitError.invalidPresentationContext](storekiterror/invalidpresentationcontext.md): StoreKit UI cannot be presented from the current context.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
