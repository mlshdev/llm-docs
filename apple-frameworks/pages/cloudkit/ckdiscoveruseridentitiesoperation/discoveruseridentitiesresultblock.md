> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckdiscoveruseridentitiesoperation/discoveruseridentitiesresultblock](https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/discoveruseridentitiesresultblock)

# discoverUserIdentitiesResultBlock

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS · watchOS 8.0+ (deprecated in 10.0)

The closure to execute when the operation finishes.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
var discoverUserIdentitiesResultBlock: ((Result<Void, any Error>) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

The closure returns no value and takes the following parameter:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either:

  - A successful `Result`, or
  - An error that contains information about a problem encountered fetching the user identities.

This closure executes only once, after all of the individual discovery closures finish. The closure executes serially with respect to the operation’s other closures. If you intend to use this closure to process results, update the property’s value before you execute the operation or submit it to a queue.
