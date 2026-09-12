> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchsubscriptionsoperation](https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation)

# CKFetchSubscriptionsOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An operation for fetching subscriptions.

## Declaration

```swift
class CKFetchSubscriptionsOperation
```

<a id="overview"></a>

## Overview

A fetch subscriptions operation retrieves subscriptions (with IDs you already know) from iCloud and can fetch all subscriptions for the current user.

You might fetch subscriptions so you can examine or modify their parameters — for example, to adjust the delivery options for push notifications that the subscription generates.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and passes it the results. Use the handler to perform any housekeeping tasks for the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Fetch Subscriptions Operation

- [init(subscriptionIDs:)](ckfetchsubscriptionsoperation/init%28subscriptionids_%29.md): Creates an operation for fetching the specified subscriptions.
- [init()](ckfetchsubscriptionsoperation/init%28%29.md): Creates an empty fetch subscriptions operation.

### Getting All Subscriptions

- [fetchAllSubscriptionsOperation()](ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation%28%29.md): Returns an operation that fetches all of the user’s subscriptions.

### Configuring the Fetch Subscriptions Operation

- [subscriptionIDs](ckfetchsubscriptionsoperation/subscriptionids-17f4q.md): The IDs of the subscriptions to fetch.

### Processing the Fetch Subscription Results

- [fetchSubscriptionCompletionBlock](ckfetchsubscriptionsoperation/fetchsubscriptioncompletionblock-6hhpi.md): Deprecated. The block to execute with the fetch results.

### Instance Properties

- [fetchSubscriptionsResultBlock](ckfetchsubscriptionsoperation/fetchsubscriptionsresultblock.md): The closure to execute after CloudKit retrieves all of the subscriptions.
- [perSubscriptionResultBlock](ckfetchsubscriptionsoperation/persubscriptionresultblock.md): The closure to execute when a subscription becomes available.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

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

### Subscription Management

- [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md): An operation for modifying one or more subscriptions.

# CKFetchSubscriptionsOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An operation for fetching subscriptions.

## Declaration

```objectivec
@interface CKFetchSubscriptionsOperation : CKDatabaseOperation
```

<a id="overview"></a>

## Overview

A fetch subscriptions operation retrieves subscriptions (with IDs you already know) from iCloud and can fetch all subscriptions for the current user.

You might fetch subscriptions so you can examine or modify their parameters — for example, to adjust the delivery options for push notifications that the subscription generates.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and passes it the results. Use the handler to perform any housekeeping tasks for the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Fetch Subscriptions Operation

- [initWithSubscriptionIDs:](ckfetchsubscriptionsoperation/initwithsubscriptionids_.md): Creates an operation for fetching the specified subscriptions.
- [init](ckfetchsubscriptionsoperation/init%28%29.md): Creates an empty fetch subscriptions operation.

### Getting All Subscriptions

- [fetchAllSubscriptionsOperation](ckfetchsubscriptionsoperation/fetchallsubscriptionsoperation%28%29.md): Returns an operation that fetches all of the user’s subscriptions.

### Configuring the Fetch Subscriptions Operation

- [subscriptionIDs](ckfetchsubscriptionsoperation/subscriptionids-714ct.md): The IDs of the subscriptions to fetch.

### Processing the Fetch Subscription Results

- [fetchSubscriptionCompletionBlock](ckfetchsubscriptionsoperation/fetchsubscriptioncompletionblock-207ep.md): The block to execute after the operation fetches the subscriptions.

### Instance Properties

- [perSubscriptionCompletionBlock](ckfetchsubscriptionsoperation/persubscriptioncompletionblock.md): The closure to execute as the operation fetches individual subscriptions.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Subscription Management

- [CKModifySubscriptionsOperation](ckmodifysubscriptionsoperation.md): An operation for modifying one or more subscriptions.
