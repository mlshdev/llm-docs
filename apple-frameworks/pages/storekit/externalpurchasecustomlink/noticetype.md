> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/noticetype

# ExternalPurchaseCustomLink.NoticeType

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 18.1+ (deprecated in 27.2) · iPadOS 18.1+ (deprecated in 27.2) · Mac Catalyst 18.1+ (deprecated in 27.2) · macOS 15.1+ (deprecated in 27.2) · tvOS 18.1+ (deprecated in 27.2) · visionOS 2.1+ (deprecated in 27.2) · watchOS 11.1+ (deprecated in 27.2)

The custom link out style that informs the type of disclosure notice to display.

> Use \`ExternalPurchaseType\` instead.

## Declaration

```swift
enum NoticeType
```

<a id="overview"></a>

## Overview

Provide a notice type value when you call [showNotice(type:)](shownotice%28type_%29.md).

## Topics

### Getting notice types

- [ExternalPurchaseCustomLink.NoticeType.browser](noticetype/browser.md): Deprecated. A notice type that indicates your app displays external purchases in a destination of your choice.
- [ExternalPurchaseCustomLink.NoticeType.withinApp](noticetype/withinapp.md): Deprecated. A notice type that indicates that you display the destination in a web view or native experience within the app.

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

### Deprecated methods and values

- [showNotice(type:)](shownotice%28type_%29.md): Deprecated. Displays the system disclosure notice sheet and asks the customer whether to continue.
- [token(for:)](token%28for_%29-1fyo.md): Deprecated. Returns an external purchase token of the specified type.
