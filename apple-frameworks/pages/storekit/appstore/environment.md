> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/environment](https://developer.apple.com/documentation/storekit/appstore/environment)

# AppStore.Environment

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Constants that represent the App Store server environment.

## Declaration

```swift
struct Environment
```

## Topics

### Getting the environment value

- [production](environment/production.md): A value that indicates the production server environment.
- [sandbox](environment/sandbox.md): A value that indicates the sandbox server environment.
- [xcode](environment/xcode.md): A value that indicates the StoreKit Testing in Xcode environment.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the environment

- [environment](../apptransaction/environment.md): The server environment that signs the app transaction.
