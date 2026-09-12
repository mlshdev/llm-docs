> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clserroruserinfokey](https://developer.apple.com/documentation/classkit/clserroruserinfokey)

# CLSErrorUserInfoKey (Swift)

**Framework:** ClassKit  
**Kind:** Structure  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Keys that appear in the user info dictionary in errors that ClassKit creates.

## Declaration

```swift
struct CLSErrorUserInfoKey
```

## Topics

### Keys

- [objectKey](clserroruserinfokey/objectkey.md): A key whose value is the object that caused the error.
- [successfulObjectsKey](clserroruserinfokey/successfulobjectskey.md)
- [underlyingErrorsKey](clserroruserinfokey/underlyingerrorskey.md): A key whose value is the array of errors that contributed to this error.

### Initializers

- [init(\_:)](clserroruserinfokey/init%28__%29.md): Initializes the key.
- [init(rawValue:)](clserroruserinfokey/init%28rawvalue_%29.md): Initializes the key with a value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CLSError](clserror.md): Errors issued by ClassKit.
- [CLSErrorCodeDomain](clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.
- [CLSError.Code](clserror/code.md): Error codes that ClassKit issues.

# CLSErrorUserInfoKey (Objective-C)

**Framework:** ClassKit  
**Kind:** Type Alias  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Keys that appear in the user info dictionary in errors that ClassKit creates.

## Declaration

```objectivec
typedef NSString * CLSErrorUserInfoKey;
```

## Topics

### Keys

- [CLSErrorObjectKey](clserroruserinfokey/objectkey.md): A key whose value is the object that caused the error.
- [CLSErrorSuccessfulObjectsKey](clserroruserinfokey/successfulobjectskey.md)
- [CLSErrorUnderlyingErrorsKey](clserroruserinfokey/underlyingerrorskey.md): A key whose value is the array of errors that contributed to this error.

## See Also

### Errors

- [CLSErrorCodeDomain](clserrorcodedomain.md): The error domain that ClassKit uses when issuing errors.
- [CLSErrorCode](clserror/code.md): Error codes that ClassKit issues.
