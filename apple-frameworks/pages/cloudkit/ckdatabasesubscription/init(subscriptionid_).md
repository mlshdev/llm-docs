> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabasesubscription/init(subscriptionid:)](https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/init(subscriptionid:))

# init(subscriptionID:)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS · watchOS 6.0+ · Swift 4.2+

Creates a named subscription for all records in a database.

## Declaration

```swift
convenience init(subscriptionID: CKSubscription.ID)
```

## Parameters

- `subscriptionID`: The subscription’s name. CloudKit uniques subscriptions by subscriptionID. You must not provide an empty string.

## See Also

### Creating a Database Subscription

- [init()](init%28%29.md): Deprecated. Creates an empty database subscription.
- [init(coder:)](init%28coder_%29.md): Creates a database subscription from a serialized instance.
