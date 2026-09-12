> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscription/billingidentifier](https://developer.apple.com/documentation/videosubscriberaccount/vssubscription/billingidentifier)

# billingIdentifier (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 18.0) · iPadOS 11.3+ (deprecated in 18.0) · Mac Catalyst 11.3+ (deprecated in 18.0) · macOS · tvOS 11.3+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The subscriber’s billing group.

## Declaration

```swift
var billingIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this property to restrict content availability based on the proximity of the billing address to a specific venue.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.

# billingIdentifier (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 18.0) · iPadOS 11.3+ (deprecated in 18.0) · macOS · tvOS 11.3+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The subscriber’s billing group.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * billingIdentifier;
```

<a id="Discussion"></a>

## Discussion

You can use this property to restrict content availability based on the proximity of the billing address to a specific venue.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.
