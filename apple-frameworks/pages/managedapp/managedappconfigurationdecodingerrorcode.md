> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappconfigurationdecodingerrorcode](https://developer.apple.com/documentation/managedapp/managedappconfigurationdecodingerrorcode)

# ManagedAppConfigurationDecodingErrorCode

**Framework:** ManagedApp  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

A code for an error that occurs during configuration decoding.

## Declaration

```swift
struct ManagedAppConfigurationDecodingErrorCode
```

## Mentioned In

- [Specifying and decoding a configuration](specifying-and-decoding-a-configuration.md)

<a id="overview"></a>

## Overview

The system reserves some codes for its use only. Reserved codes are equal to or greater than `firstReserved`. Codes less than the `firstReserved` value are app-specific. For more information, see [code](managedappconfigurationdecodingerror/code.md).

## Topics

### Initializing an error

- [init(rawValue:)](managedappconfigurationdecodingerrorcode/init%28rawvalue_%29.md): Initializes a configuration decoding error code.

### Identifying an error

- [rawValue](managedappconfigurationdecodingerrorcode/rawvalue.md): The error code’s value in its underlying type.

### Type Properties

- [dataCorrupted](managedappconfigurationdecodingerrorcode/datacorrupted.md): An error code that indicates the decoder encountered corrupt data.
- [firstReserved](managedappconfigurationdecodingerrorcode/firstreserved.md): An error code for the start of the range of reserved error codes.
- [generic](managedappconfigurationdecodingerrorcode/generic.md): A reserved error that indicates the decoder threw an unknown custom error.
- [keyNotFound](managedappconfigurationdecodingerrorcode/keynotfound.md): An error code that indicates the decoder encountered an unknown coding key.
- [timeout](managedappconfigurationdecodingerrorcode/timeout.md): An error code that indicates the decoder timed out.
- [typeMismatch](managedappconfigurationdecodingerrorcode/typemismatch.md): An error code that indicates the decoder encountered a type mismatch.
- [valueNotFound](managedappconfigurationdecodingerrorcode/valuenotfound.md): An error code that indicates a coding key yields no value.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ManagedAppError](managedapperror.md): Errors that functions in the ManagedApp framework can throw.
- [ManagedAppConfigurationDecodingError](managedappconfigurationdecodingerror.md): A protocol for an error that describes an issue with decoding the configuration.
