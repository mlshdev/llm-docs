> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlerrornetworkunavailablereason](https://developer.apple.com/documentation/foundation/nsurlerrornetworkunavailablereason)

# NSURLErrorNetworkUnavailableReason

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of reasons why a task couldn’t satisfy networking constraints.

## Declaration

```objectivec
enum NSURLErrorNetworkUnavailableReason : NSInteger;
```

<a id="overview"></a>

## Overview

The network may be unavailable due to restrictions placed on the [NSURLSessionConfiguration](urlsessionconfiguration.md), such as [allowsConstrainedNetworkAccess](urlsessionconfiguration/allowsconstrainednetworkaccess.md), [allowsExpensiveNetworkAccess](urlsessionconfiguration/allowsexpensivenetworkaccess.md) and [allowsCellularAccess](urlsessionconfiguration/allowscellularaccess.md).

## Topics

### Unavailability reasons

- [NSURLErrorNetworkUnavailableReasonCellular](nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasoncellular.md): A reason that indicates network is unavailable because the interface is cellular and cellular network is disabled.
- [NSURLErrorNetworkUnavailableReasonConstrained](nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonconstrained.md): A reason that indicates network is unavailable because the user enabled “Low Data Mode” in the Settings app.
- [NSURLErrorNetworkUnavailableReasonExpensive](nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonexpensive.md): A reason that indicates network is unavailable because the system marked the interface as expensive.

### Enumeration Cases

- [NSURLErrorNetworkUnavailableReasonUltraConstrained](nsurlerrornetworkunavailablereason/nsurlerrornetworkunavailablereasonultraconstrained.md): The network is unavailable because the ultra-constrained interface is not available.

## See Also

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
