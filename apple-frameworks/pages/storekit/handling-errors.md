> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/handling-errors](https://developer.apple.com/documentation/storekit/handling-errors)

# Handling errors (Swift)

**Framework:** StoreKit  
**Kind:** Article

Determine the underlying cause of errors that result from StoreKit requests.

<a id="overview"></a>

## Overview

A StoreKit request may fail for one of many possible reasons, including invalid product information, invalid payment details, problems with your App Store Connect account, or networking issues. When an error occurs, check the error code to find out what went wrong.

<a id="Determine-the-cause-of-the-error"></a>

### Determine the cause of the error

When handling errors, such as with the [request(\_:didFailWithError:)](skrequestdelegate/request%28__didfailwitherror_%29.md) delegate method, it’s important to use the [domain](../foundation/nserror/domain.md) and [code](../foundation/nserror/code.md) of the resulting error to determine the underlying cause of failure.

StoreKit uses [SKErrorDomain](skerrordomain.md) for errors related to payments, store products, and cloud services, as described in [SKError.Code](skerror/code.md). For additional information on troubleshooting StoreKit framework issues, see the [In-App Purchase FAQ](https://developer.apple.com/library/archive/technotes/tn2413/_index.html#//apple_ref/doc/uid/DTS40016228).

Errors related to networking use [NSURLErrorDomain](../foundation/nsurlerrordomain.md). The following table describes some of the most common networking errors that may occur when using StoreKit:

| Error code | Description |
| --- | --- |
| [NSURLErrorTimedOut](../foundation/nsurlerrortimedout-swift.var.md) (`-1001`) | The connection timed out. |
| [NSURLErrorCannotFindHost](../foundation/nsurlerrorcannotfindhost-swift.var.md) (`-1003`) | The connection failed because it can’t find the host. |
| [NSURLErrorCannotConnectToHost](../foundation/nsurlerrorcannotconnecttohost-swift.var.md) (`-1004`) | The connection failed because it can’t connect to the host. |
| [NSURLErrorNetworkConnectionLost](../foundation/nsurlerrornetworkconnectionlost-swift.var.md) (`-1005`) | The connection failed because it lost the network connection. |
| [NSURLErrorNotConnectedToInternet](../foundation/nsurlerrornotconnectedtointernet-swift.var.md) (`-1009`) | The connection failed because the device isn’t connected to the internet. |
| [NSURLErrorUserCancelledAuthentication](../foundation/nsurlerrorusercancelledauthentication-swift.var.md) (`-1012`) | The connection failed because the user canceled required authentication. |
| [NSURLErrorSecureConnectionFailed](../foundation/nsurlerrorsecureconnectionfailed-swift.var.md) (`-1200`) | The secure connection failed for an unknown reason. |

## See Also

### Errors

- [SKError.Code](skerror/code.md): Error codes for StoreKit errors.
- [SKError](skerror.md): StoreKit error descriptions, codes, and domains.
- [SKErrorDomain](skerrordomain.md): The error domain name for StoreKit errors.

# Handling errors (Objective-C)

**Framework:** StoreKit  
**Kind:** Article

Determine the underlying cause of errors that result from StoreKit requests.

<a id="overview"></a>

## Overview

A StoreKit request may fail for one of many possible reasons, including invalid product information, invalid payment details, problems with your App Store Connect account, or networking issues. When an error occurs, check the error code to find out what went wrong.

<a id="Determine-the-cause-of-the-error"></a>

### Determine the cause of the error

When handling errors, such as with the [request:didFailWithError:](skrequestdelegate/request%28__didfailwitherror_%29.md) delegate method, it’s important to use the [domain](../foundation/nserror/domain.md) and [code](../foundation/nserror/code.md) of the resulting error to determine the underlying cause of failure.

StoreKit uses [SKErrorDomain](skerrordomain.md) for errors related to payments, store products, and cloud services, as described in [SKErrorCode](skerror/code.md). For additional information on troubleshooting StoreKit framework issues, see the [In-App Purchase FAQ](https://developer.apple.com/library/archive/technotes/tn2413/_index.html#//apple_ref/doc/uid/DTS40016228).

Errors related to networking use [NSURLErrorDomain](../foundation/nsurlerrordomain.md). The following table describes some of the most common networking errors that may occur when using StoreKit:

| Error code | Description |
| --- | --- |
| [NSURLErrorTimedOut](../foundation/nsurlerrortimedout-swift.var.md) (`-1001`) | The connection timed out. |
| [NSURLErrorCannotFindHost](../foundation/nsurlerrorcannotfindhost-swift.var.md) (`-1003`) | The connection failed because it can’t find the host. |
| [NSURLErrorCannotConnectToHost](../foundation/nsurlerrorcannotconnecttohost-swift.var.md) (`-1004`) | The connection failed because it can’t connect to the host. |
| [NSURLErrorNetworkConnectionLost](../foundation/nsurlerrornetworkconnectionlost-swift.var.md) (`-1005`) | The connection failed because it lost the network connection. |
| [NSURLErrorNotConnectedToInternet](../foundation/nsurlerrornotconnectedtointernet-swift.var.md) (`-1009`) | The connection failed because the device isn’t connected to the internet. |
| [NSURLErrorUserCancelledAuthentication](../foundation/nsurlerrorusercancelledauthentication-swift.var.md) (`-1012`) | The connection failed because the user canceled required authentication. |
| [NSURLErrorSecureConnectionFailed](../foundation/nsurlerrorsecureconnectionfailed-swift.var.md) (`-1200`) | The secure connection failed for an unknown reason. |

## See Also

### Errors

- [SKErrorCode](skerror/code.md): Error codes for StoreKit errors.
- [SKErrorDomain](skerrordomain.md): The error domain name for StoreKit errors.
