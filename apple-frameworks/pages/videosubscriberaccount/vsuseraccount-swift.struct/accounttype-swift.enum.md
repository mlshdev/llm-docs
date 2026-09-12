> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccount-swift.struct/accounttype-swift.enum](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccount-swift.struct/accounttype-swift.enum)

# VSUserAccount.AccountType

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS

Constants that represent whether a user has access to paid content.

## Declaration

```swift
enum AccountType
```

<a id="overview"></a>

## Overview

The default is [VSUserAccount.AccountType.free](accounttype-swift.enum/free.md).

## Topics

### Account types

- [VSUserAccount.AccountType.free](accounttype-swift.enum/free.md): A constant that indicates a user has access to free content.
- [VSUserAccount.AccountType.paid](accounttype-swift.enum/paid.md): A constant that indicate a user has access to paid content.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating user accounts

- [init(accountType:updateURL:)](init%28accounttype_updateurl_%29.md): Creates a user account object with a URL for account update requests.
