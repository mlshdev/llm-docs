> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/message/reason-swift.struct](https://developer.apple.com/documentation/storekit/message/reason-swift.struct)

# Message.Reason

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Reasons for the App Store messages.

## Declaration

```swift
struct Reason
```

<a id="overview"></a>

## Overview

The message reason informs your app of the purpose of the message. Your app can optionally use this information when it handles the messages.

For information about handling App Store messages, see [Message](../message.md).

## Topics

### Getting the message reasons

- [billingIssue](reason-swift.struct/billingissue.md): A message the App Store sends that informs people of a billing problem and enables them to update billing information.
- [generic](reason-swift.struct/generic.md): A message the App Store sends for a generic reason.
- [priceIncreaseConsent](reason-swift.struct/priceincreaseconsent.md): A message the App Store sends when you increase the price of an auto-renewable subscription and the price increase requires the customer’s consent.
- [winBackOffer](reason-swift.struct/winbackoffer.md): A message the App Store sends when the customer is eligible for a win-back offer that you configure in App Store Connect.

### Getting the localized description

- [localizedDescription](reason-swift.struct/localizeddescription.md): A localized description of the App Store message.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Messages

- [Message](../message.md): An instance for receiving and displaying App Store messages in your app.
- [DisplayMessageAction](../displaymessageaction.md): An instance that asks StoreKit to display an App Store message, if appropriate.
