> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/discoveruseridentitiescompletionblock)

# discoverUserIdentitiesCompletionBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.12+ (deprecated in 12.0) · tvOS 10.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 8.0)

The closure to execute when the operation finishes.

> Use discoverUserIdentitiesResultBlock instead

## Declaration

```swift
var discoverUserIdentitiesCompletionBlock: (((any Error)?) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameter:

- An error if a problem occurs, or `nil` if CloudKit successfully fetches the user identities.

This closure executes only once, after all of the individual discovery closures finish. The closure executes serially with respect to the operation’s other closures. If you intend to use this closure to process results, update the property’s value before you execute the operation or submit it to a queue.

## See Also

### Processing the Results

- [userIdentityDiscoveredBlock](useridentitydiscoveredblock.md): Deprecated. The closure to execute for each user identity.

# discoverUserIdentitiesCompletionBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · tvOS 10.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The closure to execute when the operation finishes.

> Use discoverUserIdentitiesResultBlock instead

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^discoverUserIdentitiesCompletionBlock)(NSError *operationError);
```

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameter:

- An error if a problem occurs, or `nil` if CloudKit successfully fetches the user identities.

This closure executes only once, after all of the individual discovery closures finish. The closure executes serially with respect to the operation’s other closures. If you intend to use this closure to process results, update the property’s value before you execute the operation or submit it to a queue.

## See Also

### Processing the Results

- [userIdentityDiscoveredBlock](useridentitydiscoveredblock.md): Deprecated. The closure to execute for each user identity.
