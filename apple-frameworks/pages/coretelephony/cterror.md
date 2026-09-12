> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cterror](https://developer.apple.com/documentation/coretelephony/cterror)

# CTError (Swift)

**Framework:** Core Telephony  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

A type representing a Core Telephony error.

## Declaration

```swift
struct CTError
```

## Topics

### Getting Error Properties

- [domain](cterror/domain.md): A numeric indication of the error domain.
- [error](cterror/error.md): A code indicating the specific error.

### Identifying Error Domains

- [Error Domains](error-domain-codes.md): Error domains used by Core Telephony errors.

### Initializers

- [init()](cterror/init%28%29.md): Creates a Core Telephony error instance.
- [init(domain:error:)](cterror/init%28domain_error_%29.md): Creates a Core Telephony error instance with the given values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CTError (Objective-C)

**Framework:** Core Telephony  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

A type representing a Core Telephony error.

## Declaration

```objectivec
typedef struct { ... } CTError;
```

## Topics

### Getting Error Properties

- [domain](cterror/domain.md): A numeric indication of the error domain.
- [error](cterror/error.md): A code indicating the specific error.

### Identifying Error Domains

- [Error Domains](error-domain-codes.md): Error domains used by Core Telephony errors.
