> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscription/expirationdate](https://developer.apple.com/documentation/videosubscriberaccount/vssubscription/expirationdate)

# expirationDate (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The date when the user’s subscription expires.

> Use VSUserAccount instead.

## Declaration

```swift
var expirationDate: Date! { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the exact time when the subscription becomes inactive. When the current subscription becomes inactive, the system behaves as though the person isn’t a subscriber, similar to calling [setCurrentSubscription(\_:)](../vssubscriptionregistrationcenter/setcurrentsubscription%28__%29.md) with a value of `nil`.

You can use this property when a subscriber decides not to renew their subscription by setting an expiration date that corresponds to the final billing cycle end date.

You can also use this property when a subscription only grants access to time-limited content, such as a single season of games for a sports league.

The default is `distantFuture`.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.

# expirationDate (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The date when the user’s subscription expires.

> Use VSUserAccount instead.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSDate * expirationDate;
```

<a id="Discussion"></a>

## Discussion

This property defines the exact time when the subscription becomes inactive. When the current subscription becomes inactive, the system behaves as though the person isn’t a subscriber, similar to calling [setCurrentSubscription:](../vssubscriptionregistrationcenter/setcurrentsubscription%28__%29.md) with a value of `nil`.

You can use this property when a subscriber decides not to renew their subscription by setting an expiration date that corresponds to the final billing cycle end date.

You can also use this property when a subscription only grants access to time-limited content, such as a single season of games for a sports league.

The default is `distantFuture`.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.
