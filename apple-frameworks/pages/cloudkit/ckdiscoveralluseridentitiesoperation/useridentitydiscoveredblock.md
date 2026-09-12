> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveralluseridentitiesoperation/useridentitydiscoveredblock](https://developer.apple.com/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/useridentitydiscoveredblock)

# userIdentityDiscoveredBlock (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The closure to execute for each user identity.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
var userIdentityDiscoveredBlock: ((CKUserIdentity) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameter:

- The user identity that matches an entry in the device’s Contacts.

The operation executes this closure one or more times for each user identity it discovers. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or add the operation to a queue.

## See Also

### Processing the Operation Results

- [discoverAllUserIdentitiesCompletionBlock](discoveralluseridentitiescompletionblock.md): Deprecated. The closure to execute when the operation finishes.

# userIdentityDiscoveredBlock (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 17.0) · iPadOS 10.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.12+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 10.0)

The closure to execute for each user identity.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^userIdentityDiscoveredBlock)(CKUserIdentity *identity);
```

<a id="discussion"></a>

## Discussion

The closure doesn’t return a value and takes the following parameter:

- The user identity that matches an entry in the device’s Contacts.

The operation executes this closure one or more times for each user identity it discovers. Each time the closure executes, it executes serially with respect to the other closures of the operation.

If you intend to use this closure to process results, set it before you execute the operation or add the operation to a queue.

## See Also

### Processing the Operation Results

- [discoverAllUserIdentitiesCompletionBlock](discoveralluseridentitiescompletionblock.md): Deprecated. The closure to execute when the operation finishes.
