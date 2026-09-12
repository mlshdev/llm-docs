> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharerequestaccessoperation](https://developer.apple.com/documentation/cloudkit/cksharerequestaccessoperation)

# CKShareRequestAccessOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
class CKShareRequestAccessOperation
```

## Topics

### Initializers

- [init()](cksharerequestaccessoperation/init%28%29.md): Creates a new, empty share request access operation.
- [init(shareURLs:)](cksharerequestaccessoperation/init%28shareurls_%29.md): Creates a share request access operation configured with specified share URLs.

### Instance Properties

- [perShareAccessRequestResultBlock](cksharerequestaccessoperation/pershareaccessrequestresultblock.md): The closure to execute when CloudKit processes a share access request.
- [shareAccessRequestResultBlock](cksharerequestaccessoperation/shareaccessrequestresultblock.md): The closure to execute after CloudKit processes each share access request.
- [shareURLs](cksharerequestaccessoperation/shareurls.md): The URLs of the shares to request access to.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CKShareRequestAccessOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
@interface CKShareRequestAccessOperation : CKOperation
```

## Topics

### Instance Properties

- [perShareAccessRequestCompletionBlock](cksharerequestaccessoperation/pershareaccessrequestcompletionblock.md): The closure to execute when CloudKit processes a share access request.
- [shareRequestAccessCompletionBlock](cksharerequestaccessoperation/sharerequestaccesscompletionblock.md): The closure to execute after CloudKit processes all share access requests.
- [shareURLs](cksharerequestaccessoperation/shareurls.md): The URLs of the shares to request access to.

### Instance Methods

- [init](cksharerequestaccessoperation/init%28%29.md): Creates a new, empty share request access operation.
- [initWithShareURLs:](cksharerequestaccessoperation/init%28shareurls_%29.md): Creates a share request access operation configured with specified share URLs.

## Relationships

### Inherits From

- [CKOperation](ckoperation.md)
