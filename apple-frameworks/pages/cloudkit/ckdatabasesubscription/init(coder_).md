> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdatabasesubscription/init(coder:)](https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/init(coder:))

# init(coder:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a database subscription from a serialized instance.

## Declaration

```swift
init(coder aDecoder: NSCoder)
```

## Parameters

- `aDecoder`: The object that decodes the serialized database subscription.

## See Also

### Creating a Database Subscription

- [init()](init%28%29.md): Deprecated. Creates an empty database subscription.
- [init(subscriptionID:)](init%28subscriptionid_%29.md): Creates a named subscription for all records in a database.

# initWithCoder: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a database subscription from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## Parameters

- `aDecoder`: The object that decodes the serialized database subscription.

## See Also

### Creating a Database Subscription

- [init](init%28%29.md): Deprecated. Creates an empty database subscription.
- [initWithSubscriptionID:](initwithsubscriptionid_.md): Creates a named subscription for all records in a database.
- [new](new.md): Creates an empty database subscription.
