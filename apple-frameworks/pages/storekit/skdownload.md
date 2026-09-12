> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skdownload](https://developer.apple.com/documentation/storekit/skdownload)

# SKDownload (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Downloadable content associated with a product.

> Hosted content is no longer supported.

## Declaration

```swift
class SKDownload
```

## Mentioned In

- [Unlocking purchased content](unlocking-purchased-content.md)

<a id="overview"></a>

## Overview

When you create a product in App Store Connect, you can associate one or more pieces of downloadable content with it. At runtime, when a product is purchased by a user, your app uses [SKDownload](skdownload.md) objects to download the content from the App Store.

Your app never directly creates a [SKDownload](skdownload.md) object. Instead, after a payment is processed, your app reads the transaction object’s [downloads](skpaymenttransaction/downloads.md) property to retrieve an array of [SKDownload](skdownload.md) objects associated with the transaction.

To download the content, you queue a download object on the payment queue and wait for the content to be downloaded. After a download completes, read the download object’s [contentURL](skdownload/contenturl.md) property to get a URL to the downloaded content. Your app must process the downloaded file before completing the transaction. For example, it might copy the file into a directory whose contents are persistent. When all downloads are complete, you finish the transaction. After the transaction is finished, the download objects cannot be queued to the payment queue and any URLs to the downloaded content are invalid.

## Topics

### Getting Content Information

- [expectedContentLength](skdownload/expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](skdownload/contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](skdownload/contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](skdownload/transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](skdownload/contentlength.md): Deprecated. The length of the downloadable content, in bytes.

### Getting State Information

- [state](skdownload/state.md): Deprecated. The current state of the download object.
- [progress](skdownload/progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](skdownload/timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](skdownload/downloadstate.md): Deprecated. The current state of the download object.

### Accessing a Completed Download

- [error](skdownload/error.md): Deprecated. The error that prevented the content from being downloaded.
- [contentURL](skdownload/contenturl.md): Deprecated. The local location of the downloaded file.

### Managing Downloaded Content

- [contentURL(forProductID:)](skdownload/contenturl%28forproductid_%29.md): Deprecated. Returns the local location for the previously downloaded flie.
- [deleteContent(forProductID:)](skdownload/deletecontent%28forproductid_%29.md): Deprecated. Deletes the previously downloaded file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content delivery

- [Unlocking purchased content](unlocking-purchased-content.md): Deliver content to the customer after validating the purchase.
- [Persisting a purchase](persisting-a-purchase.md): Keep a persistent record of a purchase to continue making the product available as needed.
- [Finishing a transaction](finishing-a-transaction.md): Finish the transaction to complete the purchase process.

# SKDownload (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 16.0) · iPadOS 6.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.8+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 6.2+ (deprecated in 9.0)

Downloadable content associated with a product.

> Hosted content is no longer supported.

## Declaration

```objectivec
@interface SKDownload : NSObject
```

## Mentioned In

- [Unlocking purchased content](unlocking-purchased-content.md)

<a id="overview"></a>

## Overview

When you create a product in App Store Connect, you can associate one or more pieces of downloadable content with it. At runtime, when a product is purchased by a user, your app uses [SKDownload](skdownload.md) objects to download the content from the App Store.

Your app never directly creates a [SKDownload](skdownload.md) object. Instead, after a payment is processed, your app reads the transaction object’s [downloads](skpaymenttransaction/downloads.md) property to retrieve an array of [SKDownload](skdownload.md) objects associated with the transaction.

To download the content, you queue a download object on the payment queue and wait for the content to be downloaded. After a download completes, read the download object’s [contentURL](skdownload/contenturl.md) property to get a URL to the downloaded content. Your app must process the downloaded file before completing the transaction. For example, it might copy the file into a directory whose contents are persistent. When all downloads are complete, you finish the transaction. After the transaction is finished, the download objects cannot be queued to the payment queue and any URLs to the downloaded content are invalid.

## Topics

### Getting Content Information

- [expectedContentLength](skdownload/expectedcontentlength.md): Deprecated. The length of the downloadable content, in bytes.
- [contentIdentifier](skdownload/contentidentifier.md): Deprecated. A string that uniquely identifies the downloadable content.
- [contentVersion](skdownload/contentversion.md): Deprecated. A string that identifies which version of the content is available for download.
- [transaction](skdownload/transaction.md): Deprecated. The transaction associated with the downloadable file.
- [contentLength](skdownload/contentlength.md): Deprecated. The length of the downloadable content, in bytes.

### Getting State Information

- [state](skdownload/state.md): Deprecated. The current state of the download object.
- [progress](skdownload/progress.md): Deprecated. A value that indicates how much of the file has been downloaded.
- [timeRemaining](skdownload/timeremaining.md): Deprecated. An estimated time, in seconds, to finish downloading the content.
- [SKDownloadTimeRemainingUnknown](skdownloadtimeremainingunknown.md): Deprecated. Indicates that the system cannot determine how much time is needed to finish downloading the content.
- [SKDownloadState](skdownloadstate.md): Deprecated. The states that a download operation can be in.
- [downloadState](skdownload/downloadstate.md): Deprecated. The current state of the download object.

### Accessing a Completed Download

- [error](skdownload/error.md): Deprecated. The error that prevented the content from being downloaded.
- [contentURL](skdownload/contenturl.md): Deprecated. The local location of the downloaded file.

### Managing Downloaded Content

- [contentURLForProductID:](skdownload/contenturl%28forproductid_%29.md): Deprecated. Returns the local location for the previously downloaded flie.
- [deleteContentForProductID:](skdownload/deletecontent%28forproductid_%29.md): Deprecated. Deletes the previously downloaded file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Content delivery

- [Unlocking purchased content](unlocking-purchased-content.md): Deliver content to the customer after validating the purchase.
- [Persisting a purchase](persisting-a-purchase.md): Keep a persistent record of a purchase to continue making the product available as needed.
- [Finishing a transaction](finishing-a-transaction.md): Finish the transaction to complete the purchase process.
