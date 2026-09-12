> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfsocketerror](https://developer.apple.com/documentation/corefoundation/cfsocketerror)

# CFSocketError (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Error codes for many CFSocket functions.

## Declaration

```swift
enum CFSocketError
```

## Topics

### Constants

- [CFSocketError.success](cfsocketerror/success.md): The socket operation succeeded.
- [CFSocketError.error](cfsocketerror/error.md): The socket operation failed.
- [CFSocketError.timeout](cfsocketerror/timeout.md): The socket operation timed out.

### Initializers

- [init(rawValue:)](cfsocketerror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.

# CFSocketError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Error codes for many CFSocket functions.

## Declaration

```objectivec
enum CFSocketError : CFIndex;
```

## Topics

### Constants

- [kCFSocketSuccess](cfsocketerror/success.md): The socket operation succeeded.
- [kCFSocketError](cfsocketerror/error.md): The socket operation failed.
- [kCFSocketTimeout](cfsocketerror/timeout.md): The socket operation timed out.

## See Also

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocket Flags](1560944-cfsocket-flags.md): Flags that can be set on a CFSocket object to control its behavior.
