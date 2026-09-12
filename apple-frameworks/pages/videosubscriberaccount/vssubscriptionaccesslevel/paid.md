> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscriptionaccesslevel/paid](https://developer.apple.com/documentation/videosubscriberaccount/vssubscriptionaccesslevel/paid)

# VSSubscriptionAccessLevel.paid (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Case  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The user has access to content that requires a paid subscription.

> Use VSUserAccount and VSUserAccountType instead.

## Declaration

```swift
case paid
```

<a id="Discussion"></a>

## Discussion

This value corresponds to content in your availability feed with the *subscription* offering type. Subscribers with this access level can also access free content.

## See Also

### Subscription Tiers

- [VSSubscriptionAccessLevel.freeWithAccount](freewithaccount.md): Deprecated. The user has access to free content with a valid account.
- [VSSubscriptionAccessLevel.unknown](unknown.md): Deprecated. The default access level.

# VSSubscriptionAccessLevelPaid (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The user has access to content that requires a paid subscription.

> Use VSUserAccount and VSUserAccountType instead.

## Declaration

```objectivec
VSSubscriptionAccessLevelPaid
```

<a id="Discussion"></a>

## Discussion

This value corresponds to content in your availability feed with the *subscription* offering type. Subscribers with this access level can also access free content.

## See Also

### Subscription Tiers

- [VSSubscriptionAccessLevelFreeWithAccount](freewithaccount.md): Deprecated. The user has access to free content with a valid account.
- [VSSubscriptionAccessLevelUnknown](unknown.md): Deprecated. The default access level.
