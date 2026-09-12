> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekitui/financialconnectionuiextensionauthorizationscene](https://developer.apple.com/documentation/financekitui/financialconnectionuiextensionauthorizationscene)

# FinancialConnectionUIExtensionAuthorizationScene

**Framework:** FinanceKitUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Implement this scene to authorize your app’s Financial Connection

## Declaration

```swift
@MainActor @preconcurrency struct FinancialConnectionUIExtensionAuthorizationScene<Content> where Content : View
```

<a id="overview"></a>

## Overview

Your scene will be provided a `FinancialConnectionExtensionAuthorizationRequest`. Use this request to query parameters necessary for authentication, and callback when complete.

## Topics

### Initializers

- [init(content:)](financialconnectionuiextensionauthorizationscene/init%28content_%29.md)

## Relationships

### Conforms To

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)
- [FinancialConnectionUIExtensionScene](financialconnectionuiextensionscene.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
