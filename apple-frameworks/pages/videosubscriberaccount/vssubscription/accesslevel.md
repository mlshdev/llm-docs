> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscription/accesslevel](https://developer.apple.com/documentation/videosubscriberaccount/vssubscription/accesslevel)

# accessLevel (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The subscriber’s level of access to your catalog of content.

> Use VSUserAccount instead.

## Declaration

```swift
var accessLevel: VSSubscriptionAccessLevel { get set }
```

<a id="Discussion"></a>

## Discussion

An error occurs if you try to set this property to [VSSubscriptionAccessLevel.unknown](../vssubscriptionaccesslevel/unknown.md).

## See Also

### Setting Subscription Details

- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.

# accessLevel (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The subscriber’s level of access to your catalog of content.

> Use VSUserAccount instead.

## Declaration

```objectivec
@property (nonatomic, assign) VSSubscriptionAccessLevel accessLevel;
```

<a id="Discussion"></a>

## Discussion

An error occurs if you try to set this property to [VSSubscriptionAccessLevelUnknown](../vssubscriptionaccesslevel/unknown.md).

## See Also

### Setting Subscription Details

- [VSSubscriptionAccessLevel](../vssubscriptionaccesslevel.md): Deprecated. Constants representing a subscriber’s level of access to your content.
- [billingIdentifier](billingidentifier.md): Deprecated. The subscriber’s billing group.
- [expirationDate](expirationdate.md): Deprecated. The date when the user’s subscription expires.
- [tierIdentifiers](tieridentifiers.md): Deprecated. A list of content from your catalog that the subscriber can access.
