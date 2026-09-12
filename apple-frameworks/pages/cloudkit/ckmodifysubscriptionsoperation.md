> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckmodifysubscriptionsoperation](https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation)

# CKModifySubscriptionsOperation (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An operation for modifying one or more subscriptions.

## Declaration

```swift
class CKModifySubscriptionsOperation
```

<a id="overview"></a>

## Overview

After you create or change the configuration of a subscription, use this operation to save those changes to the server. You can also use this operation to permanently delete subscriptions.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and passes it the results. Use the handler to perform any housekeeping tasks for the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Modify Subscriptions Operation

- [init(subscriptionsToSave:subscriptionIDsToDelete:)](ckmodifysubscriptionsoperation/init%28subscriptionstosave_subscriptionidstodelete_%29.md): Creates an operation for saving and deleting the specified subscriptions.
- [init()](ckmodifysubscriptionsoperation/init%28%29.md): Creates an empty modify subscriptions operation.

### Configuring the Modify Subscriptions Operation

- [subscriptionsToSave](ckmodifysubscriptionsoperation/subscriptionstosave.md): The subscriptions to save to the database.
- [subscriptionIDsToDelete](ckmodifysubscriptionsoperation/subscriptionidstodelete-3534e.md): The IDs of the subscriptions that you want to delete.

### Processing the Modify Subscription Results

- [modifySubscriptionsCompletionBlock](ckmodifysubscriptionsoperation/modifysubscriptionscompletionblock-7l56.md): Deprecated. The closure to execute after the operation modifies the subscriptions.

### Instance Properties

- [modifySubscriptionsResultBlock](ckmodifysubscriptionsoperation/modifysubscriptionsresultblock.md): The closure to execute after CloudKit modifies all of the subscriptions.
- [perSubscriptionDeleteBlock](ckmodifysubscriptionsoperation/persubscriptiondeleteblock-5ke2l.md): The closure to execute when CloudKit deletes a subscription.
- [perSubscriptionSaveBlock](ckmodifysubscriptionsoperation/persubscriptionsaveblock-8y9zn.md): The closure to execute when CloudKit saves a subscription.

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

- [CKFetchSubscriptionsOperation](ckfetchsubscriptionsoperation.md): An operation for fetching subscriptions.

# CKModifySubscriptionsOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

An operation for modifying one or more subscriptions.

## Declaration

```objectivec
@interface CKModifySubscriptionsOperation : CKDatabaseOperation
```

<a id="overview"></a>

## Overview

After you create or change the configuration of a subscription, use this operation to save those changes to the server. You can also use this operation to permanently delete subscriptions.

If you assign a handler to the [completionBlock](../foundation/operation/completionblock.md) property, the operation calls it after it executes and passes it the results. Use the handler to perform any housekeeping tasks for the operation. The handler you specify should manage any failures, whether due to an error or an explicit cancellation.

## Topics

### Creating a Modify Subscriptions Operation

- [initWithSubscriptionsToSave:subscriptionIDsToDelete:](ckmodifysubscriptionsoperation/initwithsubscriptionstosave_subscriptionidstodelete_.md): Creates an operation for saving and deleting the specified subscriptions.
- [init](ckmodifysubscriptionsoperation/init%28%29.md): Creates an empty modify subscriptions operation.

### Configuring the Modify Subscriptions Operation

- [subscriptionsToSave](ckmodifysubscriptionsoperation/subscriptionstosave.md): The subscriptions to save to the database.
- [subscriptionIDsToDelete](ckmodifysubscriptionsoperation/subscriptionidstodelete-14x82.md): The IDs of the subscriptions that you want to delete.

### Processing the Modify Subscription Results

- [modifySubscriptionsCompletionBlock](ckmodifysubscriptionsoperation/modifysubscriptionscompletionblock-3v0cp.md): The block to execute after the operation modifies the subscriptions.

### Instance Properties

- [perSubscriptionDeleteBlock](ckmodifysubscriptionsoperation/persubscriptiondeleteblock-55p5p.md): The closure to execute when CloudKit deletes a subscription.
- [perSubscriptionSaveBlock](ckmodifysubscriptionsoperation/persubscriptionsaveblock-1yn86.md): The closure to execute when CloudKit saves a subscription.

## Relationships

### Inherits From

- [CKDatabaseOperation](ckdatabaseoperation.md)

## See Also

### Subscription Management

- [CKFetchSubscriptionsOperation](ckfetchsubscriptionsoperation.md): An operation for fetching subscriptions.
