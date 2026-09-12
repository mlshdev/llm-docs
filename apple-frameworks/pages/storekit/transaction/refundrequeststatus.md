> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/refundrequeststatus](https://developer.apple.com/documentation/storekit/transaction/refundrequeststatus)

# Transaction.RefundRequestStatus

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The status codes for refund requests.

## Declaration

```swift
enum RefundRequestStatus
```

<a id="overview"></a>

## Overview

The following methods throw the refund request status: [beginRefundRequest(in:)](beginrefundrequest%28in_%29-9k0pj.md),  [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-65tph.md), [beginRefundRequest(in:)](beginrefundrequest%28in_%29-63bvd.md), and [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-9mscy.md).

The refund request status reflects the status of the request, not the status of the refund itself.

## Topics

### Getting Refund Request Status

- [Transaction.RefundRequestStatus.userCancelled](refundrequeststatus/usercancelled.md): The user canceled submission of their refund request.
- [Transaction.RefundRequestStatus.success](refundrequeststatus/success.md): The App Store has received the refund request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting refunds

- [Testing refund requests](../testing-refund-requests.md): Test your app’s implementation of refund requests, and your app’s and server’s handling of approved and declined refunds.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-9k0pj.md): Presents the refund request sheet for the transaction in a window scene.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-63bvd.md): Presents the refund request sheet for the transaction in a view controller.
- [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-65tph.md): Presents the refund request sheet for the specified transaction in a window scene.
- [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-9mscy.md): Presents the refund request sheet for the specified transaction in a view controller.
- [Transaction.RefundRequestError](refundrequesterror.md): The error codes for refund requests.
