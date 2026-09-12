> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/state-swift.struct)

# AppExtensionPoint.Monitor.State

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

A type that contains a snapshot of a monitor’s state information.

## Declaration

```swift
struct State
```

<a id="overview"></a>

## Overview

Use this type to get more detailed information about the state of the app extensions available to the host app. This type contains [AppExtensionIdentity](../../appextensionidentity.md) types for all currently available app extensions. It also contains information about how many disabled extensions are present on the system.

## Topics

### Getting the app extension status

- [identities](state-swift.struct/identities.md): The set of approved and enabled app extensions.
- [disabledCount](state-swift.struct/disabledcount.md): The number of app extensions that someone disabled.
- [unapprovedCount](state-swift.struct/unapprovedcount.md): The number of identity entries that someone hasn’t yet enabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the monitor state

- [state](state-swift.property.md): The current details about the available, disabled, and unapproved extensions.
