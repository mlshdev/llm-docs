> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscription/tieridentifiers](https://developer.apple.com/documentation/videosubscriberaccount/vssubscription/tieridentifiers)

# tierIdentifiers (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A list of content from your catalog that the subscriber can access.

> Use VSUserAccount instead.

## Declaration

```swift
var tierIdentifiers: [String]! { get set }
```

<a id="Discussion"></a>

## Discussion

You should only use values that are in your availability feed’s tier restrictions.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.

# tierIdentifiers (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A list of content from your catalog that the subscriber can access.

> Use VSUserAccount instead.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<NSString *> * tierIdentifiers;
```

<a id="Discussion"></a>

## Discussion

You should only use values that are in your availability feed’s tier restrictions.

## See Also

### Setting Subscription Details

- [accessLevel](accesslevel.md): Deprecated. The subscriber’s level of access to your catalog of content.
- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.
