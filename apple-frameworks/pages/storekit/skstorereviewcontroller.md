> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstorereviewcontroller](https://developer.apple.com/documentation/storekit/skstorereviewcontroller)

# SKStoreReviewController (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 18.0) · iPadOS 10.3+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that controls the process of requesting App Store ratings and reviews from customers.

> Use [RequestReviewAction](requestreviewaction.md) instead.

## Declaration

```swift
class SKStoreReviewController
```

<a id="overview"></a>

## Overview

Use the [requestReview(in:)](skstorereviewcontroller/requestreview%28in_%29.md) method to indicate when it makes sense within the logic of your app to ask the customer for ratings and reviews.

## Topics

### Indicating an appropriate time for a review

- [requestReview(in:)](skstorereviewcontroller/requestreview%28in_%29.md): Deprecated. Tells StoreKit to ask the customer to rate or review the app, if appropriate, using the specified scene.
- [requestReview()](skstorereviewcontroller/requestreview%28%29.md): Deprecated. Tells StoreKit to ask the customer to rate or review your app, if appropriate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reviews

- [Requesting App Store reviews](requesting-app-store-reviews.md): Implement best practices for prompting users to review your app in the App Store.
- [RequestReviewAction](requestreviewaction.md): An instance that tells StoreKit to request an App Store rating or review, if appropriate.

# SKStoreReviewController (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 18.0) · iPadOS 10.3+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An object that controls the process of requesting App Store ratings and reviews from customers.

> Use [RequestReviewAction](requestreviewaction.md) instead.

## Declaration

```objectivec
@interface SKStoreReviewController : NSObject
```

<a id="overview"></a>

## Overview

Use the [requestReviewInScene:](skstorereviewcontroller/requestreview%28in_%29.md) method to indicate when it makes sense within the logic of your app to ask the customer for ratings and reviews.

## Topics

### Indicating an appropriate time for a review

- [requestReviewInScene:](skstorereviewcontroller/requestreview%28in_%29.md): Deprecated. Tells StoreKit to ask the customer to rate or review the app, if appropriate, using the specified scene.
- [requestReview](skstorereviewcontroller/requestreview%28%29.md): Deprecated. Tells StoreKit to ask the customer to rate or review your app, if appropriate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Reviews

- [Requesting App Store reviews](requesting-app-store-reviews.md): Implement best practices for prompting users to review your app in the App Store.
