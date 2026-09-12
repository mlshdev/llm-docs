> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabasesubscription/initwithsubscriptionid:](https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/initwithsubscriptionid:)

# initWithSubscriptionID:

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a named subscription for all records in a database.

## Declaration

```objectivec
- (instancetype) initWithSubscriptionID:(CKSubscriptionID) subscriptionID;
```

## Parameters

- `subscriptionID`: The subscription’s name. It must be unique in the container, and must not be `nil` or an empty string.

## See Also

### Creating a Database Subscription

- [init](init%28%29.md): Deprecated. Creates an empty database subscription.
- [initWithCoder:](init%28coder_%29.md): Creates a database subscription from a serialized instance.
- [new](new.md): Creates an empty database subscription.
