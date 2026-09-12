> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsessionwindowscenedelegate](https://developer.apple.com/documentation/secureelementcredential/credentialsessionwindowscenedelegate)

# CredentialSessionWindowSceneDelegate

**Framework:** SecureElementCredential  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Delegate to notify your `UIWindowScene` that a CredentialSession event has occurred.

## Declaration

```swift
protocol CredentialSessionWindowSceneDelegate
```

## Mentioned In

- [Accessing and using secure element credentials](accessing-and-using-secure-element-credentials.md)

<a id="overview"></a>

## Overview

All files that refer to symbols defined here should never `import SwiftUI` Importing SwiftUI with UIKit will result in ambiguous symbols during compilation.

## Topics

### Handling events

- [windowScene(\_:didReceiveCredentialSessionWindowSceneEvent:)](credentialsessionwindowscenedelegate/windowscene%28__didreceivecredentialsessionwindowsceneevent_%29.md)
- [CredentialSessionWindowSceneEvent](credentialsessionwindowsceneevent.md): A CredentialSession event send to a `UIScene` or `UIWindowScene`.
