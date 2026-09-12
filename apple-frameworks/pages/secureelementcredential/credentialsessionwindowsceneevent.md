> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsessionwindowsceneevent](https://developer.apple.com/documentation/secureelementcredential/credentialsessionwindowsceneevent)

# CredentialSessionWindowSceneEvent

**Framework:** SecureElementCredential  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A CredentialSession event send to a `UIScene` or `UIWindowScene`.

## Declaration

```swift
enum CredentialSessionWindowSceneEvent
```

## Mentioned In

- [Accessing and using secure element credentials](accessing-and-using-secure-element-credentials.md)

<a id="overview"></a>

## Overview

All files that refer to symbols defined here should never `import SwiftUI` Importing SwiftUI with UIKit will result in ambiguous symbols during compilation.

## Topics

### Events

- [CredentialSessionWindowSceneEvent.presentation](credentialsessionwindowsceneevent/presentation.md): User has perform gesture on device to request for app presentation
- [CredentialSessionWindowSceneEvent.readerDetected](credentialsessionwindowsceneevent/readerdetected.md): External NFC reader is detected, i.e. presence of a NFC field

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Handling events

- [windowScene(\_:didReceiveCredentialSessionWindowSceneEvent:)](credentialsessionwindowscenedelegate/windowscene%28__didreceivecredentialsessionwindowsceneevent_%29.md)
