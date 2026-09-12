> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorysecuritysession/error](https://developer.apple.com/documentation/accessorytransportextension/accessorysecuritysession/error)

# AccessorySecuritySession.Error

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

An error that occurs during accessory security-session operations.

## Declaration

```swift
enum Error
```

<a id="overview"></a>

## Overview

The framework throws errors of this type when security-session operations fail. Use the error cases to determine the specific cause and handle it appropriately in your accessory transport-security extension.

## Topics

### Interpreting the error cause

- [AccessorySecuritySession.Error.invalidated](error/invalidated.md): Session was invalidated.
- [AccessorySecuritySession.Error.unknown](error/unknown.md): Underlying failure with an unknown cause.
- [AccessorySecuritySession.Error.unsupported](error/unsupported.md): Unsupported value, operation, etc.

### Accessing error details

- [description](error/description.md): A string that describes the error.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling session events

- [AccessorySecuritySession.EventHandler](eventhandler.md): A protocol that defines methods for handling security session events.
