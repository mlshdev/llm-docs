> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedapperror](https://developer.apple.com/documentation/managedapp/managedapperror)

# ManagedAppError

**Framework:** ManagedApp  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

Errors that functions in the ManagedApp framework can throw.

## Declaration

```swift
enum ManagedAppError
```

## Topics

### Interpreting an error

- [ManagedAppError.invalidIdentifier](managedapperror/invalididentifier.md): An error that indicates a failure finding an identifier.

### Enumeration Cases

- [ManagedAppError.internalError](managedapperror/internalerror.md): An error that indicates a failure at the system level.
- [ManagedAppError.serverError](managedapperror/servererror.md): An error that indicates a failure requesting a secret from the asset server.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ManagedAppConfigurationDecodingError](managedappconfigurationdecodingerror.md): A protocol for an error that describes an issue with decoding the configuration.
- [ManagedAppConfigurationDecodingErrorCode](managedappconfigurationdecodingerrorcode.md): A code for an error that occurs during configuration decoding.
