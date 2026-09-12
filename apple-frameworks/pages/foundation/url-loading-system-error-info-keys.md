> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url-loading-system-error-info-keys](https://developer.apple.com/documentation/foundation/url-loading-system-error-info-keys)

# URL Loading System error info keys (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Recognize these keys from the user info dictionary of error objects produced by URL Loading APIs.

<a id="overview"></a>

## Overview

These keys are only present in the [NSURLErrorDomain](nsurlerrordomain.md).

## Topics

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [URLError.NetworkUnavailableReason](urlerror/networkunavailablereason-swift.enum.md): An enumeration of reasons explaining why a task couldn’t satisfy networking constraints.

### Deprecated

- [NSErrorFailingURLStringKey](nserrorfailingurlstringkey.md): Deprecated. The URL that caused the error.

## See Also

### Errors

- [URLError](urlerror.md): Error codes returned by URL loading APIs.

# URL Loading System error info keys (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Recognize these keys from the user info dictionary of error objects produced by URL Loading APIs.

<a id="overview"></a>

## Overview

These keys are only present in the [NSURLErrorDomain](nsurlerrordomain.md).

## Topics

### Keys

- [NSURLErrorFailingURLErrorKey](nsurlerrorfailingurlerrorkey.md): The URL which caused a load to fail.
- [NSURLErrorFailingURLPeerTrustErrorKey](nsurlerrorfailingurlpeertrusterrorkey.md): The state of a failed SSL handshake.
- [NSURLErrorFailingURLStringErrorKey](nsurlerrorfailingurlstringerrorkey.md): Deprecated. The URL which caused a load to fail.
- [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md): A key in the error dictionary that provides the reason for canceling a background task.
- [URL Session Background Task Cancellation Reasons](url-session-background-task-cancellation-reasons.md): Reasons that indicate why the system canceled a background task.
- [NSURLErrorNetworkUnavailableReasonKey](nsurlerrornetworkunavailablereasonkey.md): The reason the network was unavailable for a task.
- [NSURLErrorNetworkUnavailableReason](nsurlerrornetworkunavailablereason.md): An enumeration of reasons why a task couldn’t satisfy networking constraints.

### Deprecated

- [NSErrorFailingURLStringKey](nserrorfailingurlstringkey.md): Deprecated. The URL that caused the error.
