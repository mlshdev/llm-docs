> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/refundrequesterror](https://developer.apple.com/documentation/storekit/transaction/refundrequesterror)

# Transaction.RefundRequestError

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The error codes for refund requests.

## Declaration

```swift
enum RefundRequestError
```

<a id="overview"></a>

## Overview

The following methods throw refund request errors: [beginRefundRequest(in:)](beginrefundrequest%28in_%29-9k0pj.md), [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-65tph.md), [beginRefundRequest(in:)](beginrefundrequest%28in_%29-63bvd.md), and [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-9mscy.md).

## Topics

### Error Enumeration

- [Transaction.RefundRequestError.duplicateRequest](refundrequesterror/duplicaterequest.md): The App Store has already received a refund request for this in-app purchase.
- [Transaction.RefundRequestError.failed](refundrequesterror/failed.md): The refund request submission failed.

### Enumeration Cases

- [Transaction.RefundRequestError.ineligible](refundrequesterror/ineligible.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting refunds

- [Testing refund requests](../testing-refund-requests.md): Test your app’s implementation of refund requests, and your app’s and server’s handling of approved and declined refunds.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-9k0pj.md): Presents the refund request sheet for the transaction in a window scene.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-63bvd.md): Presents the refund request sheet for the transaction in a view controller.
- [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-65tph.md): Presents the refund request sheet for the specified transaction in a window scene.
- [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-9mscy.md): Presents the refund request sheet for the specified transaction in a view controller.
- [Transaction.RefundRequestStatus](refundrequeststatus.md): The status codes for refund requests.
