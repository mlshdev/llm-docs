> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappconfigurationdecodingerror](https://developer.apple.com/documentation/managedapp/managedappconfigurationdecodingerror)

# ManagedAppConfigurationDecodingError

**Framework:** ManagedApp  
**Kind:** Protocol  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

A protocol for an error that describes an issue with decoding the configuration.

## Declaration

```swift
protocol ManagedAppConfigurationDecodingError : Decodable, Encodable, Error
```

## Mentioned In

- [Specifying and decoding a configuration](specifying-and-decoding-a-configuration.md)

<a id="overview"></a>

## Overview

For more information, see [configurations(\_:)](managedappconfigurationprovider/configurations%28__%29.md).

## Topics

### Identifying an error

- [code](managedappconfigurationdecodingerror/code.md): An app-specific error code that identifies a configuration issue.

### Interpreting an error

- [message](managedappconfigurationdecodingerror/message.md): A human-readable message that describes the configuration issue.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ManagedAppError](managedapperror.md): Errors that functions in the ManagedApp framework can throw.
- [ManagedAppConfigurationDecodingErrorCode](managedappconfigurationdecodingerrorcode.md): A code for an error that occurs during configuration decoding.
