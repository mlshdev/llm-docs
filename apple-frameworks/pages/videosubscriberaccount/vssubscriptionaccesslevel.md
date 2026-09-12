> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscriptionaccesslevel](https://developer.apple.com/documentation/videosubscriberaccount/vssubscriptionaccesslevel)

# VSSubscriptionAccessLevel (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Constants representing a subscriber’s level of access to your content.

> Use VSUserAccount and VSUserAccountType instead.

## Declaration

```swift
enum VSSubscriptionAccessLevel
```

## Topics

### Subscription Tiers

- [VSSubscriptionAccessLevel.freeWithAccount](vssubscriptionaccesslevel/freewithaccount.md): Deprecated. The user has access to free content with a valid account.
- [VSSubscriptionAccessLevel.paid](vssubscriptionaccesslevel/paid.md): Deprecated. The user has access to content that requires a paid subscription.
- [VSSubscriptionAccessLevel.unknown](vssubscriptionaccesslevel/unknown.md): Deprecated. The default access level.

### Initializers

- [init(rawValue:)](vssubscriptionaccesslevel/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting Subscription Details

- [accessLevel](vssubscription/accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [billingIdentifier](vssubscription/billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](vssubscription/expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](vssubscription/tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.

# VSSubscriptionAccessLevel (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Constants representing a subscriber’s level of access to your content.

> Use VSUserAccount and VSUserAccountType instead.

## Declaration

```objectivec
enum VSSubscriptionAccessLevel : NSInteger;
```

## Topics

### Subscription Tiers

- [VSSubscriptionAccessLevelFreeWithAccount](vssubscriptionaccesslevel/freewithaccount.md): Deprecated. The user has access to free content with a valid account.
- [VSSubscriptionAccessLevelPaid](vssubscriptionaccesslevel/paid.md): Deprecated. The user has access to content that requires a paid subscription.
- [VSSubscriptionAccessLevelUnknown](vssubscriptionaccesslevel/unknown.md): Deprecated. The default access level.

## See Also

### Setting Subscription Details

- [accessLevel](vssubscription/accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [billingIdentifier](vssubscription/billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](vssubscription/expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](vssubscription/tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.
