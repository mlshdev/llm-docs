> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updateddownloads:)](https://developer.apple.com/documentation/storekit/skpaymenttransactionobserver/paymentqueue(_:updateddownloads:))

# paymentQueue(\_:updatedDownloads:) (Swift)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Tells the observer that the payment queue has updated one or more download objects.

> Hosted content is no longer supported.

## Declaration

```swift
optional func paymentQueue(_ queue: SKPaymentQueue, updatedDownloads downloads: [SKDownload])
```

## Parameters

- `queue`: The payment queue that updated the downloads.
- `downloads`: The download objects that were updated.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

When a download object is updated, its [downloadState](../skdownload/downloadstate.md) property describes how it changed.

# paymentQueue:updatedDownloads: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Tells the observer that the payment queue has updated one or more download objects.

> Hosted content is no longer supported.

## Declaration

```objectivec
- (void) paymentQueue:(SKPaymentQueue *) queue updatedDownloads:(NSArray<SKDownload *> *) downloads;
```

## Parameters

- `queue`: The payment queue that updated the downloads.
- `downloads`: The download objects that were updated.

## Mentioned In

- [Unlocking purchased content](../unlocking-purchased-content.md)

<a id="Discussion"></a>

## Discussion

When a download object is updated, its [downloadState](../skdownload/downloadstate.md) property describes how it changed.
