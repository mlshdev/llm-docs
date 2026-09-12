> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laaccesscontroloperation](https://developer.apple.com/documentation/localauthentication/laaccesscontroloperation)

# LAAccessControlOperation (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Operations to be evaluated for access control.

## Declaration

```swift
enum LAAccessControlOperation
```

<a id="overview"></a>

## Overview

Use one of these values to specify the operation for which you want to evaluate an access control when calling the [evaluateAccessControl(\_:operation:localizedReason:reply:)](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md) method.

## Topics

### Constants

- [LAAccessControlOperation.createItem](laaccesscontroloperation/createitem.md): Specifies that access control is used for item creation.
- [LAAccessControlOperation.useItem](laaccesscontroloperation/useitem.md): Specifies that access control is used for accessing an existing item.
- [LAAccessControlOperation.createKey](laaccesscontroloperation/createkey.md): Specifies that access control is used for key creation.
- [LAAccessControlOperation.useKeySign](laaccesscontroloperation/usekeysign.md): Specifies that access control is used for accessing an existing key.
- [LAAccessControlOperation.useKeyDecrypt](laaccesscontroloperation/usekeydecrypt.md): Specifies that access control is used for data decryption using existing key.
- [LAAccessControlOperation.useKeyKeyExchange](laaccesscontroloperation/usekeykeyexchange.md): Specifies that access control is used for key exchange.

### Initializers

- [init(rawValue:)](laaccesscontroloperation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Evaluating access controls

- [evaluateAccessControl(\_:operation:localizedReason:reply:)](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [interactionNotAllowed](lacontext/interactionnotallowed.md): A Boolean value indicating whether authentication can be interactive.

# LAAccessControlOperation (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

Operations to be evaluated for access control.

## Declaration

```objectivec
enum LAAccessControlOperation : NSInteger;
```

<a id="overview"></a>

## Overview

Use one of these values to specify the operation for which you want to evaluate an access control when calling the [evaluateAccessControl:operation:localizedReason:reply:](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md) method.

## Topics

### Constants

- [LAAccessControlOperationCreateItem](laaccesscontroloperation/createitem.md): Specifies that access control is used for item creation.
- [LAAccessControlOperationUseItem](laaccesscontroloperation/useitem.md): Specifies that access control is used for accessing an existing item.
- [LAAccessControlOperationCreateKey](laaccesscontroloperation/createkey.md): Specifies that access control is used for key creation.
- [LAAccessControlOperationUseKeySign](laaccesscontroloperation/usekeysign.md): Specifies that access control is used for accessing an existing key.
- [LAAccessControlOperationUseKeyDecrypt](laaccesscontroloperation/usekeydecrypt.md): Specifies that access control is used for data decryption using existing key.
- [LAAccessControlOperationUseKeyKeyExchange](laaccesscontroloperation/usekeykeyexchange.md): Specifies that access control is used for key exchange.

## See Also

### Evaluating access controls

- [evaluateAccessControl:operation:localizedReason:reply:](lacontext/evaluateaccesscontrol%28__operation_localizedreason_reply_%29.md): Evaluates an access control for a given operation.
- [interactionNotAllowed](lacontext/interactionnotallowed.md): A Boolean value indicating whether authentication can be interactive.
